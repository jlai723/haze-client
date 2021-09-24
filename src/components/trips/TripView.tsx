import React, { Component } from 'react';

import { ParkIndex, ParkView, ParkSearch } from '../parks';
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
type TripViewProps = {
    fetchOneTrip(): void,
    oneTrip: TripObj,
    token: string | null,
    tripId: number,
};
type TripViewState = {
    currentView: string,
    query: string,
}

export class TripView extends Component<TripViewProps, TripViewState> {
    constructor(props: TripViewProps) {
        super(props);
        this.state = {
            currentView: "TripView",
            query: '',
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
                        <button onClick={this.parkView}>view</button>
                        <button>edit</button>
                        <button>delete</button>
                    </div>
                })}
                </div> : 
                (this.state.currentView === "ParkView") ?
                <ParkView /> :
                <ParkSearch
                query={this.state.query}
                setQuery={this.setQuery}
                token={this.props.token}
                tripId={this.props.tripId}
                />               
            }
            </div>
        )
    }

    setQuery = (newQuery: string) => {
        this.setState({
            query: newQuery,
        })
    }

}
