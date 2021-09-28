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
                <button onClick={this.props.toggleParkDetails}>back to search</button>
                <img src={this.props.parkDetails.images[5].url} alt={this.props.parkDetails.images[5].altText} />
                <h3>{this.props.parkDetails.fullName}</h3>
            </div>
        )
    }
}