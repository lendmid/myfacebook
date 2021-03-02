import React from "react";

import s from './Register.module.css';
import {Link} from "react-router-dom";

import {connect} from "react-redux";
import {register} from "../../redux/auth.reducer";
import useValidation from "./useValidation";
import Description from "../common/Description/Description";
import Footer from "../common/Footer/Footer";
import FormAlert from "../common/FormAlert/FormAlert";


const Register = React.memo(({isLoading, register, serverError}) => {

    const {handleChange, handleSubmit, values, clientErrors} = useValidation(register);

    return (
        <div className={s.wrapper}>

            <Description/>

            <form className={s.register} onSubmit={handleSubmit}>
                <label className={s.label}>
                    Email
                    <input
                        type="email"
                        name="email"
                        className={s.input}
                        value={values.email}
                        onChange={handleChange}
                        autoComplete="off"
                        readOnly
                        onFocus={(e) => e.currentTarget.removeAttribute('readonly')}
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
                        autoComplete="off"
                        readOnly
                        onFocus={(e) => e.currentTarget.removeAttribute('readonly')}
                        required
                    />
                </label>
                {clientErrors.password && <span className={s.error}>{clientErrors.password}</span>}

                <label className={s.label}>
                    FirstName
                    <input
                        type="text"
                        name="firstName"
                        className={s.input}
                        value={values.firstName}
                        onChange={handleChange}
                        autoComplete="off"
                        readOnly
                        onFocus={(e) => e.currentTarget.removeAttribute('readonly')}
                        required
                    />
                </label>
                {clientErrors.firstName && <span className={s.error}>{clientErrors.firstName}</span>}

                <label className={s.label}>
                    LastName
                    <input
                        type="text"
                        name="lastName"
                        className={s.input}
                        value={values.lastName}
                        onChange={handleChange}
                        autoComplete="off"
                        readOnly
                        onFocus={(e) => e.currentTarget.removeAttribute('readonly')}
                        required
                    />
                </label>
                {clientErrors.lastName && <span className={s.error}>{clientErrors.lastName}</span>}

                <button type="submit"
                        className={s.button}
                        disabled={isLoading}
                >Register
                </button>

                {serverError && <FormAlert error={serverError}/>}
                <div className={s.button_login_underline}/>

                <Link to={"/login"} className={s.button + " " + s.button_login}>Login</Link>
            </form>

            <Footer/>
        </div>
    )
});

const mapStateToProps = (state) => ({
    isLoading: state.auth.isLoading,
    serverError: state.auth.serverError,
});

export default connect(mapStateToProps, {register})(Register);
