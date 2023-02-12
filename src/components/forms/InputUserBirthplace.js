const InputUserBirthplace = ({ register, errors }) => {
  return (
    <>
      <label htmlFor="user-birthplace">出身地</label>
      <input
        type="text"
        id="user-birthplace"
        placeholder="出身地"
        {...register("birthplace")}
      />
      {errors.birthplace && (
        <div className="error-msg">{errors.birthplace.message}</div>
      )}
    </>
  );
};

export default InputUserBirthplace;
