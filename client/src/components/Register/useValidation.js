import {useCallback, useEffect, useState} from 'react';


function validate(values) {
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
  if (!values.firstName) {
    errors.firstName = 'Enter first name';
  }
  if (!values.lastName) {
    errors.lastName = 'Enter last name';
  }
  return errors;
}

const useValidation = (callback) => {
  const [values, setValues] = useState({email: '', password: '', firstName: '', lastName: ''});
  const [clientErrors, setClientErrors] = useState({email: '', password: '', firstName: '', lastName: ''});

  const handleChange = e => {
    const {name, value} = e.target;
    setValues({...values, [name]: value});
  };

  const handleSubmit = e => {
    e.preventDefault();
    setClientErrors(validate(values));
  };

  const callbackExecute = useCallback(() => {
    callback(values.email, values.password, values.firstName, values.lastName)
  }, [callback, values.email, values.password, values.firstName, values.lastName])

  useEffect(() => {
    if (Object.keys(clientErrors).length === 0) callbackExecute();
  }, [clientErrors, callbackExecute]);

  return {handleChange, handleSubmit, values, clientErrors};
};

export default useValidation;
