import React from "react";
import { Provider } from "react-redux";
import {Router,Route,MemoryRouter} from 'react-router';
import App from './App';

const Root=({store})=>(
    <Provider>
        <Router history={MemoryRouter}>
            <Route path="/(:filter)" component={App}/>
        </Router>
    </Provider>
);
export default Root;