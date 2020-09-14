import React from "react";
import ReactDOM from "react-dom";
import MyFacebook from "./App";

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<MyFacebook />, div);
    ReactDOM.unmountComponentAtNode(div);
});
