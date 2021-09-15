import React, { Component } from 'react';

import { Wrapper } from './LoginRegister.styles';

type RegisterProps = {
    toggleToLogin(): void,
}
type RegisterState = {}

export class Register extends Component <RegisterProps, RegisterState> {
    constructor(props: RegisterProps) {
        super(props);
    }

    render() {
        return(
            <Wrapper>
                <h2>create</h2>
                <form>
                    <label>first name</label>
                    <input></input>
                    <label>last name</label>
                    <input></input>
                    <label>email</label>
                    <input></input>
                    <label>username</label>
                    <input></input>
                    <label>password</label>
                    <input></input>
                    <label>confirm password</label>
                    <input></input>
                    <label>role</label>
                    <select>
                        <option>user</option>
                        <option>admin</option>
                    </select>
                    <button>create</button>
                </form>
                <a onClick={this.props.toggleToLogin}>already have an account?</a>
            </Wrapper>
        )
    }
}