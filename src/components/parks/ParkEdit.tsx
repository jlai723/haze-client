import React, { Component } from 'react';

import { Background, ModalWrapper, ModalContent, CloseModalBtn } from '../trips/TripCreateEdit.styles';

type ParkEditProps = {
    tripId: number,
    updateOff(): void,
    token: string | null,
    name: string,
    address: string,
    startDate: string,
    endDate: string,
    image: string,
    notes: string,
    parkId: number,
    setName(newName: string): void,
    setAddress(newAddress: string): void,
    setSDate(newSDate: string): void,
    setEDate(newEDate: string): void,
    setImage(newImage: string): void,
    setNotes(newNotes: string): void,
    showEditModal: boolean,
    toggleEditModal(): void,
    fetchOneTrip(): void,
}

export class ParkEdit extends Component <ParkEditProps, {}> {
    myRef: React.RefObject<HTMLDivElement>;
    constructor(props: ParkEditProps) {
        super(props);
        this.myRef = React.createRef();
    }

    submitParkEdit = (e: React.FormEvent) => {
        e.preventDefault();
        fetch(`http://localhost:3000/park/${this.props.tripId}/update/${this.props.parkId}`, {
            method: 'PUT',
            body: JSON.stringify({
                park: {
                    parkName: this.props.name,
                    parkAddress: this.props.address,
                    parkImage: this.props.image,
                    parkStartDate: this.props.startDate,
                    parkEndDate: this.props.endDate,
                    parkNotes: this.props.notes,
                }
            }),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${this.props.token}`,
            })
        }).then(res => {
            this.props.updateOff();
            this.props.fetchOneTrip();
        })
    }

    closeModal = (e: React.FormEvent) => {
        if (this.myRef.current === e.target) {
            this.props.toggleEditModal();
        }
    }

    cancelEdit = () => {
        this.props.toggleEditModal();
        this.props.updateOff();
    }
    
    render() {
        return(
            <>
                {this.props.showEditModal ? (
                    <Background ref={this.myRef} onClick={this.closeModal}>
                        <ModalWrapper>
                            <ModalContent>
                                <h3>edit your trip</h3>
                                <form onSubmit={this.submitParkEdit}>
                                    <label>edit name: </label>
                                    <input onChange={(e) => this.props.setName(e.target.value)}></input>
                                    <label>edit address: </label>
                                    <input onChange={(e) => this.props.setAddress(e.target.value)}></input>
                                    <label>edit start date: </label>
                                    <input type="date" onChange={(e) => this.props.setSDate(e.target.value)}></input>
                                    <label>edit end date: </label>
                                    <input type="date" onChange={(e) => this.props.setEDate(e.target.value)}></input>
                                    <label>edit notes: </label>
                                    <input onChange={(e) => this.props.setNotes(e.target.value)}></input>
                                    <button type="submit">edit</button>
                                </form>
                            </ModalContent>
                            <CloseModalBtn aria-label="Close Modal" onClick={this.cancelEdit} />
                        </ModalWrapper>
                    </Background>
                )
                    : null
                }
            </>
        )
    }
}
