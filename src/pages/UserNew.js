import { useState } from "react";
import { useForm } from "react-hook-form";

import { useDispatchUsers } from "../contexts/UserContext";

import userApi from "../api/user";

import {
  InputUserLastName,
  InputUserFirstName,
  InputUserFirstNameKana,
  InputUserLastNameKana,
  InputUserEmail,
  InputUserPassword,
  InputUserDepartment,
} from "../components/forms";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

const UserNew = () => {
  const dispatch = useDispatchUsers();

  const [error, setError] = useState("");

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    criteriaMode: "firstError",
    mode: "onSubmit",
    reValidateMode: "onSubmit",
  });

  const onSubmit = (formInputs) => {
    const formedUser = {
      ...formInputs,
      joinedOn: null,
      bornOn: null,
      birthplace: null,
      nickname: null,
      specialSkill: null,
      pastime: null,
      motto: {
        content: null,
        description: null,
      },
      career: null,
      selfIntroduction: null,
    };

    userApi
      .post(formedUser)
      .then((_newUser) => {
        dispatch({ type: "user/add", user: _newUser });
        reset();
        navigate("/users");
      })
      .catch((e) => {
        console.log("error occured!", e);
        setError(e);
      });
  };

  return (
    <div className="small-container">
      <h2 className="page-title">新規ユーザー作成フォーム</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputUserLastName register={register} errors={errors} />
        <InputUserFirstName register={register} errors={errors} />
        <InputUserLastNameKana register={register} errors={errors} />
        <InputUserFirstNameKana register={register} errors={errors} />
        <InputUserEmail register={register} errors={errors} />
        <InputUserPassword register={register} errors={errors} />
        <InputUserDepartment register={register} errors={errors} />

        <div className="error-msg text-center">{error}</div>

        <div className="footer">
          <Button className="blue">追加する</Button>
        </div>
      </form>
    </div>
  );
};

export default UserNew;
