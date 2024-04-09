// USING MONGODB //
import { connectDatabase, insertDocument } from "@/helpers/db-helper";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const email = req.body.email;

    // validate the input (although validation is done in the frontend, we should not trust because
    // users can modify those frontend code)
    if (!email || !email.includes("@")) {
      res.status(422).json({ message: "invalid" });
      return;
    }

    let client;

    try {
      client = await connectDatabase();
    } catch (error) {
      res.status(500).json({ message: "Fail connection to database" });
      return;
    }

    try {
      const result = await insertDocument(client, "register_email", {
        email: email,
      });
      res.status(201).json({ message: "succeess" });
    } catch {
      res.status(500).json({ message: "Fail connection to database" });
    }

    client.close();
  } else {
    res.status(200).json({ message: "not POST method" });
  }
}

// USING FILE TO STORE DATA //
// import { getFileData, getFilePath } from "@/helpers/fetchData";
// import fs from "fs";

// export default function handler(req, res) {
//   if (req.method === "POST") {
//     const email = req.body.email;

//     // validate the input (although validation is done in the frontend, we should not trust because
//     // users can modify those frontend code)
//     if (!email || !email.includes("@")) {
//       res.status(422).json({ message: "invalid" });
//       return;
//     }

//     const filePath = getFilePath("registrationEmail");
//     const data = getFileData(filePath);

//     const selectData = data.find((item) => item === email);
//     if (selectData) {
//       res.status(200).json({ message: "exist" });
//       return;
//     }

//     data.push(email);
//     fs.writeFileSync(filePath, JSON.stringify(data));
//     res.status(201).json({ message: "succeess" });
//   } else {
//     res.status(200).json({ message: "not POST method" });
//   }
// }
