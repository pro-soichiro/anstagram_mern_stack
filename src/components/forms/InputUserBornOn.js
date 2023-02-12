const InputUserBornOn = ({ register, errors }) => {
  return (
    <>
      <label htmlFor="user-bornOn">誕生日</label>
      <input type="date" id="user-bornOn" {...register("bornOn")} />
      {errors.bornOn && (
        <div className="error-msg">{errors.bornOn.message}</div>
      )}
    </>
  );
};

export default InputUserBornOn;
