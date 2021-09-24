import React, { Component } from 'react';

import { ParkCreate } from './ParkCreate';
import { natlPark } from '../types/natlParkType';

type ParkDisplayProps = {
    queriedParks: natlPark[] | [],
    parkCreate(): void,
    currentView: string,
    tripId: number,
    token: string | null,
}
type ParkDisplayState = {
    selectedParkName: string,
    selectedParkAddress: string,
    selectedParkImage: string,
    parkImgAlt: string,
}

export class ParkDisplay extends Component<ParkDisplayProps, ParkDisplayState> {
    constructor(props: ParkDisplayProps) {
        super(props);
        this.state = {
            selectedParkName: '',
            selectedParkAddress: '',
            selectedParkImage: '',
            parkImgAlt: '',
        }
    }

    selectParkName = (selectName: string) => {
        this.setState({
            selectedParkName: selectName,
        })
    }
    selectParkAddress = (selectAddress: string) => {
        this.setState({
            selectedParkAddress: selectAddress,
        })
    }
    selectParkImage = (selectImage: string) => {
        this.setState({
            selectedParkImage: selectImage,
        })
    }
    selectImgAlt = (selectImgAlt: string) => {
        this.setState({
            parkImgAlt: selectImgAlt,
        })
    }

    render() {
        return (
            <div>
                {this.props.currentView === "ParkSearchDisplay" ?
                    this.props.queriedParks.map((park) => {
                        return (
                            <div>
                                <h2>{park.fullName.toLowerCase()}</h2>
                                <h5>{park.addresses[0].line1.toLowerCase()}, {park.addresses[0].city.toLowerCase()}, {park.addresses[0].stateCode.toLowerCase()} {park.addresses[0].postalCode}</h5>
                                <img src={park.images[0].url} alt={park.images[0].altText} />
                                <a href={park.url} target="_blank" rel="noreferrer">visit their site</a>
                                <button onClick={() => {
                                    this.selectParkName(park.fullName.toLowerCase());
                                    this.selectParkAddress(`${park.addresses[0].line1.toLowerCase()}, ${park.addresses[0].city.toLowerCase()}, ${park.addresses[0].stateCode.toLowerCase()} ${park.addresses[0].postalCode}`);
                                    this.selectParkImage(park.images[0].url);
                                }}>view</button>
                                <button onClick={() => {
                                    this.props.parkCreate();
                                    this.selectParkName(park.fullName.toLowerCase());
                                    this.selectParkAddress(`${park.addresses[0].line1.toLowerCase()}, ${park.addresses[0].city.toLowerCase()}, ${park.addresses[0].stateCode.toLowerCase()} ${park.addresses[0].postalCode}`);
                                    this.selectParkImage(park.images[0].url);
                                    this.selectImgAlt(park.images[0].altText);
                                }}>add to trip</button>
                            </div>
                        )
                    }) :
                    <ParkCreate
                    parkName={this.state.selectedParkName}
                    parkAddress={this.state.selectedParkAddress}
                    parkImage={this.state.selectedParkImage}
                    parkImgAlt={this.state.parkImgAlt}
                    tripId={this.props.tripId}
                    token={this.props.token}
                    />
            }
            </div>
        )
    }
}