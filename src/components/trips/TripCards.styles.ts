import styled from 'styled-components';

export const Wrapper = styled.div`
    margin-top: 13vh;
    margin-bottom: 15vh;

    button {
        font-family: Montserrat, sans-serif;
        cursor: pointer;
    }
`

export const MapWrapper = styled.div`
    margin: 0;
    padding: 0;

    .admin {
        background-color: rgba(225,185,152,1);
        color: whitesmoke;
        font-size: 1em;
        font-weight: 700;
        border: none;
        border-radius: 0.5rem;
        width: 8em;
        height: 2em;
        margin-left: 0.5em;
        margin-bottom: 0.5em;
    }
    button.addTrip {
        display: flex;
        float: right;
        margin-bottom: 0.5em;
        margin-right: 0.25em;
        background-color: transparent;
        border: none;
    }
`

export const CardWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    @media (max-width: 800px) {
        grid-template-columns: 1fr 1fr;
    }
    @media (max-width: 400px) {
        grid-template-columns: 1fr;
    }
    width: 100vw;
    margin: 0;
    padding: 0;
`

export const CardItemWrapper = styled.div`
    color: whitesmoke;
    background-color: rgba(145,162,80,1);
    
    :nth-child(2) {
        background-color: rgba(107,129,117,1);
    }
    :nth-child(3) {
        background-color: rgba(67,48,76,1);
    }
    :nth-child(4) {
        background-color: rgba(225,185,152,1);
    }
    
    h3 {
        margin: 0.5em 0.5em;
    }
    p {
        margin: 0.5em 0.5em;
    }
    p.park-name {
        font-size: 1.1em;
        font-weight: 700;
    }
    div.btns {
        display: flex;
        justify-content: flex-end;
        margin-bottom: 0.5em;
    }
    button.card-btn {
        margin-right: 0.5em;
        height: 2em;
        background-color: transparent;
        border: 0.25em solid whitesmoke;
        border-radius: 0.3rem;
        color: whitesmoke;
        cursor: pointer;
    }
`