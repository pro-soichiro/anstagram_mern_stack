import { useState } from "react";
import { useForm } from "react-hook-form";

import { strToDateAndFormat } from "../utils/dateFormatter";

import {
  InputUserLastName,
  InputUserFirstName,
  InputUserFirstNameKana,
  InputUserLastNameKana,
  InputUserDepartment,
  InputUserJoinedOn,
  InputUserBornOn,
  InputUserBirthplace,
  InputUserNickname,
  InputUserSpecialSkill,
  InputUserPastime,
  InputUserMotto,
  InputUserCareer,
  InputUserSelfIntroduction,
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
      department: editedUser.department,
      joinedOn: editedUser.joinedOn && strToDateAndFormat(editedUser.joinedOn),
      bornOn:  editedUser.bornOn && strToDateAndFormat(editedUser.bornOn),
      birthplace:  editedUser.birthplace,
      nickname:  editedUser.nickname,
      specialSkill:  editedUser.specialSkill,
      pastime:  editedUser.pastime,
      content:  editedUser.motto.content,
      description:  editedUser.motto.description,
      career:  editedUser.career,
      selfIntroduction:  editedUser.selfIntroduction,
    },
  });

  const dispatch = useDispatchUsers();

  const [error, setError] = useState("");
  const onSubmit = (inputs) => {
    const formedUser = {
      ...editedUser,
      lastName: inputs.lastName,
      firstName: inputs.firstName,
      lastNameKana: inputs.lastNameKana,
      firstNameKana: inputs.firstNameKana,
      department: inputs.department,
      joinedOn: inputs.joinedOn,
      bornOn: inputs.bornOn,
      birthplace: inputs.birthplace,
      nickname: inputs.nickname,
      specialSkill: inputs.specialSkill,
      pastime: inputs.pastime,
      motto: {
        content: inputs.content,
        description: inputs.description,
      },
      career: inputs.career,
      selfIntroduction: inputs.selfIntroduction,
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
      <div className="modal modal__edit">
        <div className="modal__inner">
          <h3 className="page-title">
            [ {user.lastName} {user.firstName} ]を編集
          </h3>
          <div className="error-msg text-center">{error}</div>

          <form onSubmit={handleSubmit(onSubmit)}>
            <InputUserLastName register={register} errors={errors} />
            <InputUserFirstName register={register} errors={errors} />
            <InputUserLastNameKana register={register} errors={errors} />
            <InputUserFirstNameKana register={register} errors={errors} />
            <InputUserDepartment register={register} errors={errors} />
            <InputUserJoinedOn register={register} errors={errors} />
            <InputUserBornOn register={register} errors={errors} />
            <InputUserBirthplace register={register} errors={errors} />
            <InputUserNickname register={register} errors={errors} />
            <InputUserSpecialSkill register={register} errors={errors} />
            <InputUserPastime register={register} errors={errors} />
            <InputUserMotto register={register} errors={errors} />
            <InputUserCareer register={register} errors={errors} />
            <InputUserSelfIntroduction register={register} errors={errors} />

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
    </div>
  );
};

export default EditModal;
