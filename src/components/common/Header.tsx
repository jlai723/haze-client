import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Wrapper, NavWrapper } from './Header.styles';

type HeaderProps = {
    logout(): void,
    updateToken(newToken: string): void,
    token: string | null,
}

export class Header extends Component<HeaderProps, {}> {
    constructor(props: HeaderProps) {
        super(props);
    }

    render() {
        // if (this.props.token) return <Redirect to="/" />
        return (
            <div>
                <Wrapper>
                    <button>h</button>
                </Wrapper>
                <NavWrapper>
                    <a>my trips</a>
                    <a onClick={this.props.logout}>logout</a>
                </NavWrapper>
            </div>
        )
    }
}