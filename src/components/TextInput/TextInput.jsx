import React, { useState } from 'react';
import './textinput.styles.scss';

const TextInput = ({ type, name, warning, pattern }) => {
  const [username, setUsername] = useState('');
  const [focused, setFocused] = useState('false');

  const handleChange = (e) => {
    setUsername((preState) => {
      return preState, e.target.value;
    });
  };

  return (
    <div className="input-container">
      <label htmlFor={name.toLowerCase()}>{name}</label>
      <input
        type={type}
        onChange={handleChange}
        value={username}
        required
        pattern={pattern}
        focused={focused}
        onBlur={() => setFocused('true')}
      />
      <small className="warning">{warning}</small>
    </div>
  );
};

export default TextInput;
