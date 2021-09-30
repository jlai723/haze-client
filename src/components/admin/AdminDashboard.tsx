import React, { Component } from 'react';

import { user } from '../types/userType';
import { Wrapper, TableWrapper } from './AdminDashboard.styles'
import APIURL from '../../helpers/environment';

type AdminDashboardProps = {
    toggleAdmin(): void,
    token: string | null,
}
type AdminDashboardState = {
    users: user[] | [],
    userId: number,
}

export class AdminDashboard extends Component <AdminDashboardProps, AdminDashboardState> {
    constructor(props: AdminDashboardProps) {
        super(props);
        this.state = {
            users: [],
            userId: 0,
        }
    }

    componentDidMount() {
        this.fetchUsers();
    }

    fetchUsers = () => {
        fetch(`${APIURL}/user/all`, {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${this.props.token}`
            })
        }).then((res) => res.json())
        .then((userData) => this.setState({ users: userData }))
    }
    deleteUser = () => {
        fetch(`${APIURL}/user/delete/${this.state.userId}`, {
            method: 'DELETE',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${this.props.token}`
            })
        }).then(() => this.fetchUsers())
    }

    render() {
        return (
            <Wrapper>
                <button onClick={this.props.toggleAdmin}>back</button>
                <TableWrapper>
                    <tr>
                        <th>user id</th>
                        <th>first name</th>
                        <th>last name</th>
                        <th>email</th>
                        <th>username</th>
                        <th>role</th>
                        <th></th>
                    </tr>
                    {this.state.users.map((user) => {
                        return (
                            <tr>
                                <td>{user.id}</td>
                                <td>{user.firstName}</td>
                                <td>{user.lastName}</td>
                                <td>{user.email}</td>
                                <td>{user.username}</td>
                                <td>{user.role}</td>
                                <td><button className="delete-btn" onClick={() => {
                                    this.setId(user.id);
                                    if(this.state.userId !== 0) this.deleteUser();
                                }}>delete {user.username}</button></td>
                            </tr>
                        )
                    })}
                </TableWrapper>
            </Wrapper>
        )
    }
    setId = (id: number) => {
        this.setState({ userId: id });
    }
}