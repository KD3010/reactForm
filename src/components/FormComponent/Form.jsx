import React, { useRef } from 'react';
import PasswordInput from '../PasswordInput/PasswordInput';
import TextInput from '../TextInput/TextInput';
import './Form.styles.scss';

const Form = ({ error, popupRef }) => {
  const passwordRef = useRef(null);
  const confirmpasswordRef = useRef(null);
  const formRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (confirmpasswordRef.current.value === passwordRef.current.value) {
      formRef.current.style.opacity = 0;
      popupRef.current.style.opacity = 1;
    } else {
      error('Passwords do not match!');
    }
  };

  return (
    <form className="form-container" name="signup-form" onSubmit={handleSubmit} ref={formRef}>
      <h1>Sign Up</h1>

      <TextInput
        type="text"
        name="Username"
        warning="Username must have 3 - 25 characters"
        pattern="[A-Za-z0-9]{3,25}"
      />
      <TextInput type="email" name="Email" warning="Please enter a valid email" />

      <PasswordInput
        name="Password"
        warning="Password must contain 8 characters, 1 lowercase, 1 uppercase, 1 number and 1 special character (!@#$%^&*)"
        pattern="(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}"
        refer={passwordRef}
      />

      <PasswordInput
        name="Confirm Password"
        warning="Passwords do not match!"
        refer={confirmpasswordRef}
      />

      <button disabled="" className="btn" type="submit">
        Sign Up
      </button>
    </form>
  );
};

export default Form;
