const InputUserPassword = ({ register, errors }) => {
  return (
    <>
      <label htmlFor="user-password">
        Password
      </label>
      <input
        type="password"
        id="user-password"
        placeholder="Password"
        {...register("password", {
          required: "passwordを入力してください。"
        })}
      />
      {errors.password && <div className="error-msg">{errors.password.message}</div>}
    </>
  );
};

export default InputUserPassword;
