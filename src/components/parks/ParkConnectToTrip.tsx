import React, { Component } from 'react';

import { trips } from '../types/tripType'

type ParkConnectToTripProps = {
    parkId: number,
    tripId: number,
    token: string | null,
    fetchOneTrip(): void,
}
type ParkConnectToTripState = {
    tripData: trips[] | [],
    selectedTripId: number,
}

export class ParkConnectToTrip extends Component<ParkConnectToTripProps, ParkConnectToTripState> {
    constructor(props: ParkConnectToTripProps) {
        super(props);
        this.state = {
            tripData: [],
            selectedTripId: 0,
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

    selectTrip = (newTripId: number) => {
        this.setState({ selectedTripId: newTripId });
    }

    handleSelect = () => {
        if(this.state.selectedTripId !== 0) {
            fetch(`http://localhost:3000/park/${this.state.selectedTripId}/addpark/${this.props.parkId}`, {
                method: 'POST',
                headers: new Headers({
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${this.props.token}`,
                })
            }).then(res => res.json())
                .then(() => window.location.reload())
        }
    }

    render() {
        console.log(this.state.selectedTripId)
        return (
            <div>
                {this.state.tripData.map((trip) => {
                    return (
                        <button onClick={() => {
                            this.selectTrip(trip.id);
                        }}>{trip.tripName}</button>
                    )
                })}
                <button onClick={this.handleSelect}>add to trip</button>
            </div>
        )
    }
}