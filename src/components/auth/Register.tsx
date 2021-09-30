import React, { Component } from 'react';
import { BsFillEyeFill, BsFillEyeSlashFill } from 'react-icons/bs';

import { Wrapper } from './Register.styles';

type RegisterProps = {
    firstName: string,
    lastName: string,
    username: string,
    password: string,
    email: string,
    cPassword: string,
    role: string,
    toggleToLogin(): void,
    updateToken(newToken: string): void,
    setFirstName(newFName: string): void,
    setLastName(newLName: string): void,
    setUsername(newUsername: string): void,
    setPassword(newPassword: string): void,
    setEmail(newEmail: string): void,
    setCPassword(newCPassword: string): void,
    setRole(newRole: string): void,
}
type RegisterState = {
    hidePassword: string,
    hideCPassword: string,
    failMsg: string,
    status: number,
}

export class Register extends Component<RegisterProps, RegisterState> {
    constructor(props: RegisterProps) {
        super(props);
        this.state = {
            hidePassword: "password",
            hideCPassword: "password",
            failMsg: "",
            status: 0,
        }
    }

    handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        try {
            fetch("http://localhost:3000/user/register", {
                method: 'POST',
                body: JSON.stringify({ user: { firstName: this.props.firstName, lastName: this.props.lastName, username: this.props.username, email: this.props.email, password: this.props.password, role: this.props.role } }),
                headers: new Headers({
                    'Content-Type': 'application/json'
                })
            }).then(res => res.json())
                .then(data => { this.props.updateToken(data.sessionToken) })
        } catch (err) {
            console.log(err);
        }
    }

    render() {
        let passwordStyle = { height: "1.5em", width: "1.5em" }
        return (
            <Wrapper>
                <h2>create</h2>
                <form onSubmit={(e) => {
                    if (this.props.password === this.props.cPassword) {
                        this.handleSubmit(e);
                    } else {
                        e.preventDefault();
                        this.setFailMsg();
                    }
                }}>
                    <label>first name</label>
                    <input required onChange={(e) => { this.props.setFirstName(e.target.value) }}></input>
                    <label>last name</label>
                    <input required onChange={(e) => { this.props.setLastName(e.target.value) }}></input>
                    <label>email</label>
                    <input required onChange={(e) => { this.props.setEmail(e.target.value) }}></input>
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
                    <input required type={this.state.hidePassword} onChange={(e) => { this.props.setPassword(e.target.value) }}></input>
                    <label>confirm password</label>
                    {(this.state.hideCPassword === "password") ?
                        <button className="eye" onClick={(e) => {
                            this.showCPassword();
                            e.preventDefault();
                        }}><BsFillEyeFill style={passwordStyle} /></button> :
                        <button className="eye" onClick={(e) => {
                            this.hideCPassword();
                            e.preventDefault();
                        }}><BsFillEyeSlashFill style={passwordStyle} /></button>
                    }
                    <input required type={this.state.hideCPassword} onChange={(e) => { this.props.setCPassword(e.target.value) }}></input>
                    <label>role</label>
                    <select required onChange={(e) => { this.props.setRole(e.target.value) }}>
                        <option value="user">user</option>
                        <option value="admin">admin</option>
                    </select>
                    {this.state.failMsg !== "" ?
                        <p>{this.state.failMsg}</p> :
                        <></>
                    }
                    <button className="submit" type="submit">create</button>
                </form>
                <a onClick={this.props.toggleToLogin}>already have an account?</a>
            </Wrapper>
        )
    }

    showPassword = () => {
        this.setState({ hidePassword: "" })
    }
    hidePassword = () => {
        this.setState({ hidePassword: "password" })
    }
    showCPassword = () => {
        this.setState({ hideCPassword: "" })
    }
    hideCPassword = () => {
        this.setState({ hideCPassword: "password" })
    }
    setFailMsg = () => {
        this.setState({ failMsg: "passwords do not match" })
    }
}