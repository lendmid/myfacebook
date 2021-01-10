import { useState, useEffect } from 'react';


function checkValidity(values) {
  let errors = {};

  if (!values.email) {
    errors.email = 'Enter email';
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'Email incorrect';
  }
  if (!values.password) {
    errors.password = 'Enter password';
  } else if (values.password.length < 6) {
    errors.password = 'Minimum password length 6 characters';
  }

  return errors;
}

const useValidation = (callback) => {
  const [values, setValues] = useState({email: '', password: ''});
  const [clientErrors, setClientErrors] = useState({email: '', password: ''});

  const handleChange = e => {
    const { name, value } = e.target;
    setValues({...values, [name]: value});
  };

  const handleSubmit = e => {
    e.preventDefault();
    setClientErrors(checkValidity(values));
  };

  useEffect(() => {
      if (Object.keys(clientErrors).length === 0) callback(values.email, values.password);
    },
      [clientErrors, callback]
  );

  return { handleChange, handleSubmit, values, clientErrors };
};

export default useValidation;