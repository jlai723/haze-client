import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    font-family: Montserrat, sans-serif;
    padding-top: 2em;
    margin: 0;
    padding: 0;
    max-width: 100%;

    h2 {
        font-size: 4em;
        font-weight: 900;
        color: rgba(107,129,117,1);
        margin: 0;
        text-align: left;
    }

    form {
        display: flex;
        flex-direction: column;
        width: 50vw;
    }

    label {
        font-weight: 600;
        color: rgba(107,129,117,1);
        text-align: left;
        padding-top: 1em;
    }

    input {
        border: none;
        border-bottom: 0.25em solid rgba(107,129,117,1);
        background: none;
        padding-top: 1em;
        padding-bottom: 1em;
    }

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

    select {
        font-family: Montserrat, sans-serif;
        font-size: 0.75em;
        font-weight: 500;
        color: rgba(107,129,117,1);
        background: none;
        border: 0.25em solid rgba(107,129,117,1);
        border-radius: 0.75rem;
        height: 2.5em;
        margin-top: 1em;
    }
`;