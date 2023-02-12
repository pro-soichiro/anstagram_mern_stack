const InputUserJoinedOn = ({ register, errors }) => {
  return (
    <>
      <label htmlFor="user-joinedOn">入社日</label>
      <input type="date" id="user-joinedOn" {...register("joinedOn")} />
      {errors.joinedOn && (
        <div className="error-msg">{errors.joinedOn.message}</div>
      )}
    </>
  );
};

export default InputUserJoinedOn;
