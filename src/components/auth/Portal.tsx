import React, { Component } from 'react';

import { LandingPage } from './LandingPage';
import { Login } from './Login';
import { Register } from './Register';

type PortalProps = {
    updateToken(newToken: string): void,
}
type PortalState = {
    showLandingPage: boolean,
    showLogin: boolean,
    showRegister: boolean,
    firstName: string,
    lastName: string,
    username: string,
    password: string,
    email: string,
    cPassword: string,
    role: string,
}

export class Portal extends Component<PortalProps, PortalState> {
    constructor(props: PortalProps) {
        super(props);
        this.state = {
            showLandingPage: true,
            showLogin: false,
            showRegister: false,
            firstName: '',
            lastName: '',
            username: '',
            password: '',
            email: '',
            cPassword: '',
            role: '',
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
                        ? <Login 
                            username={this.state.username} 
                            password={this.state.password}
                            toggleToRegister={this.toggleToRegister} 
                            updateToken={this.props.updateToken}
                            setUsername={this.setUsername}
                            setPassword={this.setPassword}
                        />
                        : <Register 
                            firstName={this.state.firstName} 
                            lastName={this.state.lastName} 
                            username={this.state.username} 
                            password={this.state.password}
                            email={this.state.email}
                            cPassword={this.state.cPassword}
                            role={this.state.role}
                            toggleToLogin={this.toggleToLogin} 
                            updateToken={this.props.updateToken}
                            setFirstName={this.setFirstName}
                            setLastName={this.setLastName}
                            setUsername={this.setUsername}
                            setPassword={this.setPassword}
                            setEmail={this.setEmail}
                            setCPassword={this.setCPassword}
                            setRole={this.setRole}
                        />
                }
            </div>
        )
    }

    setFirstName = (newFName: string) => {
        this.setState({ firstName: newFName })
    }
    setLastName = (newLName: string) => {
        this.setState({ lastName: newLName })
    }
    setUsername = (newUsername: string) => {
        this.setState({ username: newUsername })
    }
    setPassword = (newPassword: string) => {
        this.setState({ password: newPassword })
    }
    setEmail = (newEmail: string) => {
        this.setState({ email: newEmail })
    }
    setCPassword = (newCPassword: string) => {
        this.setState({ cPassword: newCPassword })
    }
    setRole = (newRole: string) => {
        this.setState({ role: newRole })
    }

};