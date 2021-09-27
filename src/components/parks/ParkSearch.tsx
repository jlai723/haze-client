import React, { Component } from 'react';
import { Link } from "react-router-dom";

import { ParkDisplay } from './ParkDisplay';
import { natlPark } from "../types/natlParkType";
import { TripObj } from "../trips/TripsIndex";

type ParkSearchProps = {
    tripId: number,
    token: string | null,
    fetchOneTrip(): void,
    oneTrip: TripObj,
    toggleParkSearch(): void,
};
type ParkSearchClass = {
    query: string,
    queriedParks: natlPark[] | [],
    currentView: string,
};

export class ParkSearch extends Component<ParkSearchProps, ParkSearchClass> {
    constructor(props: ParkSearchProps) {
        super(props);
        this.state = {
            query: "",
            queriedParks: [],
            currentView: "ParkSearchDisplay",
        }
    }

    setQuery = (newQuery: string) => {
        this.setState({ query: newQuery })
    }

    fetchNatlParks = (e: React.FormEvent) => {
        e.preventDefault();
        fetch(`https://developer.nps.gov/api/v1/parks?q=${this.state.query}&api_key=HhkxS8ZdTvnrdnu3zsQUEUzYbunbFcicTxvvQBPK`)
            .then(res => {
                if (res.status !== 200) {
                    throw new Error('Fetch Error');
                } else return res.json()
            })
            .then(json => {
                this.setState({
                    queriedParks: json.data
                })
            })
            .catch(err => console.log(err))
    }

    parkCreate = () => {
        this.setState({
            currentView: "ParkCreate",
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.fetchNatlParks}>
                    <label>enter park name or keywords to search:</label>
                    <input type="text" onChange={(e) => { this.setQuery(e.target.value) }}></input>
                    <button type="submit">explore</button>
                </form>
                <button onClick={this.props.toggleParkSearch}>{`back to ${this.props.oneTrip.tripName}`}</button>
                <div>
                    <ParkDisplay
                        queriedParks={this.state.queriedParks}
                        parkCreate={this.parkCreate}
                        currentView={this.state.currentView}
                        tripId={this.props.tripId}
                        token={this.props.token}
                        fetchOneTrip={this.props.fetchOneTrip}
                    />
                </div>
            </div>
        )
    }
}