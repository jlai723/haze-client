import React, { Component } from 'react';
import { BsChevronDoubleRight, BsPlusSquareFill } from 'react-icons/bs';

import { Wrapper, MapWrapper, CardWrapper } from './TripCards.styles';
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
    toggleAddModal(): void,
    toggleEditModal(): void,
    deleteTrip(): void,
    fetchOneTrip(): void,
    oneTrip: TripObj,
    showTripCards: boolean,
    toggleTripCards(): void,
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
        let addBtnStyle = { height: "3em", width: "3em", color: "rgba(225,185,152,1)" }
        return (
            <Wrapper>
                {(this.props.showTripCards) ?
                    <MapWrapper>
                        <button className="addTrip" onClick={this.props.toggleAddModal}><BsPlusSquareFill style={addBtnStyle} /></button>
                        {this.props.tripData.map((trip) => {
                            let sD = new Date(trip.tripStartDate);
                            let sMonth = sD.getMonth();
                            let sDate = sD.getDate();
                            let sYear = sD.getFullYear();
                            let eD = new Date(trip.tripStartDate);
                            let eMonth = eD.getMonth();
                            let eDate = eD.getDate();
                            let eYear = eD.getFullYear();
                            return (
                                <CardWrapper>
                                    <span>
                                        <h3>{trip.tripName}</h3>
                                        <p>{`${sMonth}/${sDate}/${sYear}`} - {`${eMonth}/${eDate}/${eYear}`}</p>
                                    </span>
                                    <p>
                                        {trip.parks.map((park) => {
                                            return <span> {park.parkName} <BsChevronDoubleRight /></span>
                                        })}
                                    </p>
                                    <button onClick={() => { this.props.updateTrip(trip.id); this.props.fetchOneTrip(); this.props.toggleTripCards() }}>view</button>
                                    <button onClick={() => { this.props.updateTrip(trip.id); this.editBtn() }}>edit</button>
                                    <button onClick={() => { this.props.updateTrip(trip.id); this.props.deleteTrip() }}>delete</button>
                                </CardWrapper>
                            )
                        })}
                    </MapWrapper> :
                    <TripView
                        fetchOneTrip={this.props.fetchOneTrip}
                        fetchTrips={this.props.fetchTrips}
                        oneTrip={this.props.oneTrip}
                        token={this.props.token}
                        tripId={this.props.tripToUpdate}
                        toggleTripCards={this.props.toggleTripCards}
                    />
                }
            </Wrapper>
        )
    }
}