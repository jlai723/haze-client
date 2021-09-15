import React, { Component } from 'react';

import { Wrapper } from './LoginRegister.styles';

type LoginProps = {
    toggleToRegister(): void,
}
type LoginState = {
    username: string,
    password: string,
}

export class Login extends Component <LoginProps, LoginState> {
    constructor(props: LoginProps) {
        super(props);
        this.state = {
            username: '',
            password: '',
        }
    }
    
    handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        fetch("http://localhost:3000/user/login", {
            method: 'POST',
            body: JSON.stringify({ user: { username: this.state.username, password: this.state.password } }),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        }).then(res => res.json())
        .then(data => console.log(data))
    };

    render() {
        return(
            <Wrapper>
                <h2>login</h2>
                <form onSubmit={ this.handleSubmit }>
                    <label>username</label>
                    <input onChange={ (e: React.ChangeEvent<HTMLInputElement>) => {this.setState({ username: e.currentTarget.value })} }></input>
                    <label>password</label>
                    <input onChange={ (e: React.ChangeEvent<HTMLInputElement>) => {this.setState({ password: e.currentTarget.value })} }></input>
                    <button>login</button>
                </form>
                <a onClick={this.props.toggleToRegister}>don't have an account?</a>
            </Wrapper>
        )
    }
}