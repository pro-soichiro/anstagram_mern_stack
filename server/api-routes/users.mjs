import express from "express";
import { body } from "express-validator";
import { deleteUser, getAllUsers, getUser, registUser, updateUser } from "../controllers/users.mjs";
import { requestErrorHandler } from "../helpers/helper.mjs"

const router = express.Router();

router.get("/", requestErrorHandler(getAllUsers));

router.get("/:id", requestErrorHandler(getUser));

router.post(
  "/",
  body("lastName").notEmpty(),
  body("firstName").notEmpty(),
  body("email").notEmpty(),
  body("password").notEmpty(),
  requestErrorHandler(registUser)
);

router.patch(
  "/:id",
  body("lastName").optional().notEmpty(),
  body("firstName").optional().notEmpty(),
  body("email").optional().notEmpty(),
  body("password").optional().notEmpty(),
  requestErrorHandler(updateUser)
);

router.delete("/:id", requestErrorHandler(deleteUser));

export default router;
