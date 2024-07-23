import { useState } from "react";
import FormInput from "../form-input/form-input.component";

const defaultFormValues = {
  firstName: "",
  lastName: "",
  email: "",
  occupation: "",
};

const UserDetails = () => {
  const [formFields, setFormFields] = useState(defaultFormValues);
  const { firstName, lastName, email, occupation } = formFields;
  console.log(formFields);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const nextStep = (event) => {
    event.preventDefault();
    return (
      <div>
        <h1> Enter Personal Details </h1>
        <form>
          <FormInput
            label="Occupation"
            type="text"
            required
            onChange={handleInputChange}
            name="occupation"
            value={occupation}
          />
        </form>
      </div>
    );
  };

  return (
    <div className="details">
      <h1> Enter User details </h1>
      <form>
        <FormInput
          label="First Name"
          type="text"
          required
          onChange={handleInputChange}
          name="firstName"
          value={firstName}
        />

        <FormInput
          label="Last Name"
          type="text"
          required
          onChange={handleInputChange}
          name="lastName"
          value={lastName}
        />

        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleInputChange}
          name="email"
          value={email}
        />
        <button onClick={nextStep} type="submit">
          {" "}
          Continue{" "}
        </button>
      </form>
    </div>
  );
};

export default UserDetails;
