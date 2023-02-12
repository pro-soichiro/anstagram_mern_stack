const InputUserSpecialSkill = ({ register, errors }) => {
  return (
    <>
      <label htmlFor="user-specialSkill">特技</label>
      <input
        type="text"
        id="user-specialSkill"
        placeholder="特技"
        {...register("specialSkill")}
      />
      {errors.specialSkill && (
        <div className="error-msg">{errors.specialSkill.message}</div>
      )}
    </>
  );
};

export default InputUserSpecialSkill;
