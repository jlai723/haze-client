import styled from 'styled-components';

export const Wrapper = styled.div`
    height: 100vh;
    width: 100vw;
    color: whitesmoke;

    button.nav-back {
        background-color: rgba(225,185,152,1);
        border: none;
        border-radius: 0.5rem;
        display: flex;
        float: left;
        margin-top: 0.1em;
        margin-left: 0.6em;
        width: 3em;
        height: 3em;
        cursor: pointer;
    }
    button.nav-add {
        display: flex;
        float: right;
        margin-bottom: 0.5em;
        margin-right: 0.25em;
        background-color: transparent;
        border: none;
        cursor: pointer;
    }
    img {
        min-width: 100vw;
        max-height: 40vh;
    }
    .image-trip-overlap {
        position: relative;
        min-height: 40vh;
    }
    .trip-overlap {
        z-index: 2;
        position: absolute;
        top: 27vh;
    }
    .trip-notes {
        margin: 0.25em 1em;
    }
    h1.trip-notes {
        margin: 0.25em 0.5em;
    }
    h3.trip-notes {
        margin: 0.5em 0.8em;
    }
`