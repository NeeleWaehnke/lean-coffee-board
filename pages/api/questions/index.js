import dbConnect from "../../../db/dbConnect";
import Question from "../../../db/models/Question";

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === "GET") {
    const questions = await Question.find();
    const questionsArray = questions.map((question) => {
      return {
        id: question._id,
        name: question.name,
        text: question.text,
      };
    });
    res.status(200).json(questionsArray);
  }
  if (req.method === "POST") {
    const data = req.body;
    try {
      const newQuestion = await Question.create(data);
      res.status(201).json(newQuestion);
    } catch (error) {
      res.status(400).json({ message: "Try again" });
    }
  }
}
