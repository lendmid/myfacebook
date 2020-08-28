import React from 'react';


export let withAuthRedirectComponent = (Component) => {
    class RedirectComponent extends React.Component {
        render() {
            if (!this.props.isAuth) return <Redirect to={'/login'} />
            return <Component {...props} />
        }
    }
    return RedirectComponent;
}