const FormInput = ({ label, ...otherProps }) => {
  return (
    <div className="form-Input">
      <label
        className={`${
          otherProps.value.length ? "shrink" : ""
        } form-input-label`}
      >
        {" "}
        {label}{" "}
      </label>

      <input type="text" {...otherProps} required />
    </div>
  );
};

export default FormInput;
