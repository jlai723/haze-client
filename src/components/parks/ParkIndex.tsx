import React, { Component } from 'react';

import { ParkView } from './ParkView';
type parkAPI = {
    description: string,
    fullName: string,
    images: string[],
    name: string,
    parkCode: string,
    states: string,
    url: string,
    weatherInfo: string,
}
type ParkIndexState = {
    parkAPIData: parkAPI[],
}

export class ParkIndex extends Component <{}, ParkIndexState> {
    constructor(props: {}) {
        super(props);
        this.state = {
            parkAPIData: [],
        }
    }

    // componentDidMount() {
    //     this.fetchNatlParks();
    // }

    fetchNatlParks = () => {
        fetch(`https://developer.nps.gov/api/v1/parks?api_key=HhkxS8ZdTvnrdnu3zsQUEUzYbunbFcicTxvvQBPK`)
        .then(res => res.json())
        .then(json => console.log(json.data[0].description))
    }

    render() {
        return(
            <div>
            </div>
        )
    }
}