// USING MONGODB //
import {
  connectDatabase,
  getAllDocuments,
  insertDocument,
} from "@/helpers/db-helper";

export default async function handler(req, res) {
  const eventId = req.query.eid;
  const item = req.body;
  let client;
  try {
    client = await connectDatabase();
  } catch (error) {
    res.status(500).json({ message: "Connection Failed" });
  }

  if (req.method === "POST") {
    if (
      !item.email.includes("@") ||
      !item.name ||
      item.name.trim() === "" ||
      !item.text ||
      item.text.trim() === ""
    ) {
      res.status(422).json({ message: "invalid" });
      return;
    }

    const comment = {
      eventId: eventId,
      ...req.body,
    };

    try {
      const result = await insertDocument(client, "comments", comment);
      res.status(201).json({ message: "success" });
    } catch (error) {
      res.status(500).json({ message: "Connection Failed" });
    }
  }

  if (req.method === "GET") {
    try {
      const documents = await getAllDocuments("comments", {
        _id: -1,
      });

      const filterData = documents.filter((item) => {
        return item.eventId == eventId;
      });
      res.status(200).json({ message: "success", filterData: filterData });
    } catch (error) {
      res.status(500).json({ message: "Get documents failed" });
      return;
    }
  } else {
    res.status(200).json({ message: "do nothing" });
  }
  client.close();
}

// USING FILE TO STORE DATA //
// import fs from "fs";
// import { getFilePath, getFileData } from "@/helpers/fetchData";

// export default function handler(req, res) {
//   const eventId = req.query.eid;
//   const filePath = getFilePath("comment");
//   const data = getFileData(filePath);
//   if (req.method === "POST") {
//     if (
//       !item.email.includes("@") ||
//       !item.name ||
//       item.name.trim() === "" ||
//       !item.text ||
//       item.text.trim() === ""
//     ) {
//       res.status(422).json({ message: "invalid" });
//       return;
//     }
//     const comment = {
//       id: new Date().toISOString(),
//       eventId: eventId,
//       ...req.body,
//     };

//     const selectData = data.find(
//       (item) =>
//         item.eventId === comment.eventId &&
//         item.email === comment.email &&
//         item.name === comment.name &&
//         item.text === comment.text
//     );
//     if (selectData) {
//       res.status(200).json({ message: "exist" });
//       return;
//     }

//     data.push(comment);
//     fs.writeFileSync(filePath, JSON.stringify(data));
//     res.status(201).json({ message: "success" });
//   }

//   if (req.method === "GET") {
//     const filterData = data.filter((item) => item.eventId === eventId);
//     res.status(200).json({ message: "success", filterData: filterData });
//   } else {
//     res.status(200).json({ message: "do nothing" });
//   }
// }
