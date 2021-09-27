import React, { Component } from 'react';
import { ParkConnectToTrip } from './ParkConnectToTrip';

type ParkCreateProps = {
    parkName: string,
    parkAddress: string,
    parkImage: string,
    parkImgAlt: string,
    parkCode: string,
    parkUrl: string,
    tripId: number,
    token: string | null,
    fetchOneTrip(): void,
}
type ParkCreateState = {
    parkSDate: string,
    parkEDate: string,
    parkNotes: string,
    parkId: number,
    showParkConnect: boolean,
}

export class ParkCreate extends Component<ParkCreateProps, ParkCreateState> {
    constructor(props: ParkCreateProps) {
        super(props);
        this.state = {
            parkSDate: '',
            parkEDate: '',
            parkNotes: '',
            parkId: 0,
            showParkConnect: false,
        }
    }

    handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        fetch(`http://localhost:3000/park/${this.props.tripId}/create`, {
            method: 'POST',
            body: JSON.stringify({
                park: {
                    parkName: this.props.parkName,
                    parkAddress: this.props.parkAddress,
                    parkCode: this.props.parkCode,
                    parkUrl: this.props.parkUrl,
                    parkImage: this.props.parkImage,
                    parkImageAlt: this.props.parkImgAlt,
                    parkStartDate: this.state.parkSDate,
                    parkEndDate: this.state.parkEDate,
                    parkNotes: this.state.parkNotes,
                }
            }),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${this.props.token}`,
            })
        }).then(res => res.json())
            .then(json => this.setState({ parkId: json.id }))
    }

    setSDate = (newSDate: string) => {
        this.setState({ parkSDate: newSDate })
    }
    setEDate = (newEDate: string) => {
        this.setState({ parkEDate: newEDate })
    }
    setNotes = (newNotes: string) => {
        this.setState({ parkNotes: newNotes })
    }
    toggleParkConnect = () => {
        this.setState({ showParkConnect: !this.state.showParkConnect })
    }

    render() {
        return (
            <div>
                <img src={this.props.parkImage} alt={this.props.parkImgAlt} />
                <p>name: {this.props.parkName}</p>
                <p>address: {this.props.parkAddress}</p>
                <a href={this.props.parkUrl} target="_blank" rel="noreferrer">park website</a>
                <form onSubmit={this.handleSubmit}>
                    <label>start date:</label>
                    <input type="date" onChange={(e) => this.setSDate(e.target.value)}></input>
                    <label>end date:</label>
                    <input type="date" onChange={(e) => this.setEDate(e.target.value)}></input>
                    <label>notes:</label>
                    <input type="text" onChange={(e) => this.setNotes(e.target.value)}></input>
                    <button type="submit" onClick={this.toggleParkConnect}>select trip</button>
                </form>
                {(this.state.showParkConnect) ?
                    <ParkConnectToTrip
                        parkId={this.state.parkId}
                        tripId={this.props.tripId}
                        token={this.props.token}
                        fetchOneTrip={this.props.fetchOneTrip}
                    /> :
                    <></>
                }
                <button onClick={() => window.location.reload()}>cancel</button>
            </div>
        )
    }
}