import React, { Component } from 'react';

type TripCreateProps = {
    token: string | null,
    name: string,
    startDate: string,
    endDate: string,
    image: string,
    notes: string,
    setName(newName: string): void,
    setSDate(newSDate: string): void,
    setEDate(newEDate: string): void,
    setImage(newImage: string): void,
    setNotes(newNotes: string): void,
}

export class TripCreate extends Component <TripCreateProps, {}> {
    constructor(props: TripCreateProps) {
        super(props);
    }

    handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        fetch("http://localhost:3000/trip/create", {
            method: 'POST',
            body: JSON.stringify({
                trip: {
                    tripName: this.props.name,
                    tripStartDate: this.props.startDate,
                    tripEndDate: this.props.endDate,
                    tripImage: this.props.image,
                    tripNotes: this.props.notes,
                }
            }),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${this.props.token}`,
            })
        }).then(res => res.json())
        .then((data => {
            console.log(data)
        }))
    }

    render(){
        return(
            <div>
                <h3>create a trip</h3>
                <form onSubmit={this.handleSubmit}>
                    <label>name: </label>
                    <input required onChange={(e) => this.props.setName(e.target.value)}></input>
                    <label>start date: </label>
                    <input type="date" onChange={(e) => this.props.setSDate(e.target.value)}></input>
                    <label>end date: </label>
                    <input type="date" onChange={(e) => this.props.setEDate(e.target.value)}></input>
                    {/* <label>upload an image: </label>
                    <input></input> */}
                    <label>notes: </label>
                    <input onChange={(e) => this.props.setNotes(e.target.value)}></input>
                    {/* <label>destinations: </label>
                    <input onChange={(e) => this.props.setDestinations(e.target.value)}></input>
                    <select onChange={(e) => this.props.setDestinations(e.target.value)}>
                        <option value="Yellowstone National Park">Yellowstone National Park</option>
                        <option value="Yosemite National Park">Yosemite National Park</option>
                        <option value="Glacier National Park">Glacier National Park</option>
                        <option value="Grand Canyon National Park">Grand Canyon National Park</option>
                        <option value="Zion National Park">Zion National Park</option>
                    </select> */}
                    <button type="submit">add</button>
                </form>
            </div>
        )
    }
}