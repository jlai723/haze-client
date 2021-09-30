import React, { Component } from 'react';
import { BsFillEyeFill, BsFillEyeSlashFill } from 'react-icons/bs';

import { Wrapper } from './Login.styles';

type LoginProps = {
    username: string,
    password: string,
    toggleToRegister(): void,
    updateToken(newToken: string): void,
    setUsername(newUsername: string): void,
    setPassword(newPassword: string): void,
}
type LoginState = {
    hidePassword: string,
}

export class Login extends Component<LoginProps, LoginState> {
    constructor(props: LoginProps) {
        super(props);
        this.state = {
            hidePassword: "password",
        }
    }

    handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        fetch("http://localhost:3000/user/login", {
            method: 'POST',
            body: JSON.stringify({ user: { username: this.props.username, password: this.props.password } }),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        }).then(res => res.json())
            .then(data => { this.props.updateToken(data.sessionToken); console.log(data.user.role) })
    };

    render() {
        let passwordStyle = { height: "1.5em", width: "1.5em" }
        return (
            <Wrapper>
                <h2>login</h2>
                <form onSubmit={this.handleSubmit}>
                    <label>username</label>
                    <input required onChange={(e) => { this.props.setUsername(e.target.value) }}></input>
                    <label>password</label>
                    {(this.state.hidePassword === "password") ?
                        <button className="eye" onClick={(e) => {
                            this.showPassword();
                            e.preventDefault();
                        }}><BsFillEyeFill style={passwordStyle} /></button> :
                        <button className="eye" onClick={(e) => {
                            this.hidePassword();
                            e.preventDefault();
                        }}><BsFillEyeSlashFill style={passwordStyle} /></button>
                    }
                    <input required className="password" type={this.state.hidePassword} onChange={(e) => { this.props.setPassword(e.target.value) }}></input>
                    <button className="submit" type="submit">login</button>
                </form>
                <a onClick={this.props.toggleToRegister}>don't have an account?</a>
            </Wrapper>
        )
    }

    showPassword = () => {
        this.setState({ hidePassword: "" })
    }
    hidePassword = () => {
        this.setState({ hidePassword: "password" })
    }
}