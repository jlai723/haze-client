import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;

    button {
        color: whitesmoke;
        font-size: 1em;
        font-weight: 700;
        border: none;
        border-radius: 0.5rem;
        cursor: pointer;
    }
    button.nav-back {
        background-color: rgba(225,185,152,1);
        width: 4em;
        height: 2em;
        margin-left: 0.5em;
        margin-bottom: 0.5em;
    }
    img {
        min-width: 100vw;
        max-width: 100vw;
        min-height: 40vh;
        max-height: 40vh;
        object-fit: cover;
    }

    div.park-info {
        display: flex;
        flex-direction: column;
        color: rgba(107,129,117,1);
        margin-left: 1em;
        margin-right: 1em;
    }
    p {
        font-size: 1.15em;
        font-weight: 600;
        margin: 0.5em 0;
    }
    form {
        display: flex;
        flex-direction: column;
    }
    label {
        color: rgba(107,129,117,1);
        font-size: 1.15em;
        font-weight: 600;
        margin-bottom: 1em;
    }
    input {
        width: 80vw;
        border: none;
        border-bottom: 0.25em solid rgba(107,129,117,1);
        background: none;
        margin-bottom: 1em;
        font-family: Montserrat, sans-serif;
        font-size: 1em;
        color: rgba(107,129,117,1);
    }
    input:focus {
        outline: none;
    }
    button.select-trip {
        background-color: rgba(107,129,117,1);
        width: 7em;
        height: 2em;
    }
    button.cancel {
        background-color: rgba(107,129,117,1);
        width: 5em;
        height: 2em;
        margin-top: 1em;
    }
`