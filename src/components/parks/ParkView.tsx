import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { TripObj } from "../trips/TripsIndex";

type ParkViewProps = {
    tripId: number,
    parkId: number,
    token: string | null,
    oneTrip: TripObj,
    toggleParkView(): void,
}
type ParkViewState = {
    parkAddress: string,
    parkCode: string,
    parkEndDate: string,
    parkImage: string,
    parkName: string,
    parkNotes: string,
    parkStartDate: string,
    parkUrl: string,
    parkImageAlt: string,
}

export class ParkView extends Component<ParkViewProps, ParkViewState> {
    constructor(props: ParkViewProps) {
        super(props);
        this.state = {
            parkAddress: "",
            parkCode: "",
            parkEndDate: "",
            parkImage: "",
            parkName: "",
            parkNotes: "",
            parkStartDate: "",
            parkUrl: "",
            parkImageAlt: "",
        }
    }

    componentDidMount() {
        this.fetchOnePark();
    }

    fetchOnePark = () => {
        fetch(`http://localhost:3000/park/${this.props.tripId}/${this.props.parkId}`, {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${this.props.token}`
            })
        }).then((res) => res.json())
            .then((onePark) => {
                this.setState({
                    parkAddress: onePark.parkAddress,
                    parkCode: onePark.parkCode,
                    parkEndDate: onePark.parkEndDate,
                    parkImage: onePark.parkImage,
                    parkName: onePark.parkName,
                    parkNotes: onePark.parkNotes,
                    parkStartDate: onePark.parkStartDate,
                    parkUrl: onePark.parkUrl,
                    parkImageAlt: onePark.parkImageAlt,
                });
            }
            )
    }

    render() {
        return (
            <div>
                <img src={this.state.parkImage} alt={this.state.parkImageAlt} />
                <h2>{this.state.parkName}</h2>
                <h4>{this.state.parkStartDate} - {this.state.parkEndDate}</h4>
                <h4>{this.state.parkAddress}</h4>
                <p>visit their site: {this.state.parkUrl}</p>
                <p>my notes: {this.state.parkNotes}</p>
                <button>edit</button>
                <button>delete</button>
                <button onClick={this.props.toggleParkView}>{`back to ${this.props.oneTrip.tripName}`}</button>
            </div>
        )
    }
}