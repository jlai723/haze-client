import styled from 'styled-components';

export const Wrapper = styled.div`
    margin: 0;
    padding: 0;
    position: fixed;
    bottom: 0;
    z-index: 1;
    min-width: 100vw;
    max-width: 100%;
    height: 5em;
    font-family: Montserrat, sans-serif;
    background-color: rgba(199,211,175,1);

    button {
        height: 2em;
        width: 4em;
        margin-top: 1em;
        border-radius: 1rem;
        border: solid 0.2em whitesmoke;
        background: rgba(107,129,117,1);
        color: whitesmoke;
        font-size: 1.1em;
        font-family: Montserrat, sans-serif;
        font-weight: 600;
        cursor: pointer;
    }

    a {
        font-size: 0.8em;
        font-weight: 600;
        color: rgba(225,185,152,1);
        text-decoration: underline;
        margin-top: 1.5em;
        cursor: pointer;
        padding-bottom: 2em;
    }
`;