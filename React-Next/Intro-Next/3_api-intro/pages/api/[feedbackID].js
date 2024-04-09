import { getFilePath, getFileData } from "./feedback";

export default function handler(req, res) {
  const filePath = getFilePath();
  const data = getFileData(filePath);

  const feedbackID = req.query.feedbackID;
  const selectedFeedback = data.find((item) => feedbackID == item.id);
  // return object from backend through api
  res.status(200).json(selectedFeedback);
}
