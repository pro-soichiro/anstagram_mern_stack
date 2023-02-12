const InputUserCareer = ({ register, errors }) => {
  return (
    <>
      <label htmlFor="user-career">経歴</label>
      <textarea
        id="user-career"
        placeholder="経歴"
        {...register("career")}
      />
      {errors.career && (
        <div className="error-msg">{errors.career.message}</div>
      )}
    </>
  );
};

export default InputUserCareer;
