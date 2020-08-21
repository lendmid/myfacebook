import React from "react";
import preloader from "../../../assets/images/Spinner-0.7s-300px.svg"

let Preloader = (props) => {
    return (
        <div>
            <img src={preloader} alt="" />
        </div>
    )
}

export default Preloader;