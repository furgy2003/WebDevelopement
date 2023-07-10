// every file in the api folder is ran on the server side, therefore we can use node.js func
// "fs" and "path" are part of node.js
import fs from "fs";
import path from "path";

export function getFilePath() {
  return path.join(process.cwd(), "data", "feedback.json");
}

export function getFileData(filePath) {
  const jsonData = fs.readFileSync(filePath);
  const data = JSON.parse(jsonData);
  return data;
}

// handler func is triggered when an action is performed, it is NOT a React component but
// a standard js func that receive two parameter (request and response)
// call and ran by server upon request (not pregenerate)
export default function handler(req, res) {
  if (req.method === "POST") {
    const email = req.body.email;
    const feedback = req.body.feedback;

    const newFeedback = {
      id: Date.now(),
      email: email,
      feedback: feedback,
    };

    const filePath = getFilePath();
    const data = getFileData(filePath);

    data.push(newFeedback);
    fs.writeFileSync(filePath, JSON.stringify(data));

    res.status(201).json({ message: "done posting" });
  } else {
    const filePath = getFilePath();
    const data = getFileData(filePath);

    res.status(200).json({ feedbacks: data });
  }
}
