import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

import userApi from "../api/user";

const Detail = styled.div`
  margin: 16px auto;
  padding: 24px;
  width: 100%;
  max-width: 600px;
  border-radius: 5px;
  box-shadow: var(--shadow-sp);
`;

const Error = styled.div`
  margin-top: 5px;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
  color: var(--red);
`;

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
  }, []);

  return (
    <>
      <Detail>
        <Error>{error}</Error>
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
          <dd>{user.joinedOn}</dd>
        </dl>

        <dl>
          <dt>生年月日</dt>
          <dd>{user.bordOn}</dd>
        </dl>

        <dl>
          <dt>出身地</dt>
          <dd>{user.birthplace}</dd>
        </dl>

        <dl>
          <dt>ニックネーム</dt>
          <dd>{user.nickname}</dd>
        </dl>

        <dl>
          <dt>特技</dt>
          <dd>{user.specialSkill}</dd>
        </dl>

        <dl>
          <dt>趣味</dt>
          <dd>{user.pastime}</dd>
        </dl>

        <dl>
          <dt>座右の銘</dt>
          {/* <dd>{user.motto.content}</dd> */}
          {/* <dd>{user.motto.description}</dd> */}
        </dl>

        <dl>
          <dt>経歴</dt>
          <dd>{user.career}</dd>
        </dl>

        <dl>
          <dt>自己紹介</dt>
          <dd>{user.selfIntroduction}</dd>
        </dl>

        <dl>
          <dt>作成日時</dt>
          <dd>{user.createdAt}</dd>
        </dl>

        <dl>
          <dt>最終更新日時</dt>
          <dd>{user.updateAt}</dd>
        </dl>
      </Detail>
    </>
  );
};

export default User;
