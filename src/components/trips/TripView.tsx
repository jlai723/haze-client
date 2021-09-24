import React, { Component } from 'react';

import { ParkIndex, ParkView, ParkSearch } from '../parks';
import { trips } from '../types/tripType';
import { park } from '../types/parkType';
import { ParkEdit } from '../parks/ParkEdit';

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
    fetchTrips(): void,
    oneTrip: TripObj,
    token: string | null,
    tripId: number,
};
type TripViewState = {
    currentView: string,
    query: string,
    parkId: number,
    parkName: string,
    parkAddress: string,
    parkStartDate: string,
    parkEndDate: string,
    parkImage: string,
    parkNotes: string,
    showEditModal: boolean,
    updateActive: boolean,
}

export class TripView extends Component<TripViewProps, TripViewState> {
    constructor(props: TripViewProps) {
        super(props);
        this.state = {
            currentView: "TripView",
            query: '',
            parkId: 0,
            parkName: '',
            parkAddress: '',
            parkStartDate: '',
            parkEndDate: '',
            parkImage: '',
            parkNotes: '',
            showEditModal: false,
            updateActive: false,
        }
    }

    componentDidMount() {
        this.props.fetchOneTrip();
    }

    parkView = () => {
        this.setState({
            currentView: "ParkView",
        })
    }

    parkSearch = () => {
        this.setState({
            currentView: "ParkSearch",
        })
    }

    toggleEditModal = () => {
        this.setState({ showEditModal: !this.state.showEditModal })
    }

    editBtn = () => {
        this.updateOn();
        this.toggleEditModal();
    }

    deletePark = () => {
        fetch(`http://localhost:3000/park/${this.props.tripId}/delete/${this.state.parkId}`, {
            method: 'DELETE',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${this.props.token}`
            })
        }).then(() => this.props.fetchOneTrip())
    }

    render() {
        return (
            <div>
                {this.state.currentView === "TripView" ?
                    <div>
                        <button onClick={this.parkSearch}>add park</button>
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
                                <button onClick={() => { this.parkView(); this.setParkId(park.id) }}>view</button>
                                <button onClick={() => { this.setParkId(park.id); this.editBtn() }}>edit</button>
                                <button onClick={() => { this.setParkId(park.id); this.deletePark() }}>delete</button>
                            </div>
                        })}
                    </div> :
                    (this.state.currentView === "ParkView") ?
                        <ParkView
                            tripId={this.props.tripId}
                            parkId={this.state.parkId}
                            token={this.props.token}
                        /> :
                        <ParkSearch
                            query={this.state.query}
                            setQuery={this.setQuery}
                            token={this.props.token}
                            tripId={this.props.tripId}
                            fetchOneTrip={this.props.fetchOneTrip}
                        />
                }
                {this.state.updateActive ?
                    <ParkEdit
                        tripId={this.props.tripId}
                        updateOff={this.updateOff}
                        token={this.props.token}
                        name={this.state.parkName}
                        address={this.state.parkAddress}
                        startDate={this.state.parkStartDate}
                        endDate={this.state.parkEndDate}
                        image={this.state.parkImage}
                        notes={this.state.parkNotes}
                        parkId={this.state.parkId}
                        setName={this.setName}
                        setAddress={this.setAddress}
                        setSDate={this.setSDate}
                        setEDate={this.setEDate}
                        setImage={this.setImage}
                        setNotes={this.setNotes}
                        showEditModal={this.state.showEditModal}
                        toggleEditModal={this.toggleEditModal}
                        fetchOneTrip={this.props.fetchOneTrip}
                    /> :
                    <></>
                }
            </div>
        )
    }

    setQuery = (newQuery: string) => {
        this.setState({ query: newQuery })
    }
    setParkId = (newParkId: number) => {
        this.setState({ parkId: newParkId })
    }
    setName = (newName: string) => {
        this.setState({ parkName: newName })
    }
    setAddress = (newAddress: string) => {
        this.setState({ parkAddress: newAddress })
    }
    setSDate = (newSDate: string) => {
        this.setState({ parkStartDate: newSDate })
    }
    setEDate = (newEDate: string) => {
        this.setState({ parkEndDate: newEDate })
    }
    setImage = (newImage: string) => {
        this.setState({ parkImage: newImage })
    }
    setNotes = (newNotes: string) => {
        this.setState({ parkNotes: newNotes })
    }

    updateOn = () => {
        this.setState({ updateActive: true })
    }
    updateOff = () => {
        this.setState({ updateActive: false })
    }

}
