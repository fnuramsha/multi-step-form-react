const FormInput = ({ label, ...otherProps }) => {
  return (
    <div className="form-Input">
      <label> {label} </label>
      <input type="text" {...otherProps} required />
    </div>
  );
};

export default FormInput;
