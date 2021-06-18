import React from 'react'
import './stylesheets/main.css'
import {Home} from 'pages/Home';
import {RecoilRoot} from "recoil";

export const App = () => {
    return (
        <RecoilRoot>
            <Home />
        </RecoilRoot>
    );
};