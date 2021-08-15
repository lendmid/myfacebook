import React from "react";
import s from './FormAlert.module.css';
import cross from '../../../assets/images/cross.svg';
import {connect} from "react-redux";
import {clearError} from "../../../store/reducers/auth.reducer";


const FormAlert = React.memo(({error, clearError}) => {

    const hideFormAlert = (e) => {
        let cross = document.querySelector('#cross')
        if (e.target === cross) clearError();
    }

    return (
        <div className={s.wrapper} onClick={hideFormAlert}>
            <span>{error}</span>
            <img src={cross} alt="cross" className={s.close} id="cross"/>
        </div>

    )
});


export default connect(null, {clearError})(FormAlert);
