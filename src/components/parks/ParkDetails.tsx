import React, { Component } from 'react';

import { ParkObj } from './ParkDisplay';

type ParkDetailsProps = {
    parkDetails: ParkObj,
    toggleParkDetails(): void,
}

export class ParkDetails extends Component <ParkDetailsProps, {}> {

    render() {
        return(
            <div>
                <button onClick={this.props.toggleParkDetails}>back</button>
                <img src={this.props.parkDetails.images[1].url} alt={this.props.parkDetails.images[1].altText} />
                <h3>{this.props.parkDetails.fullName}</h3>
            </div>
        )
    }
}