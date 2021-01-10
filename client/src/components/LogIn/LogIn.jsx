import React from "react";
import useValidation from "./useValidation";

import s from './LogIn.module.css';
import {Link} from "react-router-dom";

import {connect} from "react-redux";
import {logIn} from "../../redux/authReducer";
import Description from "../common/Description/Description";
import Footer from "../common/Footer/Footer";
import FormAlert from "../common/FormAlert/FormAlert";


const LogIn = React.memo(({logIn, isLoading, serverError}) => {

    const {handleChange, handleSubmit, values, clientErrors} = useValidation(logIn);

    return (
        <div className={s.wrapper}>

            <Description/>

            <form className={s.login} onSubmit={handleSubmit}>

                <label className={s.label}>
                    Email
                    <input
                        type="email"
                        name="email"
                        className={s.input}
                        value={values.email}
                        onChange={handleChange}
                        autoComplete="on"
                        required
                    />
                </label>
                {clientErrors.email && <span className={s.error}>{clientErrors.email}</span>}

                <label className={s.label}>
                    Password
                    <input
                        type="password"
                        name="password"
                        className={s.input}
                        value={values.password}
                        onChange={handleChange}
                        autoComplete="on"
                        required
                    />
                </label>
                {clientErrors.password && <span className={s.error}>{clientErrors.password}</span>}

                <button type="submit"
                        className={s.button}
                        disabled={isLoading}
                >Log in
                </button>

                {serverError && <FormAlert error={serverError}/>}

                <div className={s.button_register_underline}></div>

                <Link to={"/register"} className={s.button + " " + s.button_register}>Register</Link>
            </form>

            <Footer/>
        </div>
    )
});

const mapStateToProps = (state) => ({
    isLoading: state.auth.isLoading,
    serverError: state.auth.serverError,
});

export default connect(mapStateToProps, {logIn})(LogIn);

