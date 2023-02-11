const InputUserLastNameKana = ({ register, errors }) => {
  return (
    <>
      <label htmlFor="user-lastNameKana">
        みょうじ
      </label>
      <input
        type="text"
        id="user-lastNameKana"
        placeholder="みょうじ"
        {...register("lastNameKana", {
          required: "みょうじを入力してください。",
          maxLength: { value: 10, message: `10文字以内で入力してください。` },
        })}
      />
      {errors.lastNameKana && <div className="error-msg">{errors.lastNameKana.message}</div>}
    </>
  );
};

export default InputUserLastNameKana;
