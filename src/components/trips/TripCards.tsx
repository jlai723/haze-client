import React, { Component } from 'react';

type TripCardsProps = {
    sessionToken: string | null,
}

export class TripCards extends Component <TripCardsProps, {}> {
    constructor(props: TripCardsProps) {
        super(props);
    }
    
    render(){
        return(
            <div>
                These are my beautiful cards!
            </div>
        )
    }
}