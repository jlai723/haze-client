import React, { Component } from 'react';

import { Background, ModalWrapper, ModalContent, CloseModalBtn } from './TripCreate.styles';
import APIURL from '../../helpers/environment';

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
    showAddModal: boolean,
    toggleAddModal(): void,
    fetchTrips(): void,
}

export class TripCreate extends Component<TripCreateProps, {}> {
    myRef: React.RefObject<HTMLDivElement>;
    constructor(props: TripCreateProps) {
        super(props);
        this.myRef = React.createRef();
    }

    handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        fetch(`${APIURL}/trip/create`, {
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
            .then(() => {
                this.props.fetchTrips();
                this.props.toggleAddModal();
            })
    }

    closeModal = (e: React.FormEvent) => {
        if (this.myRef.current === e.target) {
            this.props.toggleAddModal();
        }
    }

    render() {
        return (
            <>
                {this.props.showAddModal ? (
                    <Background ref={this.myRef} onClick={this.closeModal}>
                        <ModalWrapper>
                            <ModalContent>
                                <h3>create a trip</h3>
                                <form onSubmit={this.handleSubmit}>
                                    <label>name: </label>
                                    <input required onChange={(e) => this.props.setName(e.target.value)}></input>
                                    <label>start date: </label>
                                    <input type="date" onChange={(e) => this.props.setSDate(e.target.value)}></input>
                                    <label>end date: </label>
                                    <input type="date" onChange={(e) => this.props.setEDate(e.target.value)}></input>
                                    <label>notes: </label>
                                    <input onChange={(e) => this.props.setNotes(e.target.value)}></input>
                                    <button type="submit">add</button>
                                </form>
                            </ModalContent>
                            <CloseModalBtn aria-label="Close Modal" onClick={this.props.toggleAddModal} />
                        </ModalWrapper>
                    </Background>
                )
                    : null
                }
            </>
        )
    }
}