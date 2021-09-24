import React, { Component } from 'react';

import { TripView } from './TripView';
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
type TripCardsProps = {
    fetchTrips(): void,
    tripData: trips[] | [],
    token: string | null,
    updateTrip(tripId: number): void,
    tripToUpdate: number,
    updateOn(): void,
    toggleEditModal(): void,
    deleteTrip(): void,
    fetchOneTrip(): void,
    oneTrip: TripObj,
    currentView: string,
    tripView(): void,
};
type TripCardsState = {
};

export class TripCards extends Component<TripCardsProps, TripCardsState> {
    constructor(props: TripCardsProps) {
        super(props);
        this.state = {
        }
    }

    componentDidMount() {
        this.props.fetchTrips();
    }

    editBtn = () => {
        this.props.updateOn();
        this.props.toggleEditModal();
    }

    render() {
        return (
            <div>
                {this.props.currentView === "TripCards" ?
                    this.props.tripData.map((trip) => {
                        return (
                            <div>
                                <h3>{trip.tripName}</h3>
                                <p>{trip.tripStartDate} - {trip.tripEndDate}</p>
                                <ul>
                                    {trip.parks.map((park) => {
                                        return <li>{park.parkName}</li>
                                    })}
                                </ul>
                                <button onClick={() => { this.props.updateTrip(trip.id); this.props.fetchOneTrip(); this.props.tripView() }}>view</button>
                                <button onClick={() => { this.props.updateTrip(trip.id); this.editBtn() }}>edit</button>
                                <button onClick={() => { this.props.updateTrip(trip.id); this.props.deleteTrip() }}>delete</button>
                            </div>
                        )
                    }) :
                    <TripView
                        fetchOneTrip={this.props.fetchOneTrip}
                        oneTrip={this.props.oneTrip}
                        token={this.props.token}
                        tripId={this.props.tripToUpdate}
                    />
                }
            </div>
        )
    }
}