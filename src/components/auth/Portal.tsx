import React, { Component } from 'react';

import { LandingPage } from './LandingPage';
import { Login } from './Login';

export class Portal extends Component <{}, {}> {
    render() {
        return(
            <div>
                {/* <LandingPage /> */}
                <Login />
            </div>
        )
    }
}