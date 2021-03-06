import React, { Component } from 'react';
import * as BsIcons from 'react-icons/bs';

import { Wrapper, MapWrapper, CardWrapper, CardItemWrapper } from './TripCards.styles';
import { TripView } from './TripView';
import { trips } from '../types/tripType';
import { park } from '../types/parkType';
import { AdminDashboard } from '../admin/AdminDashboard';

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
    toggleAddModal(): void,
    toggleEditModal(): void,
    deleteTrip(): void,
    fetchOneTrip(): void,
    oneTrip: TripObj,
    showTripCards: boolean,
    toggleTripCards(): void,
    userRole: string | null,
    showAdmin: boolean,
    toggleAdmin(): void,
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

    render() {
        let addBtnStyle = { height: "3em", width: "3em", color: "rgba(225,185,152,1)" }
        return (
            <Wrapper>
                {(this.props.showTripCards) ?
                    <MapWrapper>
                        {(this.props.userRole === "admin" ? 
                        <button className="admin" onClick={this.props.toggleAdmin}>admin access</button> :
                        <></>
                        )}
                        <button className="addTrip" onClick={this.props.toggleAddModal}><BsIcons.BsPlusSquareFill style={addBtnStyle} /></button>
                        <CardWrapper>
                            {this.props.tripData.map((trip) => {
                                return (
                                    <CardItemWrapper>
                                        <span>
                                            <h3>{trip.tripName}</h3>
                                            <p>{this.convertDate(trip.tripStartDate)} - {this.convertDate(trip.tripEndDate)}</p>
                                        </span>
                                        <p>
                                            {trip.parks.map((park) => {
                                                return <span> {park.parkName} <BsIcons.BsChevronDoubleRight /></span>
                                            })}
                                        </p>
                                        <div className="btns">
                                            <button className="card-btn" onClick={() => { this.props.updateTrip(trip.id); this.props.fetchOneTrip(); this.props.toggleTripCards() }}>view</button>
                                            <button className="card-btn" onClick={() => { this.props.updateTrip(trip.id); this.editBtn() }}>edit</button>
                                            <button className="card-btn" onClick={() => { this.props.updateTrip(trip.id); this.props.deleteTrip() }}>delete</button>
                                        </div>
                                    </CardItemWrapper>
                                )
                            })}
                        </CardWrapper>
                    </MapWrapper> :
                    (this.props.showAdmin && !this.props.showTripCards) ?
                    <AdminDashboard 
                        toggleAdmin={this.props.toggleAdmin}
                        token={this.props.token}
                    /> :
                    <TripView
                        fetchOneTrip={this.props.fetchOneTrip}
                        fetchTrips={this.props.fetchTrips}
                        oneTrip={this.props.oneTrip}
                        token={this.props.token}
                        tripId={this.props.tripToUpdate}
                        toggleTripCards={this.props.toggleTripCards}
                        convertDate={this.convertDate}
                    />
                }
            </Wrapper>
        )
    }

    editBtn = () => {
        this.props.updateOn();
        this.props.toggleEditModal();
    }
    convertDate = (date: string) => {
        let newDate = new Date(date);
        let formattedDate = `${newDate.getMonth()}/${newDate.getDate()}/${newDate.getFullYear()}`
        return formattedDate;
    }
}