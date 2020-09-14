import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MyFacebook from './App';
import * as serviceWorker from "./serviceWorker"

// without warnings from Field
// ReactDOM.render(
//     <BrowserRouter>
//         <Provider store={store}>
//             <App store={store} />
//         </Provider>
//     </BrowserRouter>, document.getElementById('root')
// );

// ReactDOM.render(
//     <React.StrictMode>
//         <BrowserRouter>
//             <Provider store={store}>
//                 <App store={store} />
//                 {/*<App /> need delete store*/}
//             </Provider>
//         </BrowserRouter>
//     </React.StrictMode>, document.getElementById('root')
// );

ReactDOM.render(<MyFacebook />, document.getElementById('root'));

serviceWorker.register();
