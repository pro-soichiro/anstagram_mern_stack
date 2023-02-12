import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../components/Button";

import { strToDateAndFormat } from "../utils/dateFormatter";

import userApi from "../api/user";
import { createPortal } from "react-dom";
import DeleteModal from "../components/DeleteModal";
import EditModal from "../components/EditModal";

const ModalPortal = ({ children }) => {
  const target = document.querySelector("#container");
  return createPortal(children, target);
};

const User = () => {
  const { id } = useParams();

  const [user, setUser] = useState({});
  const [error, setError] = useState("");

  useEffect(() => {
    userApi
      .get(id)
      .then((_user) => {
        setUser(_user);
      })
      .catch((e) => {
        console.log("error occured!", e);
        setError("URLが不正です。");
      });
  }, [id]);

  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const toggleEditModal = () => setIsEditModalOpen((prev) => !prev);

  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const toggleDeleteModal = () => setIsDeleteModalOpen((prev) => !prev);

  const navigate = useNavigate();
  const goToUsersPage = () => navigate("/users");

  return (
    <>
      <div className="detail">
        <div className="error-msg text-center">{error}</div>
        <p>
          {user.lastNameKana} {user.firstNameKana}
        </p>
        <h3>
          {user.lastName} {user.firstName}
        </h3>
        <dl>
          <dt>Email</dt>
          <dd>{user.email}</dd>
        </dl>
        <dl>
          <dt>部署</dt>
          <dd>{user.department}</dd>
        </dl>
        <dl>
          <dt>入社日</dt>
          <dd>
            {user.joinedOn ? strToDateAndFormat(user.joinedOn, "/") : "未登録"}
          </dd>
        </dl>
        <dl>
          <dt>生年月日</dt>
          <dd>
            {user.bornOn ? strToDateAndFormat(user.bornOn, "/") : "未登録"}
          </dd>
        </dl>
        <dl>
          <dt>出身地</dt>
          <dd>{user.birthplace || "未登録"}</dd>
        </dl>
        <dl>
          <dt>ニックネーム</dt>
          <dd>{user.nickname || "未登録"}</dd>
        </dl>
        <dl>
          <dt>特技</dt>
          <dd>{user.specialSkill || "未登録"}</dd>
        </dl>
        <dl>
          <dt>趣味</dt>
          <dd>{user.pastime || "未登録"}</dd>
        </dl>
        <dl>
          <dt>座右の銘</dt>
          <dd>{user.motto?.content || "未登録"}</dd>
          <dd>説明: {user.motto?.description || "未登録"}</dd>
        </dl>
        <dl>
          <dt>経歴</dt>
          <dd>{user.career || "未登録"}</dd>
        </dl>
        <dl>
          <dt>自己紹介</dt>
          <dd>{user.selfIntroduction || "未登録"}</dd>
        </dl>
        <dl>
          <dt>作成日</dt>
          <dd>{strToDateAndFormat(user.createdAt, "/")}</dd>
        </dl>
        <dl>
          <dt>最終更新日</dt>
          <dd>{strToDateAndFormat(user.updatedAt, "/")}</dd>
        </dl>

        <div className="footer">
          <Button className="orange" onClick={toggleEditModal}>
            編集
          </Button>
          <Button className="red" onClick={toggleDeleteModal}>
            削除
          </Button>
        </div>
      </div>

      {isDeleteModalOpen && (
        <ModalPortal>
          <DeleteModal user={user} toggleDeleteModal={toggleDeleteModal} />
        </ModalPortal>
      )}

      {isEditModalOpen && (
        <ModalPortal>
          <EditModal
            user={user}
            setUser={setUser}
            toggleEditModal={toggleEditModal}
          />
        </ModalPortal>
      )}

      <div className="detail__btnToUsers">
        <Button className="gray" onClick={goToUsersPage}>
          一覧へ
        </Button>
      </div>
    </>
  );
};

export default User;
