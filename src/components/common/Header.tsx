import { Switch } from 'antd';
import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import { Wrapper } from './Header.styles';

import { Portal } from '../auth/Portal'

type HeaderProps = {
    logout(): void,
    updateToken(newToken: string): void,
}

export class Header extends Component<HeaderProps, {}> {
    constructor(props: HeaderProps) {
        super(props);
    }

    render() {
        return (
            <Wrapper>
                <button>h</button>
                <a onClick={this.props.logout}>Temp Logout</a>
            </Wrapper>
        )
    }
}