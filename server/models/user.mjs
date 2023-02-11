import { Schema, model } from "mongoose";

const userSchema = Schema({
  lastName: {
    type: String,
    require: true,
  },
  firstName: {
    type: String,
    require: true,
  },
  lastNameKana: {
    type: String,
    require: true,
  },
  firstNameKana: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
  department: {
    type: String,
    require: true,
  },
  joinedOn: {
    type: Date,
  },
  bornOn: {
    type: Date,
  },
  birthplace: {
    type: String,
  },
  nickname: {
    type: String,
  },
  specialSkill: {
    type: String,
  },
  pastime: {
    type: String,
  },
  motto: {
    content: {
      type: String,
    },
    description: {
      type: String,
    },
  },
  career: {
    type: String,
  },
  selfIntroduction: {
    type: String,
  },
}, { timestamps: true });

const User = model("User", userSchema);
export default User;
