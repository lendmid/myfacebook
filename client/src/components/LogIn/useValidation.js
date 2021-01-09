import { useState, useEffect } from 'react';


function checkValidity(values) {
  let errors = {};

  if (!values.email) {
    errors.email = 'Введите email';
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'Email адрес некорректен';
  }
  if (!values.password) {
    errors.password = 'Введите пароль';
  } else if (values.password.length < 6) {
    errors.password = 'Минимальная длина пароля 6 символов';
  }

  return errors;
}

const useValidation = (callback) => {
  const [values, setValues] = useState({email: '', password: '',});
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
    [clientErrors]
  );

  return { handleChange, handleSubmit, values, clientErrors };
};

export default useValidation;
