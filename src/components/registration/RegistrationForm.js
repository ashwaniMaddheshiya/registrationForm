import React from "react";
import useInput from "../../hooks/useInput";

const RegistrationForm = (props) => {
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput,
  } = useInput(
    (value) =>
      value.trim() !== "" && value.trim().length > 3 && value.trim().length < 20
  );

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput((value) => value.trim() !== "" && (props.emailState.includes(value) === false));

  const {
    value: enteredPhone,
    isValid: enteredPhoneIsValid,
    hasError: phoneInputHasError,
    valueChangeHandler: phoneChangeHandler,
    inputBlurHandler: phoneBlurHandler,
    reset: resetPhoneInput,
  } = useInput((value) => value.trim().length === 10 || value.trim() === "");

  const {
    value: enteredDate,
    isValid: enteredDateIsValid,
    hasError: dateInputHasError,
    valueChangeHandler: dateChangeHandler,
    inputBlurHandler: dateBlurHandler,
    reset: resetDateInput,
  } = useInput((value) => value.trim() !== "");



  const nameInputClass = nameInputHasError
    ? "form-control invalid"
    : "form-control";
  const emailInputClass = emailInputHasError
    ? "form-control invalid"
    : "form-control";

  const phoneInputClass = phoneInputHasError
    ? "form-control invalid"
    : "form-control";

  const dateInputClass = dateInputHasError
    ? "form-control invalid"
    : "form-control";

  let formIsValid = false;
  if (
    enteredNameIsValid &&
    enteredDateIsValid &&
    enteredEmailIsValid &&
    enteredPhoneIsValid
  ) {
    formIsValid = true;
  }




  const submitFormHandler = (event) => {
    event.preventDefault();

    
   
  if(!formIsValid){
      return true;
    }
   

    const response = {
      name: enteredName,
      email: enteredEmail,
      phone: enteredPhone,
      dob: enteredDate,
    };
    props.onSubmittingData(response);
    resetNameInput();
    resetEmailInput();
    resetPhoneInput();
    resetDateInput();
  };


  

  return (
    <form onSubmit={submitFormHandler}>
      <h3 style={{ textAlign: "center" }}>Registration Form</h3>
      <div className="control-group">
        <div className={nameInputClass}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={enteredName}
            onChange={nameChangeHandler}
            onBlur={nameBlurHandler}
          />
          {nameInputHasError && (
            <p className="error-text">Name must not be empty</p>
          )}
        </div>
        <div className={emailInputClass}>
          <label htmlFor="email">E-Mail Address</label>
          <input
            type="email"
            id="email"
            value={enteredEmail}
            onChange={emailChangeHandler}
            onBlur={emailBlurHandler}
          />
          {emailInputHasError && (
            <p className="error-text">Email must be unique and must not be empty</p>
          )}
        </div>
        <div className={phoneInputClass}>
          <label htmlFor="phone">Phone No</label>
          <input
            type="number"
            id="phone"
            value={enteredPhone}
            onChange={phoneChangeHandler}
            onBlur={phoneBlurHandler}
          />
          {phoneInputHasError && (
            <p className="error-text">Phone number should have 10 digits</p>
          )}
        </div>
        <div className={dateInputClass}>
          <label htmlFor="dob">Date Of Birth</label>
          <input
            type="date"
            id="dob"
            value={enteredDate}
            onChange={dateChangeHandler}
            onBlur={dateBlurHandler}
          />
          {dateInputHasError && (
            <p className="error-text">Date of birth must not be empty</p>
          )}
        </div>
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default RegistrationForm;
