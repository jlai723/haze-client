import React, { Component } from 'react';

import { SelectTripWrapper } from './ParkConnectToTrip.styles';
import { trips } from '../types/tripType'
import APIURL from '../../helpers/environment';

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
        fetch(`${APIURL}/trip/all`, {
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
            fetch(`${APIURL}/park/${this.state.selectedTripId}/addpark/${this.props.parkId}`, {
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
        return (
            <SelectTripWrapper>
                <p>which trip do you want to add this to?</p>
                {this.state.tripData.map((trip) => {
                    return (
                        <button className="select-trip" onClick={() => {
                            this.selectTrip(trip.id);
                        }}>{trip.tripName}</button>
                    )
                })}
                <button className="add-to-trip" onClick={this.handleSelect}>add to trip</button>
            </SelectTripWrapper>
        )
    }
}