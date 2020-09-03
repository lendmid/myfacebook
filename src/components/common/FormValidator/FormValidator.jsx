import React from "react";
import s from './FormValidator.module.css';


let FormValidator = (InputType, showMessage, showErrorOnlyWhenFieldActive, {input, meta, className, ...props}) => {
    let hasError = meta.touched && meta.error && (showErrorOnlyWhenFieldActive ? meta.active : true);
    return (
        <>
            <InputType {...input} {...props} className={ className + " " + (hasError ? s.error : "")}></InputType>
            {hasError && showMessage && <span className={s.span}>{meta.error}</span>}
        </>
    )
}

export let TextAreaProfilePage = (props) => FormValidator("textarea", false, true, props);
export let InputMessagesPage = (props) => FormValidator("input", false, true, props);
export let InputLoginPage = (props) => FormValidator("input", true, false, props);
