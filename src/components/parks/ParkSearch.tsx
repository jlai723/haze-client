import React, { Component } from 'react';
import { Link } from "react-router-dom";

import { Wrapper } from './ParkSearch.styles';
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
    showParkSearchDisplay: boolean,
    showParkCreate: boolean,
    showParkDetails: boolean,
};

export class ParkSearch extends Component<ParkSearchProps, ParkSearchClass> {
    constructor(props: ParkSearchProps) {
        super(props);
        this.state = {
            query: "",
            queriedParks: [],
            showParkSearchDisplay: true,
            showParkCreate: false,
            showParkDetails: false,
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

    toggleParkCreate = () => {
        this.setState({ 
            showParkSearchDisplay: !this.state.showParkSearchDisplay,
            showParkCreate: !this.state.showParkCreate,
        })
    }
    toggleParkDetails = () => {
        this.setState({
            showParkSearchDisplay: !this.state.showParkSearchDisplay,
            showParkDetails: !this.state.showParkDetails,
        })
    }

    render() {
        return (
            <div>
                {(this.state.showParkSearchDisplay) ?
                    <Wrapper>
                        <button className="nav-back" onClick={this.props.toggleParkSearch}>back</button>
                        <form onSubmit={this.fetchNatlParks}>
                            <label>enter name or keywords to search:</label>
                            <input type="text" onChange={(e) => { this.setQuery(e.target.value) }}></input>
                            <button className="explore" type="submit">explore</button>
                        </form>
                    </Wrapper> :
                    <></>
                }
                <div>
                    <ParkDisplay
                        queriedParks={this.state.queriedParks}
                        query={this.state.query}
                        toggleParkCreate={this.toggleParkCreate}
                        toggleParkDetails={this.toggleParkDetails}
                        showParkSearchDisplay={this.state.showParkSearchDisplay}
                        showParkCreate={this.state.showParkCreate}
                        showParkDetails={this.state.showParkDetails}
                        tripId={this.props.tripId}
                        token={this.props.token}
                        fetchOneTrip={this.props.fetchOneTrip}
                    />
                </div>
            </div>
        )
    }
}