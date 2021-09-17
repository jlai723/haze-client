import React, { Component } from 'react';

import { TripCreate } from './TripCreate';
import { TripCards } from './TripCards';

type TripsIndexProps = {
    sessionToken: string | null,
};
type TripsIndexState = {
    tripName: string,
    tripStartDate: string,
    tripEndDate: string,
    tripImage: string,
    tripNotes: string,
};

export class TripsIndex extends Component <TripsIndexProps, TripsIndexState> {
    constructor(props: TripsIndexProps) {
        super(props);
        this.state = {
            tripName: '',
            tripStartDate: '',
            tripEndDate: '',
            tripImage: '',
            tripNotes: '',
        }
    }

    render(){
        return(
            <div>
                <button>add</button>
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
                />
                <TripCards token={this.props.sessionToken} />
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
}