import React, { Component } from 'react';

type ParkCreateProps = {
    parkName: string,
    parkAddress: string,
    parkImage: string,
    parkImgAlt: string,
    tripId: number,
    token: string | null,
}
type ParkCreateState = {
    parkSDate: string,
    parkEDate: string,
    parkNotes: string,
}

export class ParkCreate extends Component<ParkCreateProps, ParkCreateState> {
    constructor(props: ParkCreateProps) {
        super(props);
        this.state = {
            parkSDate: '',
            parkEDate: '',
            parkNotes: '',
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
                    parkImage: this.props.parkImage,
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
            .then(json => {
                fetch(`http://localhost:3000/park/${this.props.tripId}/addpark/${json.id}`, {
                    method: 'POST',
                    headers: new Headers({
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${this.props.token}`,
                    })
                }).then(res => res.json())
                    .then(data => console.log(data))
            })
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

    render() {
        return (
            <div>
                <img src={this.props.parkImage} alt={this.props.parkImgAlt} />
                <p>name: {this.props.parkName}</p>
                <p>address: {this.props.parkAddress}</p>
                <form onSubmit={this.handleSubmit}>
                    <label>start date:</label>
                    <input type="date" onChange={(e) => this.setSDate(e.target.value)}></input>
                    <label>end date:</label>
                    <input type="date" onChange={(e) => this.setEDate(e.target.value)}></input>
                    <label>notes:</label>
                    <input type="text" onChange={(e) => this.setNotes(e.target.value)}></input>
                    <button type="submit">add to trip</button>
                </form>
                <button>cancel</button>
            </div>
        )
    }
}