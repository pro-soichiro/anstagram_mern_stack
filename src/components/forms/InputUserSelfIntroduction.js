const InputUserSelfIntroduction = ({ register, errors }) => {
  return (
    <>
      <label htmlFor="user-selfIntroduction">みんなへ挨拶</label>
      <textarea
        id="user-selfIntroduction"
        placeholder="自由に記述してください！"
        {...register("selfIntroduction")}
      />
      {errors.selfIntroduction && (
        <div className="error-msg">{errors.selfIntroduction.message}</div>
      )}
    </>
  );
};

export default InputUserSelfIntroduction;
