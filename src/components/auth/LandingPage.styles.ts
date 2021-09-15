import styled from 'styled-components';

import img from '../assets/background-1.jpg';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: Montserrat, sans-serif;
    padding-top: 2em;
    background-color: rgba(67,48,76,1);
    background-repeat: no-repeat;
    background-image: url(${img});
    background-size: cover;
    background-position: center;
    min-height: 100vh;
    min-width: 100vw;
    padding: 0;

    h1 {
        font-size: 6em;
        font-weight: 900;
        letter-spacing: 0.1em;
        color: whitesmoke;
        margin: 0;
    }

    h4 {
        font-size: 1em;
        font-weight: 600;
        letter-spacing: 1.05em;
        color: whitesmoke;
        margin: 0;
    }

    button {
        height: 2em;
        width: 4em;
        border-radius: 0.5rem;
        border: solid 0.2em whitesmoke;
        background: rgba(225,185,152,1);
        color: whitesmoke;
        font-size: 1.1em;
        font-family: Montserrat, sans-serif;
        font-weight: 600;
    }

    p {
        font-size: 0.7em;
        color: whitesmoke;
        text-decoration: underline;
        padding-top: 0.5em;
    }
`;