import React from 'react';
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";


let mapStateToPropsForRedirect = (state) => ({
    isAuth: state.auth.isAuth,
});

export let withAuthRedirect = (Component) => {
    class RedirectComponent extends React.Component {
        render() {
            if (!this.props.isAuth) return <Redirect to={'/login'} />
            return <Component {...this.props} />
        }
    }
    return connect(mapStateToPropsForRedirect)(RedirectComponent);
}
