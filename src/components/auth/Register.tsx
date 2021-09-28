import React, { Component } from 'react';

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
type RegisterState = {}

export class Register extends Component <RegisterProps, RegisterState> {
    constructor(props: RegisterProps) {
        super(props);
        this.state = {
        }
    }

    handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        fetch("http://localhost:3000/user/register", {
            method: 'POST',
            body: JSON.stringify({ user: { firstName: this.props.firstName, lastName: this.props.lastName, username: this.props.username, email: this.props.email, password: this.props.password, role: this.props.role } }),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        }).then(res => res.json())
        .then(data => { this.props.updateToken(data.sessionToken) })
    }

    render() {
        return(
            <Wrapper>
                <h2>create</h2>
                <form onSubmit={this.handleSubmit}>
                    <label>first name</label>
                    <input required onChange={(e) => {this.props.setFirstName(e.target.value)}}></input>
                    <label>last name</label>
                    <input required onChange={(e) => {this.props.setLastName(e.target.value)}}></input>
                    <label>email</label>
                    <input required onChange={(e) => {this.props.setEmail(e.target.value)}}></input>
                    <label>username</label>
                    <input required onChange={(e) => {this.props.setUsername(e.target.value)}}></input>
                    <label>password</label>
                    <input required type="password" onChange={(e) => {this.props.setPassword(e.target.value)}}></input>
                    <label>confirm password</label>
                    <input required type="password" onChange={(e) => {this.props.setCPassword(e.target.value)}}></input>
                    <label>role</label>
                    <select required onChange={(e) => {this.props.setRole(e.target.value)}}>
                        <option value="user">user</option>
                        <option value="admin">admin</option>
                    </select>
                    <button className="submit" type="submit">create</button>
                </form>
                <a onClick={this.props.toggleToLogin}>already have an account?</a>
            </Wrapper>
        )
    }
}