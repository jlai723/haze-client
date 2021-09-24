import React, { Component } from 'react';

import { ParkDisplay } from './ParkDisplay';
import { natlPark } from "../types/natlParkType"

type ParkSearchProps = {
    query: string,
    setQuery(newQuery: string): void,
    tripId: number,
    token: string | null,
    fetchOneTrip(): void,
};
type ParkSearchClass = {
    queriedParks: natlPark[] | [],
    currentView: string,
};

export class ParkSearch extends Component<ParkSearchProps, ParkSearchClass> {
    constructor(props: ParkSearchProps) {
        super(props);
        this.state = {
            queriedParks: [],
            currentView: "ParkSearchDisplay",
        }
    }

    fetchNatlParks = (e: React.FormEvent) => {
        e.preventDefault();
        fetch(`https://developer.nps.gov/api/v1/parks?q=${this.props.query}&api_key=HhkxS8ZdTvnrdnu3zsQUEUzYbunbFcicTxvvQBPK`)
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
                {this.state.currentView === "ParkSearchDisplay" ?
                    <form onSubmit={this.fetchNatlParks}>
                        <label>enter park name or keywords to search:</label>
                        <input type="text" onChange={(e) => { this.props.setQuery(e.target.value) }}></input>
                        <button type="submit">explore</button>
                    </form> :
                    null}
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