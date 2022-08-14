import React, {useEffect, useState} from 'react';

interface IValues {
  newPostText: string
}

const useValidation = (callback: (text: string) => void) => {
  const [values, setValues] = useState<IValues>({newPostText: ''});
  const [clientErrors, setClientErrors] = useState({newPostText: ''});
  const [isSubmitting, setIsSubmitting] = useState(false);

  function validate(values: IValues) {
    if (values.newPostText.length < 5) setClientErrors({newPostText: 'Minimum post length 5 characters'});
    if (!values.newPostText) setClientErrors({newPostText: 'Post can not be empty'});
    setClientErrors({newPostText: ''});
  }

  const handleChange = (e: React.FormEvent<HTMLTextAreaElement>) => {
    const {name, value} = e.currentTarget;
    setValues({...values, [name]: value});
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    validate(values);
    setIsSubmitting(true);
  };

  useEffect(() => {
    if (Object.values(clientErrors).length === 1 && isSubmitting) {
      callback(values.newPostText);
      setValues({newPostText: ''});
      setIsSubmitting(false);
    }
  }, [clientErrors, isSubmitting, callback, values]);

  return {handleChange, handleSubmit, values, clientErrors};
};

export default useValidation;
