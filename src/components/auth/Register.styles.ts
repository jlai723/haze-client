import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: Montserrat, sans-serif;
    padding-top: 10vh;
    padding-bottom: 15vh;
    margin: 0;
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
        font-size: 1.1em;
        color: rgba(107,129,117,1);
        text-align: left;
        padding-top: 1em;
    }

    input {
        border: none;
        border-bottom: 0.25em solid rgba(107,129,117,1);
        background: none;
        padding-top: 0.5em;
        padding-bottom: 0.5em;
        font-family: Montserrat, sans-serif;
        font-size: 0.8em;
        font-weight: 500;
        color: rgba(107,129,117,1);
    }
    input:focus {
        outline: none;
    }
    input.password {
        padding-top: 0;
    }
    select:focus {
        outline: none;
    }

    button.submit {
        height: 2.25em;
        width: 4.25em;
        margin-top: 1em;
        align-self: flex-end;
        border-radius: 0.75rem;
        border: solid 0.2em whitesmoke;
        background: rgba(107,129,117,1);
        color: whitesmoke;
        font-size: 1.1em;
        font-family: Montserrat, sans-serif;
        font-weight: 600;
        cursor: pointer;
    }
    button.eye {
        background-color: transparent;
        border: none;
        color: rgba(107,129,117,1);
        display: flex;
        justify-content: flex-end;
        cursor: pointer;
    }
    .eye:focus {
        outline: none;
        box-shadow: none;
    }

    a {
        font-size: 0.9em;
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
    p {
        width: 100vw;
        color: red;
        font-weight: 700;
    }
`;