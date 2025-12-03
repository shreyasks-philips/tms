import { Request, Response } from "express";
import { Question } from "../models/Question";

export const getQuestions = async (_req: Request, res: Response) => {
  try {
    const questions = await Question.find();
    res.json(questions);
  } catch (err) {
    res.status(500).json({ message: "Failed to load questions" });
  }
};