import React, { useState } from 'react';
import './password.styles.scss';

const PasswordInput = ({ name, warning, pattern, refer }) => {
  const [password, setPassword] = useState('');
  const [focused, setFocused] = useState('false');
  const [type, setType] = useState('password');

  const handleChange = (event) => {
    setPassword((prevState) => {
      return prevState, event.target.value;
    });
  };

  const togglePassword = (event) => {
    if (type === 'password') {
      setType('text');
    } else {
      setType('password');
    }
    event.target.classList.toggle('fa-eye');
  };

  return (
    <div className="password-input">
      <label htmlFor={name.toLowerCase().split(' ').join('')}> {name} </label>

      <input
        type={type}
        name={name.toLowerCase().split(' ').join('')}
        id={name.toLowerCase().split(' ').join('')}
        value={password}
        onChange={handleChange}
        required
        pattern={pattern}
        focused={focused}
        onBlur={() => setFocused('true')}
        ref={refer}
      />
      <i className="fas fa-eye-slash icon" onClick={togglePassword}></i>

      <small className="warning">{warning}</small>
    </div>
  );
};

export default PasswordInput;
