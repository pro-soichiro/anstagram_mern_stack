import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

import { useDispatchUsers } from "../contexts/UserContext";

import userApi from "../api/user";

const DeleteModal = ({ user, toggleDeleteModal }) => {
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const dispatch = useDispatchUsers();

  const onClickDelete = () => {
    userApi
      .delete(user)
      .then(() => {
        dispatch({ type: "user/delete", user });
        toggleDeleteModal();
        navigate("/users");
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
          [ {user.lastName} {user.firstName} ]を削除しますか
        </h3>
        <div className="error-msg text-center">{error}</div>
        <div className="footer">
          <Button className="gray" onClick={toggleDeleteModal}>
            キャンセル
          </Button>
          <Button className="red" onClick={onClickDelete}>
            削除
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
