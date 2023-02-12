const InputUserMotto = ({ register, errors }) => {
  return (
    <>
      <label htmlFor="user-mottoContent">座右の銘</label>
      <input
        type="text"
        id="user-mottoContent"
        placeholder="座右の銘"
        {...register("content")}
      />
      {errors.content && (
        <div className="error-msg">{errors.content.message}</div>
      )}

      <label htmlFor="user-mottoDescription">説明</label>
      <textarea
        id="user-mottoDescription"
        placeholder="説明"
        {...register("description")}
      />
      {errors.description && (
        <div className="error-msg">{errors.description.message}</div>
      )}
    </>
  );
};

export default InputUserMotto;
