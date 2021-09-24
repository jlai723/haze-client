import React, { Component } from 'react';

type ParkViewProps = {
    tripId: number,
    parkId: number,
    token: string | null,
}
type ParkViewState = {
    parkAddress: string,
    parkCode: string,
    parkEndDate: string,
    parkImage: string,
    parkName: string,
    parkNotes: string,
    parkStartDate: string,
}

export class ParkView extends Component<ParkViewProps, ParkViewState> {
    constructor(props: ParkViewProps) {
        super(props);
        this.state = {
            parkAddress: "",
            parkCode: "",
            parkEndDate: "",
            parkImage: "",
            parkName: "",
            parkNotes: "",
            parkStartDate: "",
        }
    }

    componentDidMount() {
        this.fetchOnePark();
        // this.fetchInfo();
    }

    fetchOnePark = () => {
        fetch(`http://localhost:3000/park/${this.props.tripId}/${this.props.parkId}`, {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${this.props.token}`
            })
        }).then((res) => res.json())
            .then((onePark) => {
                this.setState({
                    parkAddress: onePark.parkAddress,
                    parkCode: onePark.parkCode,
                    parkEndDate: onePark.parkEndDate,
                    parkImage: onePark.parkImage,
                    parkName: onePark.parkName,
                    parkNotes: onePark.parkNotes,
                    parkStartDate: onePark.parkStartDate,
                });
            }
            )
    }

    fetchInfo = () => {
        fetch(`http://https://developer.nps.gov/api/v1/parks?parkCode=${this.state.parkCode}&api_key=HhkxS8ZdTvnrdnu3zsQUEUzYbunbFcicTxvvQBPK`)
            .then(res => {
                if (res.status !== 200) {
                    throw new Error('Fetch Error');
                } else return res.json()
            })
            .then(json => { console.log(json) })
            .catch(err => console.log(err))
    }

    render() {
        return (
            <div>
                <img src={this.state.parkImage} />
                <h2>{this.state.parkName}</h2>
                <h4>{this.state.parkStartDate} - {this.state.parkEndDate}</h4>
                <h4>{this.state.parkAddress}</h4>
                <p>my notes: {this.state.parkNotes}</p>
            </div>
        )
    }
}