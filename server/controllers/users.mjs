import { validationResult } from "express-validator";
import User from "../models/user.mjs";

async function getAllUsers(req, res) {
  const users = await User.find().sort({ updatedAt: -1 });
  res.json(users);
}

async function getUser(req, res) {
  const _id = req.params.id;
  const user = await User.findById(_id);

  if (user === null) return res.status(404).json({ msg: "Page Not Found" });

  res.json(user);
}

async function registUser(req, res) {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    const errs = errors.array();
    return res.status(400).json(errs);
  }
  const newUser = await new User(req.body);
  await newUser.save();

  res.status(201).json(newUser);
}

async function updateUser(req, res) {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    const errs = errors.array();
    return res.status(400).json(errs);
  }

  const {
    lastName,
    firstName,
    lastNameKana,
    firstNameKana,
    email,
    password,
    department,
    joinedOn,
    bornOn,
    birthplace,
    nickname,
    specialSkill,
    pastime,
    motto,
    career,
    selfIntroduction,
  } = req.body;
  const _id = req.params.id;
  const user = await User.findById(_id);

  if (user === null) return res.status(404).json({ msg: "Page Not Found" });

  if (req.body.lastName !== undefined) user.lastName = lastName;
  if (req.body.firstName !== undefined) user.firstName = firstName;
  if (req.body.lastNameKana !== undefined) user.lastNameKana = lastNameKana;
  if (req.body.firstNameKana !== undefined) user.firstNameKana = firstNameKana;
  if (req.body.email !== undefined) user.email = email;
  if (req.body.password !== undefined) user.password = password;
  if (req.body.department !== undefined) user.department = department;
  if (req.body.joinedOn !== undefined) user.joinedOn = joinedOn;
  if (req.body.bornOn !== undefined) user.bornOn = bornOn;
  if (req.body.birthplace !== undefined) user.birthplace = birthplace;
  if (req.body.nickname !== undefined) user.nickname = nickname;
  if (req.body.specialSkill !== undefined) user.specialSkill = specialSkill;
  if (req.body.pastime !== undefined) user.pastime = pastime;
  if (req.body.motto !== undefined) user.motto = motto;
  if (req.body.career !== undefined) user.career = career;
  if (req.body.selfIntroduction !== undefined)
    user.selfIntroduction = selfIntroduction;

  await user.save();
  res.json(user);
}

async function deleteUser(req, res) {
  const _id = req.params.id;
  const { deletedCount } = await User.deleteOne({ _id });

  if (deletedCount === 0) return res.status(404).json({ msg: "Page Not Found" });

  res.json({ msg: "delete succeeded." });
}

export { getAllUsers, getUser, registUser, updateUser, deleteUser };
