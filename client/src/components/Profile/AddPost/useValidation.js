import {useEffect, useState} from 'react';


function validate(values) {
  let clientErrors = {};

  if (!values.newPostText) {
    clientErrors.newPostText = 'Post can not be empty';
  }
  if (values.newPostText.length < 5) {
    clientErrors.newPostText = 'Minimum post length 5 characters';
  }
  return clientErrors;
}

const useValidation = (callback) => {
  const [values, setValues] = useState({newPostText: ''});
  const [clientErrors, setClientErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = e => {
    const {name, value} = e.target;
    setValues({...values, [name]: value});
  };

  const handleSubmit = e => {
    e.preventDefault();
    setClientErrors(validate(values));
    setIsSubmitting(true);
  };

  useEffect(() => {
    if (Object.keys(clientErrors).length === 0 && isSubmitting) {
      callback(values.newPostText);
      setValues({newPostText: ''});
      setIsSubmitting(false);
    }
  }, [clientErrors, isSubmitting, callback, values]);

  return {handleChange, handleSubmit, values, clientErrors};
};

export default useValidation;
