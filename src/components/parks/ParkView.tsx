import React, { Component } from 'react';

import { Wrapper } from '../trips/TripView.styles';
import { ParkEdit } from './ParkEdit';
import { TripObj } from "../trips/TripsIndex";

type ParkViewProps = {
    tripId: number,
    parkId: number,
    token: string | null,
    oneTrip: TripObj,
    toggleParkView(): void,
    updateActive: boolean,
    updateOn(): void,
    updateOff(): void,
    name: string,
    address: string,
    startDate: string,
    endDate: string,
    image: string,
    notes: string,
    setName(newName: string): void,
    setAddress(newAddress: string): void,
    setSDate(newSDate: string): void,
    setEDate(newEDate: string): void,
    setImage(newImage: string): void,
    setNotes(newNotes: string): void,
    showEditModal: boolean,
    toggleEditModal(): void,
    fetchOneTrip(): void,
    deletePark(): void,
    convertDate(date: string): void,
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
            <Wrapper>
                <button className="nav-back" onClick={this.props.toggleParkView}>back</button>
                <div className="image-trip-overlap">
                    <a href={this.state.parkUrl} target="_blank" rel="noreferrer">
                        <img src={this.state.parkImage} alt={this.state.parkImageAlt} />
                    </a>
                    <div className="park-overlap">
                        <h2 className="park-info">{this.state.parkName}</h2>
                        <h4 className="park-info">{this.props.convertDate(this.state.parkStartDate)} - {this.props.convertDate(this.state.parkEndDate)}</h4>
                        <h4 className="park-info">{this.state.parkAddress}</h4>
                    </div>
                </div>
                <p className="park-notes">my notes: {this.state.parkNotes}</p>
                <div className="park-btns">
                    <button className="edit-park-btn" onClick={() => {
                        this.props.updateOn();
                        this.props.toggleEditModal();
                    }}>edit</button>
                    <button className="delete-park-btn" onClick={() => {
                        this.props.deletePark();
                        window.location.reload();
                    }}>delete</button>
                </div>
                {this.props.updateActive ?
                    <ParkEdit
                        tripId={this.props.tripId}
                        updateOff={this.props.updateOff}
                        token={this.props.token}
                        name={this.props.name}
                        address={this.props.address}
                        startDate={this.props.startDate}
                        endDate={this.props.endDate}
                        image={this.props.image}
                        notes={this.props.notes}
                        parkId={this.props.parkId}
                        setName={this.props.setName}
                        setAddress={this.props.setAddress}
                        setSDate={this.props.setSDate}
                        setEDate={this.props.setEDate}
                        setImage={this.props.setImage}
                        setNotes={this.props.setNotes}
                        showEditModal={this.props.showEditModal}
                        toggleEditModal={this.props.toggleEditModal}
                        fetchOneTrip={this.props.fetchOneTrip}
                    /> :
                    <></>
                }
            </Wrapper>
        )
    }
}