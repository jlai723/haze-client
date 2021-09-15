import React, { Component } from 'react';

import { Wrapper } from './LandingPage.styles';

type LandingPageProps = {
    toggleToLogin(): void,
    toggleToRegister(): void,
}
type LandingPageState = {}

export class LandingPage extends Component<LandingPageProps, LandingPageState> {
    constructor(props: LandingPageProps) {
        super(props);
    }
    
    render() {
        return (
            <Wrapper>
                <h4>explore the</h4>
                <h1>haze</h1>
                <button onClick={this.props.toggleToLogin}>login</button>
                <a onClick={this.props.toggleToRegister}>don't have an account?</a>
            </Wrapper>
        )
    }
}