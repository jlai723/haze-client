import React, { Component } from 'react';

type TripCardsProps = {
    token: string | null,
}

type TripCardsState = {
    tripData: trips[] | [],
}
type trips = {
    createdAt: string
    id: number
    parks: park[] | []
    tripEndDate: string
    tripImage: string
    tripName: string
    tripNotes: string
    tripStartDate: string
    updatedAt: string
    userId: number
}
type park = {

}

export class TripCards extends Component<TripCardsProps, TripCardsState> {
    constructor(props: TripCardsProps) {
        super(props);
        this.state = {
            tripData: [],
        }
    }

    componentDidMount() {
        this.fetchTrips();
    }

    fetchTrips = () => {
        fetch("http://localhost:3000/trip/all", {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${this.props.token}`
            })
        }).then((res) => res.json())
            .then((tripData) => this.setState({
                tripData: tripData,
            }))
    }

    render() {
        return (
            <div>
                {this.state.tripData.map((trip) => {
                    return (
                        <div>
                            <h3>{trip.tripName}</h3>
                            <p>{trip.tripStartDate} - {trip.tripEndDate}</p>
                            <div>
                                <p>{trip.parks}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    }
}