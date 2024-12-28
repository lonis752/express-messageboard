import express from "express";
import { getIndex, getForm, newMessage } from "../contollers/msg-controller.js";
const router = express.Router();

router.get("/", getIndex);

router.get("/new", getForm);

router.post("/new", newMessage);

export default router;
