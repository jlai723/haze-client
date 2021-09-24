import React, { Component } from 'react';

import { TripCreate } from './TripCreate';
import { TripCards } from './TripCards';
import { TripEdit } from './TripEdit';
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
type TripsIndexProps = {
    sessionToken: string | null,
};
type TripsIndexState = {
    tripName: string,
    tripStartDate: string,
    tripEndDate: string,
    tripImage: string,
    tripNotes: string,
    showAddModal: boolean,
    showEditModal: boolean,
    updateActive: boolean,
    tripToUpdate: number,
    tripData: trips[] | [],
    oneTrip: TripObj,
    currentView: string,
};

export class TripsIndex extends Component<TripsIndexProps, TripsIndexState> {
    constructor(props: TripsIndexProps) {
        super(props);
        this.state = {
            tripName: '',
            tripStartDate: '',
            tripEndDate: '',
            tripImage: '',
            tripNotes: '',
            showAddModal: false,
            showEditModal: false,
            updateActive: false,
            tripToUpdate: 0,
            tripData: [],
            oneTrip: {
                createdAt: "",
                id: 0,
                parks: [],
                tripEndDate: "",
                tripImage: "",
                tripName: "",
                tripNotes: "",
                tripStartDate: "",
                updatedAt: "",
                userId: 0,
            },
            currentView: "TripCards",
        }
    }

    toggleAddModal = () => {
        this.setState({
            showAddModal: !this.state.showAddModal,
        })
    }
    toggleEditModal = () => {
        this.setState({
            showEditModal: !this.state.showEditModal,
        })
    }

    fetchTrips = () => {
        fetch("http://localhost:3000/trip/all", {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${this.props.sessionToken}`
            })
        }).then((res) => res.json())
            .then((tripData) => this.setState({
                tripData: tripData,
            }))
    }

    fetchOneTrip = () => {
        fetch(`http://localhost:3000/trip/${this.state.tripToUpdate}`, {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${this.props.sessionToken}`
            })
        }).then((res) => res.json())
            .then((oneTrip) => {
                if (oneTrip !== null) this.setState({
                    oneTrip: oneTrip,
                })
            })
    }

    deleteTrip = () => {
        fetch(`http://localhost:3000/trip/delete/${this.state.tripToUpdate}`, {
            method: 'DELETE',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${this.props.sessionToken}`
            })
        }).then(() => this.fetchTrips())
    }

    render() {
        return (
            <div>
                {this.state.currentView === "TripCards" ?
                    <button onClick={this.toggleAddModal}>add a trip</button> :
                    <></>                
                }
                <TripCreate
                    token={this.props.sessionToken}
                    name={this.state.tripName}
                    startDate={this.state.tripStartDate}
                    endDate={this.state.tripEndDate}
                    image={this.state.tripImage}
                    notes={this.state.tripNotes}
                    setName={this.setName}
                    setSDate={this.setSDate}
                    setEDate={this.setEDate}
                    setImage={this.setImage}
                    setNotes={this.setNotes}
                    showAddModal={this.state.showAddModal}
                    toggleAddModal={this.toggleAddModal}
                />
                <TripCards
                    fetchTrips={this.fetchTrips}
                    tripToUpdate={this.state.tripToUpdate}
                    updateTrip={this.updateTrip}
                    updateOn={this.updateOn}
                    toggleEditModal={this.toggleEditModal}
                    tripData={this.state.tripData}
                    token={this.props.sessionToken}
                    deleteTrip={this.deleteTrip}
                    fetchOneTrip={this.fetchOneTrip}
                    oneTrip={this.state.oneTrip}
                    currentView={this.state.currentView}
                    tripView={this.tripView}
                />
                {this.state.updateActive
                    ? <TripEdit
                        tripToUpdate={this.state.tripToUpdate}
                        updateOff={this.updateOff}
                        token={this.props.sessionToken}
                        name={this.state.tripName}
                        startDate={this.state.tripStartDate}
                        endDate={this.state.tripEndDate}
                        image={this.state.tripImage}
                        notes={this.state.tripNotes}
                        setName={this.setName}
                        setSDate={this.setSDate}
                        setEDate={this.setEDate}
                        setImage={this.setImage}
                        setNotes={this.setNotes}
                        showEditModal={this.state.showEditModal}
                        toggleEditModal={this.toggleEditModal}
                        fetchTrips={this.fetchTrips}
                    />
                    : <></>}
            </div>
        )
    }

    setName = (newName: string) => {
        this.setState({ tripName: newName })
    }
    setSDate = (newSDate: string) => {
        this.setState({ tripStartDate: newSDate })
    }
    setEDate = (newEDate: string) => {
        this.setState({ tripEndDate: newEDate })
    }
    setImage = (newImage: string) => {
        this.setState({ tripImage: newImage })
    }
    setNotes = (newNotes: string) => {
        this.setState({ tripNotes: newNotes })
    }

    updateTrip = (tripId: number) => {
        this.setState({ tripToUpdate: tripId })
    }
    updateOn = () => {
        this.setState({ updateActive: true })
    }
    updateOff = () => {
        this.setState({ updateActive: false })
    }

    tripView = () => {
        this.setState({ currentView: "TripView" })
    }
}