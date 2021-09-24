import React, { Component } from 'react';

import { Background, ModalWrapper, ModalContent, CloseModalBtn } from './TripCreateEdit.styles';

type TripEditProps = {
    tripToUpdate: number,
    updateOff(): void,
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
    showEditModal: boolean,
    toggleEditModal(): void,
    fetchTrips(): void,
};
type TripEditState = {};

export class TripEdit extends Component<TripEditProps, TripEditState> {
    myRef: React.RefObject<HTMLDivElement>;
    constructor(props: TripEditProps) {
        super(props);
        this.myRef = React.createRef();
    }

    handleSubmitEdit = (e: React.FormEvent) => {
        e.preventDefault();
        fetch(`http://localhost:3000/trip/update/${this.props.tripToUpdate}`, {
            method: 'PUT',
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
        }).then(res => {
            this.props.updateOff();
            this.props.fetchTrips();
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
        return (
            <>
                {this.props.showEditModal ? (
                    <Background ref={this.myRef} onClick={this.closeModal}>
                        <ModalWrapper>
                            <ModalContent>
                                <h3>edit your trip</h3>
                                <form onSubmit={this.handleSubmitEdit}>
                                    <label>edit name: </label>
                                    <input required onChange={(e) => this.props.setName(e.target.value)}></input>
                                    <label>edit start date: </label>
                                    <input type="date" onChange={(e) => this.props.setSDate(e.target.value)}></input>
                                    <label>edit end date: </label>
                                    <input type="date" onChange={(e) => this.props.setEDate(e.target.value)}></input>
                                    {/* <label>upload an image: </label>
                    <input></input> */}
                                    <label>edit notes: </label>
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