import React from 'react'
import './stylesheets/main.css'
import { Switch, Route } from 'react-router-dom'
import {Home} from 'pages/Home';
// import { Provider } from 'react-redux'
// import store, { history } from './store';
// import { ConnectedRouter } from 'connected-react-router'

export const App = () => {
    return (
        <Home />
        // <Provider store={store}>
        //     <ConnectedRouter history={history}>
        //         <Switch>
        //             <Route path='/' component={Home} />
        //         </Switch>
        //     </ConnectedRouter>
        // </Provider>
    );
};