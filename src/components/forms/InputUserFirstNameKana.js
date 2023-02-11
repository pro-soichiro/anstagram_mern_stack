const InputUserFirstNameKana = ({ register, errors }) => {
  return (
    <>
      <label htmlFor="user-firstNameKana">
        なまえ
      </label>
      <input
        type="text"
        id="user-firstNameKana"
        placeholder="なまえ"
        {...register("firstNameKana", {
          required: "なまえ（かな）を入力してください。",
          maxLength: { value: 10, message: `10文字以内で入力してください。` },
        })}
      />
      {errors.firstNameKana && <div className="error-msg">{errors.firstNameKana.message}</div>}
    </>
  );
};

export default InputUserFirstNameKana;
