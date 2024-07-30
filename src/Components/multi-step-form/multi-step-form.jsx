import { useState } from "react";
import Button from "../button/button.component";
import FormInput from "../form-input/form-input.component";

const defaultFormValues = {
  firstName: "",
  lastName: "",
  email: "",
  occupation: "",
  city: "",
  bio: "",
};

const MultiStepForm = () => {
  const [formFields, setFormFields] = useState(defaultFormValues);
  const [step, setStep] = useState(0);
  const { firstName, lastName, email, occupation, city, bio } = formFields;
  console.log(formFields);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const nextStep = (event) => {
    event.preventDefault();
    setStep(step + 1);
  };

  const prevStep = (event) => {
    setStep(step - 1);
  };

  const submitStep = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      {step === 0 && (
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
            <Button buttonType="continue" onClick={nextStep}>
              {" "}
              Continue{" "}
            </Button>
          </form>
        </div>
      )}
      {/* Step 2 */}
      {step === 1 && (
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
            <FormInput
              label="City"
              type="text"
              required
              onChange={handleInputChange}
              name="city"
              value={city}
            />
            <FormInput
              label="Bio"
              type="text"
              required
              onChange={handleInputChange}
              name="bio"
              value={bio}
            />
            <Button buttonType="back" onClick={prevStep}>
              Back
            </Button>
            <Button buttonType="continue" onClick={nextStep}>
              {" "}
              Continue{" "}
            </Button>
          </form>
        </div>
      )}
      {/* Step 3 */}
      {step === 2 && (
        <div>
          <h1>Confirmation Details </h1>
          <h2> User Details </h2>
          <p> First Name: {firstName} </p>
          <p> Last Name: {lastName} </p>
          <p> Email: {email} </p>
          <h2> Personal Details </h2>
          <p> Occupation: {occupation} </p>
          <p> City: {city} </p>
          <p> Bio: {bio} </p>
          <Button buttonType="back" onClick={prevStep}>
            Back
          </Button>
          <Button buttonType="submit" onClick={nextStep}>
            {" "}
            Submit{" "}
          </Button>
        </div>
      )}
      {/* `step 3 */}
      {step === 3 && (
        <div>
          <h1> Success </h1>
          <p> Thanks for the submission </p>
          <span> You will get email for future instructions </span>
        </div>
      )}
      {/* {step > 0 && <button onClick={prevStep}>Back</button>}
      {step < 2 && <button onClick={nextStep}> Continue </button>} */}
      {/* // {step === 2 && <button onClick={submitStep}> Submit </button>} */}
    </div>
  );
};

export default MultiStepForm;
