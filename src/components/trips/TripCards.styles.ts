import styled from 'styled-components';

export const Wrapper = styled.div`
    margin-top: 6vh;
    margin-bottom: 15vh;

    button {
        font-family: Montserrat, sans-serif;
    }
`

export const MapWrapper = styled.div`
    margin: 0;
    padding: 0;

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
    background-color: rgba(145,162,80,1);
    color: whitesmoke;
    display: inline-block;
    width: 100vw;
    margin: 0;
    padding: 0;

    :nth-child(2) {
        background-color: rgba(107,129,117,1);
    }
    :nth-child(3) {
        background-color: rgba(67,48,76,1);
    }

    h3 {
        margin: 0.5em 0.5em;
    }
    p {
        margin-left: 0.5em;
        margin-bottom: 0.25em;
    }
    button {
        display: flex;
        float: right;
        margin-bottom: 0.5em;
        margin-right: 0.5em;
        height: 2em;
        background-color: transparent;
        border: 0.25em solid whitesmoke;
        border-radius: 0.3rem;
        color: whitesmoke;
    }
`