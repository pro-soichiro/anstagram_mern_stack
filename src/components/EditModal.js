import { useState } from "react";
import { useForm } from "react-hook-form";

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

import { useDispatchUsers } from "../contexts/UserContext";

import userApi from "../api/user";

const EditModal = ({ user, setUser, toggleEditModal }) => {
  const [editedUser] = useState({ ...user });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    criteriaMode: "firstError",
    mode: "onSubmit",
    reValidateMode: "onSubmit",
    defaultValues: {
      lastName: editedUser.lastName,
      firstName: editedUser.firstName,
      lastNameKana: editedUser.lastNameKana,
      firstNameKana: editedUser.firstNameKana,
      email: editedUser.email,
      password: editedUser.password,
      department: editedUser.department,
    },
  });

  const dispatch = useDispatchUsers();

  const [error, setError] = useState("");
  const onSubmit = (inputs) => {
    const formedUser = {
      _id: editedUser._id,
      lastName: inputs.lastName,
      firstName: inputs.firstName,
      lastNameKana: inputs.lastNameKana,
      firstNameKana: inputs.firstNameKana,
      email: inputs.email,
      password: inputs.password,
      department: inputs.department,
    };

    userApi
      .patch(formedUser)
      .then((_editedUser) => {
        dispatch({ type: "user/patch", user: _editedUser });
        reset();
        setUser(_editedUser);
        toggleEditModal();
      })
      .catch((e) => {
        console.log("error occured!", e);
        setError(e);
      });
  };

  return (
    <div className="modal-container">
      <div className="modal">
        <h3 className="page-title">
          [ {user.lastName} {user.firstName} ]を編集
        </h3>
        <div className="error-msg text-center">{error}</div>

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
            <Button className="gray" onClick={toggleEditModal}>
              キャンセル
            </Button>
            <Button className="orange">更新</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditModal;
