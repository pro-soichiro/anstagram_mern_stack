import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import userApi from "../api/user";

const User = () => {
  const { id } = useParams();

  const [user, setUser] = useState({})
  const [error, setError] = useState('')

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
      <div>
        <div>{error}</div>
        <h3>
          {user.lastName} {user.firstName}
        </h3>
        <p>
          {user.lastNameKana} {user.firstNameKana}
        </p>

        <div>
          <div>Email</div>
          <p>{user.email}</p>
        </div>

        <div>
          <div>部署</div>
          <p>{user.department}</p>
        </div>

        <div>
          <div>入社日</div>
          {/* <p>{user.joinedOn}</p> */}
        </div>

        <div>
          <div>生年月日</div>
          {/* <p>{user.bordOn}</p> */}
        </div>

        <div>
          <div>出身地</div>
          {/* <p>{user.birthplace}</p> */}
        </div>

        <div>
          <div>ニックネーム</div>
          {/* <p>{user.nickname}</p> */}
        </div>

        <div>
          <div>特技</div>
          {/* <p>{user.specialSkill}</p> */}
        </div>

        <div>
          <div>趣味</div>
          {/* <p>{user.pastime}</p> */}
        </div>

        <div>
          <div>座右の銘</div>
          <dl>
            {/* <dt>{user.motto.content}</dt> */}
            {/* <dd>{user.motto.description}</dd> */}
          </dl>
        </div>

        <div>
          <div>経歴</div>
          {/* <p>{user.career}</p> */}
        </div>

        <div>
          <div>自己紹介</div>
          {/* <p>{user.selfIntroduction}</p> */}
        </div>

        <div>
          <div>作成日時</div>
          {/* <p>{user.createdAt}</p> */}
        </div>

        <div>
          <div>最終更新日時</div>
          {/* <p>{user.updateAt}</p> */}
        </div>
      </div>
    </>
  );
};

export default User;
