import { useState, useEffect } from 'react';


function checkValidity(values) {
  let errors = {};

  if (!values.email) {
    errors.email = 'Введите email';
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'Email некорректный';
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
  const [errors, setErrors] = useState({email: '', password: ''});

  const handleChange = e => {
    const { name, value } = e.target;
    setValues({...values, [name]: value});
  };

  const handleSubmit = e => {
    e.preventDefault();
    setErrors(checkValidity(values));
  };

  useEffect(() => {
      if (Object.keys(errors).length === 0) callback(values.email, values.password);
    },
    [errors, callback]
  );

  return { handleChange, handleSubmit, values, errors };
};

export default useValidation;
