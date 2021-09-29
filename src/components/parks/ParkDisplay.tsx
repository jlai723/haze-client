import React, { Component } from 'react';

import { Wrapper } from './ParkDisplay.styles';
import { ParkCreate } from './ParkCreate';
import { natlPark, activity, address, email, phone, eFee, pass, fee, image, oHours, except, topic } from '../types/natlParkType';
import { ParkDetails } from './ParkDetails';

export interface ParkObj {
    activities: activity[] | []
    addresses: address[] | []
    contacts: {
        emailAddresses: email[] | []
        phoneNumbers: phone[] | []
        description: string
        designation: string
        directionsInfo: string
        directionsUrl: string
    }
    entranceFees: eFee[] | []
    entrancePasses: pass[] | []
    fees: fee[] | []
    fullName: string
    id: string
    images: image[] | []
    latLong: string
    latitude: string
    longitude: string
    name: string
    operatingHours: oHours[] | []
    parkCode: string
    states: string
    topics: topic[] | []
    url: string
    weatherInfo: string
}
type ParkDisplayProps = {
    queriedParks: natlPark[] | [],
    query: string,
    toggleParkCreate(): void,
    toggleParkDetails(): void,
    showParkSearchDisplay: boolean,
    showParkCreate: boolean,
    showParkDetails: boolean,
    tripId: number,
    token: string | null,
    fetchOneTrip(): void,
}
type ParkDisplayState = {
    selectedParkName: string,
    selectedParkAddress: string,
    selectedParkImage: string,
    parkImgAlt: string,
    parkCode: string,
    parkUrl: string,
    selectedPark: ParkObj,
}

export class ParkDisplay extends Component<ParkDisplayProps, ParkDisplayState> {
    constructor(props: ParkDisplayProps) {
        super(props);
        this.state = {
            selectedParkName: '',
            selectedParkAddress: '',
            selectedParkImage: '',
            parkImgAlt: '',
            parkCode: '',
            parkUrl: '',
            selectedPark: {
                activities: [],
                addresses: [],
                contacts: {
                    emailAddresses: [],
                    phoneNumbers: [],
                    description: "",
                    designation: "",
                    directionsInfo: "",
                    directionsUrl: "",
                },
                entranceFees: [],
                entrancePasses: [],
                fees: [],
                fullName: "",
                id: "",
                images: [],
                latLong: "",
                latitude: "",
                longitude: "",
                name: "",
                operatingHours: [],
                parkCode: "",
                states: "",
                topics: [],
                url: "",
                weatherInfo: "",
            },
        }
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
                {(this.props.showParkSearchDisplay) ?
                    this.props.queriedParks.map((park) => {
                        return (
                            <Wrapper>
                                <div className="park-title">
                                    <h2>{park.fullName.toLowerCase()}</h2>
                                    <h5>{park.addresses[0].line1.toLowerCase()}, {park.addresses[0].city.toLowerCase()}, {park.addresses[0].stateCode.toLowerCase()} {park.addresses[0].postalCode}</h5>
                                </div>
                                <a href={park.url} target="_blank" rel="noreferrer"><img src={park.images[0].url} alt={park.images[0].altText} /></a>
                                <div className="park-search-btns">
                                <button onClick={() => {
                                    this.selectPark(park);
                                    this.props.toggleParkDetails();
                                    // console.log(park);
                                    // this.fetchInfo();
                                }}>view</button>
                                <button onClick={() => {
                                    this.props.toggleParkCreate();
                                    this.selectParkName(park.fullName.toLowerCase());
                                    this.selectParkAddress(`${park.addresses[0].line1.toLowerCase()}, ${park.addresses[0].city.toLowerCase()}, ${park.addresses[0].stateCode.toLowerCase()} ${park.addresses[0].postalCode}`);
                                    this.selectParkImage(park.images[0].url);
                                    this.selectImgAlt(park.images[0].altText);
                                    this.selectparkCode(park.parkCode);
                                    this.selectParkUrl(park.url);
                                }}>add to trip</button>
                                </div>
                            </Wrapper>
                        )
                    }) :
                    // (this.props.showParkSearchDisplay && this.props.queriedParks === []) ?
                    // <p>{`No results found that match ${this.props.query}`}</p> :
                    (this.props.showParkCreate && !this.props.showParkSearchDisplay && !this.props.showParkDetails) ?
                        <ParkCreate
                            parkName={this.state.selectedParkName}
                            parkAddress={this.state.selectedParkAddress}
                            parkImage={this.state.selectedParkImage}
                            parkImgAlt={this.state.parkImgAlt}
                            parkCode={this.state.parkCode}
                            parkUrl={this.state.parkUrl}
                            tripId={this.props.tripId}
                            token={this.props.token}
                            fetchOneTrip={this.props.fetchOneTrip}
                            toggleParkCreate={this.props.toggleParkCreate}
                        /> :
                        (this.props.showParkDetails && !this.props.showParkSearchDisplay && !this.props.showParkCreate) ?
                            <ParkDetails
                                parkDetails={this.state.selectedPark}
                                toggleParkDetails={this.props.toggleParkDetails}
                            /> :
                            <></>
                }
            </div>
        )
    }

    selectParkName = (selectName: string) => {
        this.setState({ selectedParkName: selectName })
    }
    selectParkAddress = (selectAddress: string) => {
        this.setState({ selectedParkAddress: selectAddress })
    }
    selectParkImage = (selectImage: string) => {
        this.setState({ selectedParkImage: selectImage })
    }
    selectImgAlt = (selectImgAlt: string) => {
        this.setState({ parkImgAlt: selectImgAlt })
    }
    selectparkCode = (selectParkCode: string) => {
        this.setState({ parkCode: selectParkCode })
    }
    selectParkUrl = (selectParkUrl: string) => {
        this.setState({ parkUrl: selectParkUrl })
    }
    selectPark = (selectPark: ParkObj) => {
        this.setState({ selectedPark: selectPark })
    }
}