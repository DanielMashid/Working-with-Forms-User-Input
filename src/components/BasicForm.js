import useInput from "../hooks/use-input";

const isNotEmpty = (value) => value.trim() !== "";
const isEmail = (value) => value.includes("@") && value.trim().length > 6;

const BasicForm = (props) => {
  const {
    value: firstNameValue,
    isValid: firstNameValueIsValid,
    hasError: firstNameInputHasError,
    valueChangeHandler: firstNameChangeHandler,
    inputBlurHandler: firstNameBlurHandler,
    reset: resetFirstNameInput,
  } = useInput(isNotEmpty);
  const {
    value: lastNameValue,
    isValid: lastNameValueIsValid,
    hasError: lastNameInputHasError,
    valueChangeHandler: lastNameChangeHandler,
    inputBlurHandler: lastNameBlurHandler,
    reset: resetLastNameInput,
  } = useInput(isNotEmpty);
  const {
    value: emailValue,
    isValid: emailValueIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput(isEmail);

  let formIsValid = false;

  if (firstNameValueIsValid && lastNameValueIsValid && emailValueIsValid) {
    formIsValid = true;
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }

    resetFirstNameInput("");
    resetLastNameInput("");
    resetEmailInput("");
  };

  const nameInputClasses = firstNameInputHasError
    ? "form-control invalid"
    : "form-control";

  const lastNameInputClasses = lastNameInputHasError
    ? "form-control invalid"
    : "form-control";

  const emailInputClasses = emailInputHasError
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">First Name</label>
        <input
          type="text"
          id="name"
          onChange={firstNameChangeHandler}
          onBlur={firstNameBlurHandler}
          value={firstNameValue}
        />
        {firstNameInputHasError && (
          <p className="error-text">Please enter a first name.</p>
        )}
      </div>
      <div className={lastNameInputClasses}>
        <label htmlFor="name">Last Name</label>
        <input
          type="text"
          id="name"
          onChange={lastNameChangeHandler}
          onBlur={lastNameBlurHandler}
          value={lastNameValue}
        />
        {lastNameInputHasError && (
          <p className="error-text">Please enter a last name.</p>
        )}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="name">E-Mail Address</label>
        <input
          type="email"
          id="name"
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          value={emailValue}
        />
        {emailInputHasError && (
          <p className="error-text">Please enter a valid email.</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
