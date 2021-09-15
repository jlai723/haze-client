import React, { Component } from 'react';

import { Wrapper } from './LandingPage.styles';

export class LandingPage extends Component<{}, {}> {
    
    
    render() {
        return (
            <Wrapper>
                <h4>explore the</h4>
                <h1>haze</h1>
                <button>login</button>
                <p>don't have an account?</p>
            </Wrapper>
        )
    }
}