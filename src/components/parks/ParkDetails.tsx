import React, { Component } from 'react';

import { ParkObj } from './ParkDisplay';
import { ParkDetailsImg } from './ParkDetails.styles';
import { Wrapper } from './ParkSearch.styles';

type ParkDetailsProps = {
    parkDetails: ParkObj,
    toggleParkDetails(): void,
}

export class ParkDetails extends Component <ParkDetailsProps, {}> {

    render() {
        console.log(this.props.parkDetails)
        return(
            <Wrapper>
                <button className="nav-back" onClick={this.props.toggleParkDetails}>back</button>
                <img src={this.props.parkDetails.images[1].url} alt={this.props.parkDetails.images[1].altText} />
                <h3>{this.props.parkDetails.fullName}</h3>
            </Wrapper>
        )
    }
}