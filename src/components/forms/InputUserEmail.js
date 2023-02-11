const InputUserEmail = ({ register, errors }) => {
  return (
    <>
      <label htmlFor="user-email">
        Email
      </label>
      <input
        type="email"
        id="user-email"
        placeholder="Email"
        {...register("email", {
          required: "emailを入力してください。"
        })}
      />
      {errors.email && <div className="error-msg">{errors.email.message}</div>}
    </>
  );
};

export default InputUserEmail;
