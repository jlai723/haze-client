import React, { Component } from 'react';

import { Wrapper } from './Header.styles';

type HeaderProps = {
    logout() : void,
}

export class Header extends Component <HeaderProps, {}> {
    constructor(props: HeaderProps) {
        super(props);
    }

    render() {
        return(
            <Wrapper>
                <button>h</button>
                <a onClick={this.props.logout}>Temp Logout</a>
            </Wrapper>
        )
    }
}