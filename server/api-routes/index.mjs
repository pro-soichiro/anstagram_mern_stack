import express from "express"
import usersRouter from "./users.mjs"


const router = express.Router();

router.use('/users', usersRouter)

export default router;