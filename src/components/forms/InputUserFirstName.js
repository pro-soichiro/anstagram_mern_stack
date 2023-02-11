const InputUserFirstName = ({ register, errors }) => {
  return (
    <>
      <label htmlFor="user-firstName">
        名前
      </label>
      <input
        type="text"
        id="user-firstName"
        placeholder="名前"
        {...register("firstName", {
          required: "名前を入力してください。",
          maxLength: { value: 5, message: `5文字以内で入力してください。` },
        })}
      />
      {errors.firstName && <div className="error-msg">{errors.firstName.message}</div>}
    </>
  );
};

export default InputUserFirstName;
