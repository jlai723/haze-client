import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    margin: 0;
    padding: 0;
    position: fixed;
    top: 0;
    z-index: 1;
    min-width: 100vw;
    max-width: 100%;
    height: 3.5em;
    font-family: Montserrat, sans-serif;
    background-color: rgba(199,211,175,1);

    button {
        margin-left: 0.25em;
        z-index: 2;
        border: none;
        background-color: transparent;
        color: whitesmoke;
        font-size: 3em;
        font-family: Montserrat, sans-serif;
        font-weight: 900;
        cursor: pointer;
    }

    a {
        font-size: 1em;
        font-weight: 600;
        color: whitesmoke;
        text-decoration: underline;
        margin-top: 1.5em;
        cursor: pointer;
        padding-bottom: 2em;
    }
`;