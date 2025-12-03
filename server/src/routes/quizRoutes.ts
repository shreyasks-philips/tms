import { Router } from "express";
import { getQuestions } from "../controllers/quizController";

const router = Router();

router.get("/questions", getQuestions);

export default router;