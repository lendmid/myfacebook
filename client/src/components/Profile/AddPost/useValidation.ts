import React, {useEffect, useState} from 'react';

interface IValues {
  newPostText: string
}

function validate(values: IValues) {
  let clientErrors: any = {};

  if (!values.newPostText) {
    clientErrors.newPostText = 'Post can not be empty';
  }
  if (values.newPostText.length < 5) {
    clientErrors.newPostText = 'Minimum post length 5 characters';
  }
  return clientErrors;
}

const useValidation = (callback: (text: string) => void) => {
  const [values, setValues] = useState<IValues>({newPostText: ''});
  const [clientErrors, setClientErrors] = useState({newPostText: ''});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.FormEvent<HTMLTextAreaElement>) => {
    const {name, value} = e.currentTarget;
    setValues({...values, [name]: value});
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setClientErrors(validate(values));
    setIsSubmitting(true);
  };

  useEffect(() => {
    if (Object.values(clientErrors).length === 0 && isSubmitting) {
      callback(values.newPostText);
      setValues({newPostText: ''});
      setIsSubmitting(false);
    }
  }, [clientErrors, isSubmitting, callback, values]);

  return {handleChange, handleSubmit, values, clientErrors};
};

export default useValidation;
