const InputUserLastName = ({ register, errors }) => {
  return (
    <>
      <label htmlFor="user-lastName">
        苗字
      </label>
      <input
        type="text"
        id="user-lastName"
        placeholder="苗字"
        {...register("lastName", {
          required: "苗字を入力してください。",
          maxLength: { value: 5, message: `5文字以内で入力してください。` },
        })}
      />
      {errors.lastName && <div className="error-msg">{errors.lastName.message}</div>}
    </>
  );
};

export default InputUserLastName;
