import React from 'react';
import {connect} from "react-redux";
import {Route} from "react-router-dom";
import SignInContainer from "../components/SignIn/SignInContainer";


let mapStateToPropsForRedirect = (state) => ({
    isAuth: state.auth.isAuth,
});

export let withAuthRedirect = (Component) => {
    class RedirectComponent extends React.Component {
        componentDidMount() {
            // this.props.initializeApp();
            // let userId = this.props.match.params.userId;
            // if (!userId) userId = this.props.authorizedUserId;
            // if (!userId) userId = 11132;
            //
            // this.props.requestProfile(userId);
            // this.props.requestStatus(userId);
            // if (!this.props.isAuth) return <Redirect to={"/"} />;
        }
    
        render() {
            if (!this.props.isAuth) return (
                <div className="app-wrapper">
                    <Route exact path='/' render={() => <SignInContainer store={this.props.store} />} />
                </div>
            )
            return <Component {...this.props} />
        }
    }
    
    return connect(mapStateToPropsForRedirect)(RedirectComponent);
}
