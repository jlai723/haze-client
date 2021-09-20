import React, { Component } from 'react';

import trips from '../types/tripType';

type TripCardsProps = {
    fetchTrips(): void,
    tripData: trips[] | [],
    token: string | null,
    updateTrip(tripId: number): void,
    updateOn(): void,
    toggleEditModal(): void,
    deleteTrip(): void,
};
type TripCardsState = {};

export class TripCards extends Component<TripCardsProps, TripCardsState> {
    constructor(props: TripCardsProps) {
        super(props);
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
                {this.props.tripData.map((trip) => {
                    return (
                        <div>
                            <h3>{trip.tripName}</h3>
                            <p>{trip.tripStartDate} - {trip.tripEndDate}</p>
                            <div>
                                <p>{trip.parks}</p>
                            </div>
                            <button>view</button>
                            <button onClick={() => {this.props.updateTrip(trip.id); this.editBtn()}}>edit</button>
                            <button onClick={() => {this.props.updateTrip(trip.id); this.props.deleteTrip()}}>delete</button>
                        </div>
                    )
                })}
            </div>
        )
    }
}