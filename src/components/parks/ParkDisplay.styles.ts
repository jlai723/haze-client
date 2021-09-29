import styled from 'styled-components';

export const Wrapper = styled.div`
    max-width: 100vw;

    div.park-title {
        color: whitesmoke;
        position: absolute;
        margin-left: 0.5em;
        margin-top: 0.5em;
    }
    h2 {
        margin: 0;
    }
    h5 {
        margin: 0;
    }

    img {
        min-width: 100vw;
        max-height: 40vh;
    }

    div.park-search-btns {
        position: relative;
        bottom: 2.5em;
        left: 14em;
    }
    button {
        margin-bottom: 0.5em;
        margin-right: 0.5em;
        height: 2em;
        background-color: rgba(107,129,117,1);
        border: 0.25em solid whitesmoke;
        border-radius: 0.3rem;
        color: whitesmoke;
        cursor: pointer;
    }
`