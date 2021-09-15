import React, { Component } from 'react';

import { Wrapper } from './LoginRegister.styles';

export class Login extends Component <{}, {}> {
    render() {
        return(
            <Wrapper>
                <h2>login</h2>
                <form>
                    <label>username</label>
                    <input></input>
                    <label>password</label>
                    <input></input>
                    <button>login</button>
                </form>
                <p>don't have an account?</p>
            </Wrapper>
        )
    }
}