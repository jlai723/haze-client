import React, { Component } from 'react';

import { ParkIndex } from '../parks';
import { trips } from '../types/tripType';
import { park } from '../types/parkType';

interface TripObj {
    createdAt: string;
    id: number;
    parks: park[] | [];
    tripEndDate: string;
    tripImage: string;
    tripName: string;
    tripNotes: string;
    tripStartDate: string;
    updatedAt: string;
    userId: number;
};
type TripViewProps = {
    fetchOneTrip(): void,
    oneTrip: TripObj,
};

export class TripView extends Component<TripViewProps, {}> {
    constructor(props: TripViewProps) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchOneTrip();
    }

    render() {
        console.log(this.props.oneTrip.parks)
        return (
            <div>
                <button>add park</button>
                <br />
                {(this.props.oneTrip.tripImage !== "") ?
                    <img src={this.props.oneTrip.tripImage} /> :
                    <img src="https://images.fineartamerica.com/images-medium-large-5/great-smoky-mountains-national-park-morning-haze-at-oconaluftee-dave-allen.jpg" />
                }
                <h1>{this.props.oneTrip.tripName}</h1>
                <h3>{this.props.oneTrip.tripStartDate} - {this.props.oneTrip.tripEndDate}</h3>
                <p>{this.props.oneTrip.tripNotes}</p>
                {this.props.oneTrip.parks.map((park) => {
                    return <div>
                        <p>{park.parkName}</p>
                        <button>view</button>
                    </div>
                })}
                <ParkIndex />
            </div>
        )
    }
}
