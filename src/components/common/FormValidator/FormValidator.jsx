import React from "react";
import s from './FormValidator.module.css';


let FormValidator = (InputType, showMessage, {input, meta, className, ...props}) => {
    
    let hasError = meta.touched && meta.error;
    return (
        <div>
            <InputType {...input} {...props} className={ className + " " + (hasError ? s.error : "")}></InputType>
            {hasError && showMessage && <span className={s.span}>{meta.error}</span>}
        </div>
    )
}

export let TextAreaProfilePage = (props) => FormValidator("textarea", false, props)
