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
    height: 5em;
    font-family: Montserrat, sans-serif;
    background-color: rgba(199,211,175,1);

    button {
        margin-left: 0.25em;
        z-index: 2;
        position: absolute;
        top: 0px;
        border: none;
        background-color: transparent;
        color: whitesmoke;
        font-size: 4em;
        font-family: Montserrat, sans-serif;
        font-weight: 900;
        cursor: pointer;
    }
    `;

export const NavWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    z-index: 3;
    font-family: Montserrat, sans-serif;
    
    a {
        font-size: 1.15em;
        font-weight: 600;
        color: whitesmoke;
        text-decoration: none;
        cursor: pointer;
        margin-top: 1.3em;
        padding-right: 1em;
        z-index: 4
    }

`