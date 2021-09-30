import React, { Component } from 'react';

import * as BsIcons from 'react-icons/bs';
import { IconContext } from 'react-icons';
import { ParkObj } from './ParkDisplay';
import { Wrapper, ParkDetailsImg, AccordionSection, Container, Wrap, Dropdown } from './ParkDetails.styles';

type ParkDetailsProps = {
    parkDetails: ParkObj,
    toggleParkDetails(): void,
}
type ParkDetailsState = {
    clickedActivities: boolean,
    clickedContact: boolean,
    clickedDirections: boolean,
    clickedFees: boolean,
    clickedHours: boolean,
    clickedWeather: boolean,
}

export class ParkDetails extends Component<ParkDetailsProps, ParkDetailsState> {
    constructor(props: ParkDetailsProps) {
        super(props);
        this.state = {
            clickedActivities: false,
            clickedContact: false,
            clickedDirections: false,
            clickedFees: false,
            clickedHours: false,
            clickedWeather: false,
        }
    }

    render() {
        let details = this.props.parkDetails
        return (
            <Wrapper>
                <button className="nav-back" onClick={this.props.toggleParkDetails}>back</button>
                <ParkDetailsImg src={details.images[1].url} alt={details.images[1].altText} />
                <div className="park-info">
                    <h2>{details.fullName.toLowerCase()}</h2>
                    {details.designation !== "" ?
                        <p>({details.designation.toLowerCase()})</p> :
                        <></>
                    }
                    <h4>{details.addresses[0].line1.toLowerCase()}, {details.addresses[0].city.toLowerCase()}, {details.addresses[0].stateCode.toLowerCase()} {details.addresses[0].postalCode}</h4>
                    <p>{details.description.toLowerCase()}</p>
                </div>
                <IconContext.Provider value={{ color: 'rgba(225,185,152,1)', size: '25px' }}>
                    <AccordionSection>
                        <Container>
                            <Wrap onClick={this.toggleContact}>
                                <h3>contact information</h3>
                                <span>{this.state.clickedContact ? <BsIcons.BsChevronDoubleUp /> : <BsIcons.BsChevronDoubleDown />}</span>
                            </Wrap>
                            {this.state.clickedContact ? (
                                <Dropdown>
                                    {details.contacts.emailAddresses.map((email) => {
                                        return (
                                            <p>email : {email.emailAddress}</p>
                                        )
                                    })}
                                    {details.contacts.phoneNumbers.map((phone) => {
                                        return (
                                            <p>phone number ({phone.type.toLowerCase()}) : {phone.phoneNumber} {phone.extension}</p>
                                        )
                                    })}
                                </Dropdown>
                            ) : <></>}
                            <Wrap onClick={this.toggleDirections}>
                                <h3>directions</h3>
                                <span>{this.state.clickedDirections ? <BsIcons.BsChevronDoubleUp /> : <BsIcons.BsChevronDoubleDown />}</span>
                            </Wrap>
                            {this.state.clickedDirections ? (
                                <Dropdown>
                                    <p>{details.directionsInfo.toLowerCase()}</p>
                                    <a href={details.directionsUrl} target="_blank" rel="noreferrer"><p className="directions-url">get more info about directions here</p></a>
                                </Dropdown>
                            ) : <></>}
                            <Wrap onClick={this.toggleFees}>
                                <h3>entrance fees</h3>
                                <span>{this.state.clickedFees ? <BsIcons.BsChevronDoubleUp /> : <BsIcons.BsChevronDoubleDown />}</span>
                            </Wrap>
                            {this.state.clickedFees ? (
                                <Dropdown>
                                    {details.entranceFees.map((fee) => {
                                        return (
                                            <div>
                                                <p className="fee">{fee.title.toLowerCase()}: ${fee.cost}</p>
                                                <p className="fee-description">{fee.description.toLowerCase()}</p>
                                            </div>
                                        )
                                    })}
                                    {details.entrancePasses.map((pass) => {
                                        return (
                                            <div>
                                                <p className="fee">{pass.title.toLowerCase()}: ${pass.cost}</p>
                                                <p className="fee-description">{pass.description.toLowerCase()}</p>
                                            </div>
                                        )
                                    })}
                                </Dropdown>
                            ) : <></>}
                            <Wrap onClick={this.toggleHours}>
                                <h3>hours of operation</h3>
                                <span>{this.state.clickedHours ? <BsIcons.BsChevronDoubleUp /> : <BsIcons.BsChevronDoubleDown />}</span>
                            </Wrap>
                            {this.state.clickedHours ? (
                                <Dropdown>
                                    {details.operatingHours.map((hr) => {
                                        return (
                                            <div>
                                                <p>{hr.description.toLowerCase()}</p>
                                                <ul>
                                                    <li>sunday : {hr.standardHours.sunday.toLowerCase()}</li>
                                                    <li>monday : {hr.standardHours.monday.toLowerCase()}</li>
                                                    <li>tuesday : {hr.standardHours.tuesday.toLowerCase()}</li>
                                                    <li>wednesday : {hr.standardHours.wednesday.toLowerCase()}</li>
                                                    <li>thursday : {hr.standardHours.thursday.toLowerCase()}</li>
                                                    <li>friday : {hr.standardHours.friday.toLowerCase()}</li>
                                                    <li>saturday : {hr.standardHours.saturday.toLowerCase()}</li>
                                                </ul>
                                            </div>
                                        )
                                    })}
                                </Dropdown>
                            ) : <></>}
                            <Wrap onClick={this.toggleWeather}>
                                <h3>weather</h3>
                                <span>{this.state.clickedWeather ? <BsIcons.BsChevronDoubleUp /> : <BsIcons.BsChevronDoubleDown />}</span>
                            </Wrap>
                            {this.state.clickedWeather ? (
                                <Dropdown>
                                    <p>{details.weatherInfo.toLowerCase()}</p>
                                </Dropdown>
                            ) : <></>}
                            <Wrap onClick={this.toggleActivities}>
                                <h3>activities to do</h3>
                                <span>{this.state.clickedActivities ? <BsIcons.BsChevronDoubleUp /> : <BsIcons.BsChevronDoubleDown />}</span>
                            </Wrap>
                            {this.state.clickedActivities ? (
                                <Dropdown>
                                    {details.activities.map((activity) => {
                                        return (
                                            <p>{activity.name.toLowerCase()}</p>
                                        )
                                    })}
                                </Dropdown>
                            ) : <></>}
                        </Container>
                    </AccordionSection>
                </IconContext.Provider>
            </Wrapper>
        )
    }

    toggleActivities = () => {
        this.setState({
            clickedActivities: !this.state.clickedActivities,
        })
    }
    toggleContact = () => {
        this.setState({
            clickedContact: !this.state.clickedContact,
        })
    }
    toggleDirections = () => {
        this.setState({
            clickedDirections: !this.state.clickedDirections,
        })
    }
    toggleFees = () => {
        this.setState({
            clickedFees: !this.state.clickedFees,
        })
    }
    toggleHours = () => {
        this.setState({
            clickedHours: !this.state.clickedHours,
        })
    }
    toggleWeather = () => {
        this.setState({
            clickedWeather: !this.state.clickedWeather,
        })
    }
}