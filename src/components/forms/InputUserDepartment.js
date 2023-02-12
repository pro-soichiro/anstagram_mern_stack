const InputUserDepartment = ({ register, errors }) => {
  return (
    <>
      <label htmlFor="user-department">
        部署
      </label>
      <input
        type="text"
        id="user-department"
        placeholder="部署"
        {...register("department", {
          required: "部署を入力してください。"
        })}
      />
      {errors.department && <div className="error-msg">{errors.department.message}</div>}
    </>
  );
};

export default InputUserDepartment;
