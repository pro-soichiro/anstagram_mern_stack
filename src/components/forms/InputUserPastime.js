const InputUserPastime = ({ register, errors }) => {
  return (
    <>
      <label htmlFor="user-pastime">趣味</label>
      <input
        type="text"
        id="user-pastime"
        placeholder="趣味"
        {...register("pastime")}
      />
      {errors.pastime && (
        <div className="error-msg">{errors.pastime.message}</div>
      )}
    </>
  );
};

export default InputUserPastime;
