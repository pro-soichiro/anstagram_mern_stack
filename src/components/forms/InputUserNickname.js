const InputUserNickname = ({ register, errors }) => {
  return (
    <>
      <label htmlFor="user-nickname">ニックネーム</label>
      <input
        type="text"
        id="user-nickname"
        placeholder="ニックネーム"
        {...register("nickname")}
      />
      {errors.nickname && (
        <div className="error-msg">{errors.nickname.message}</div>
      )}
    </>
  );
};

export default InputUserNickname;
