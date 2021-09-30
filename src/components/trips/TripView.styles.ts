import styled from 'styled-components';

export const Wrapper = styled.div`
    /* height: 100vh;
    width: 100vw; */
    color: whitesmoke;

    button {
        cursor: pointer;
    }
    button.nav-back {
        background-color: rgba(225,185,152,1);
        color: whitesmoke;
        font-size: 1em;
        font-weight: 700;
        border: none;
        border-radius: 0.5rem;
        width: 4em;
        height: 2em;
        margin-left: 0.5em;
        margin-bottom: 0.5em;
    }
    button.nav-add {
        background-color: rgba(225,185,152,1);
        color: whitesmoke;
        font-size: 1em;
        font-weight: 700;
        border: none;
        border-radius: 0.5rem;
        width: 6em;
        height: 2em;
        float: right;
        margin-right: 0.5em;
    }
    img {
        min-width: 100vw;
        max-width: 100vw;
        min-height: 40vh;
        max-height: 40vh;
        object-fit: cover;
    }
    .image-trip-overlap {
        position: relative;
        min-height: 40vh;
    }
    .trip-overlap {
        position: absolute;
        top: 20vh;
    }
    .park-overlap {
        position: absolute;
        top: 20vh;
        margin-left: 1em;
    }
    .trip-notes {
        margin: 0.25em 1em;
    }
    .park-notes {
        color: rgba(107,129,117,1);
        font-size: 1em;
        font-weight: 600;
        margin-left: 1em;
    }
    h1.trip-notes {
        margin: 0.25em 0.5em;
    }
    h3.trip-notes {
        margin: 0.5em 0.8em;
    }
    div.park-btns {
        display: flex;
        justify-content: flex-end;
    }
    button {
        background-color: rgba(107,129,117,1);
        color: whitesmoke;
        font-size: 1em;
        font-weight: 700;
        border: none;
        border-radius: 0.3rem;
        height: 2em;
        margin-right: 0.5em;
    }
    .view-park-btn {
        width: 10em;
    }
    .edit-park-btn {
        width: 3em;
    }
    .delete-park-btn {
        width: 4em;
    }
`

export const ParkWrapper = styled.div`
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
`
