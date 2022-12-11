import dbConnect from '../../../db/dbConnect';
import Question from '../../../db/models/Question';

export default async function handler(req, res) {
  await dbConnect();
  const id = req.query.id;

  if (req.method === 'GET') {
    try {
      const question = await Question.findById(id);
      res.status(200).json(question);
    } catch (error) {
      res.status(404).json({ message: 'Not found', details: error.message });
    }
  } else if (req.method === 'DELETE') {
    const question = await Question.findByIdAndDelete(id);
    if (question) {
      return res.status(200).json({ message: 'Question deleted' });
    } else {
      return res.status(404).json({ message: 'not found' });
    }
  } else if (req.method === 'PUT') {
    const updatedDocument = await Question.findByIdAndUpdate(
      id,
      {
        text: req.body.text,
        name: req.body.name,
      },
      { returnDocument: 'after' }
    );
    if (updatedDocument) {
      return res.status(200).json(updatedDocument);
    } else {
      return res.status(404).json({ message: 'not found' });
    }
  }
}
