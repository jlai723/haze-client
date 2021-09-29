import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin: 1em 1em;

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
        margin-bottom: 2em;
    }
    button.explore {
        background-color: rgba(107,129,117,1);
        width: 5em;
        height: 2em;
    }
    form {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
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
`