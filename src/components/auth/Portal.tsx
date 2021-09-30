import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import { LandingPage } from './LandingPage';
import { Login } from './Login';
import { Register } from './Register';

type PortalProps = {
    updateToken(newToken: string): void,
    sessionToken: string | null,
    updateUserRole(newRole: string): void,
    userRole: string | null,
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
        if (this.props.sessionToken) return <Redirect to="/trips" />
        return (
            <div>
                {(this.state.showLandingPage)
                    ? <LandingPage
                        toggleToLogin={this.toggleToLogin}
                        toggleToRegister={this.toggleToRegister}
                    />
                    : (this.state.showLogin)
                        ? <Login
                            username={this.state.username}
                            password={this.state.password}
                            toggleToRegister={this.toggleToRegister}
                            updateToken={this.props.updateToken}
                            setUsername={this.setUsername}
                            setPassword={this.setPassword}
                            updateUserRole={this.props.updateUserRole}
                            userRole={this.props.userRole}
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
                            updateUserRole={this.props.updateUserRole}
                            userRole={this.props.userRole}
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