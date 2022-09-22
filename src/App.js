import React, { useRef } from 'react';
import './app.styles.css';
import Form from './components/FormComponent/Form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Popup from './components/Popup/Popup';

const App = () => {
  const popupRef = useRef(null);

  return (
    <div>
      <Form error={toast.error} popupRef={popupRef} />
      <Popup popupRef={popupRef} />
      <ToastContainer />
    </div>
  );
};

export default App;
