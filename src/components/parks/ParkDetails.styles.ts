import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    color: rgba(107,129,117,1);
    margin-bottom: 30rem;

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
        height: 6em;
        margin-bottom: 1em;
        margin-left: 1em;
    }
    .park-info {
        margin-left: 1.5em;
        margin-right: 1.5em;
    }
    h2 {
        margin: 0.5em 0;
    }
    h4 {
        margin: 0.75em 0;
    }
    p {
        margin: 0.5em 0;
    }
`
export const ParkDetailsImg = styled.img`
    min-width: 100vw;
    max-width: 100vw;
    min-height: 40vh;
    max-height: 40vh;
    object-fit: cover;
`

export const AccordionSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    height: 100vh;
    /* background: rgba(107,129,117) */
`
export const Container = styled.div`
    min-width: 100vw;
    max-width: 100vw;
    position: absolute;
    top: 30%;
    box-shadow: 2px 10px 35px 1px rgba(153,153,153,0.3);
`
export const Wrap = styled.div`
    background: rgba(67,48,76,1);
    color: whitesmoke;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1.5em;
    text-align: center;
    cursor: pointer;
    border-bottom: solid 1px rgba(225,185,152,1);

    h1 {
        padding: 2rem;
        font-size: 2rem;
    }
`
export const Dropdown = styled.div`
    background: rgba(145,162,80,1);
    /* min-width: 100%;
    max-width: 100%; */
    height: 100%;
    /* max-height: 100vh; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding-bottom: 0.75em;

    p {
        margin: 0 2em;
        padding-top: 0.75em;
        color: whitesmoke;
        font-weight: 400;
    }
    a {
        text-decoration: none;
    }
    .directions-url {
        color: rgba(225,185,152,1);
        font-weight: 600;
    }
    .fee {
        font-weight: 600;
    }
    .fee-description {
        font-weight: 300;
        font-size: 0.75em;
        margin: 0 2.75em;
        padding-top: 0;
    }
    ul {
        list-style: none;
        padding-left: 2em;
        color: white;
    }
`
export const WhiteSpace = styled.div`
    width: 100vw;
    height: 50px;
`