import {useEffect, useState} from 'react';


function validate(values) {
  let errors = {};

  if (!values.newPostText) {
    errors.newPostText = 'Post can not be empty';
  }
  if (values.newPostText.length < 10) {
    errors.password = 'Minimum post length 10 characters';
  }
  return errors;
}

const useValidation = (callback) => {
  const [values, setValues] = useState({newPostText: ''});
  const [clientErrors, setClientErrors] = useState({newPostText: ''});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = e => {
    const {name, value} = e.target;
    setValues({...values, [name]: value});
  };

  const handleSubmit = e => {
    e.preventDefault();
    setClientErrors(validate(values));
    debugger
    setIsSubmitting(true);
  };

  useEffect(() => {
    if (Object.keys(clientErrors).length === 0 && isSubmitting) {
      callback(values.newPostText)
      setIsSubmitting(false);
    }
    ;
  }, [clientErrors, isSubmitting, callback, values.email, values.password]);

  return {handleChange, handleSubmit, values, clientErrors};
};

export default useValidation;
