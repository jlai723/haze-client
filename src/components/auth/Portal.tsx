import React, { Component } from 'react';

import { LandingPage } from './LandingPage';
import { Login } from './Login';
import { Register } from './Register';

type PortalProps = {}
type PortalState = {
    showLandingPage: boolean,
    showLogin: boolean,
    showRegister: boolean,
}

export class Portal extends Component<PortalProps, PortalState> {
    constructor(props: PortalProps) {
        super(props);
        this.state = {
            showLandingPage: true,
            showLogin: false,
            showRegister: false,
        }
    };

    toggleToLogin = () => {
        this.setState({
            showLandingPage: false,
            showLogin: true,
            showRegister: false,
        })
    };

    toggleToRegister = () => {
        this.setState({
            showLandingPage: false,
            showLogin: false,
            showRegister: true,
        })
    };

    render() {
        return (
            <div>
                {(this.state.showLandingPage)
                    ? <LandingPage toggleToLogin={this.toggleToLogin} toggleToRegister={this.toggleToRegister} />
                    : (this.state.showLogin)
                        ? <Login toggleToRegister={this.toggleToRegister} />
                        : <Register toggleToLogin={this.toggleToLogin} />
                }
            </div>
        )
    }
};