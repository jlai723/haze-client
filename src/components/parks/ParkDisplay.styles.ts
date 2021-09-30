import styled from 'styled-components';

export const CardWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    @media (max-width: 800px) {
        grid-template-columns: 1fr 1fr;
    }
    @media (max-width: 400px) {
        grid-template-columns: 1fr;
    }
    grid-template-rows: 40vh;
    grid-gap: 0;
    max-width: 100vw;
    margin: 0;
    margin-left: 1em;
    padding: 0;
`

export const CardItemWrapper = styled.div`
    color: whitesmoke;
    max-width: 100vw;
    position: relative;
    
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
    div.image {
        object-fit: cover;
    }
    img {
        min-width: 30vw;
        max-width: 30vw;
        @media (max-width: 800px) {
        min-width: 45vw;
        max-width: 45vw;
        }
        @media (max-width: 400px) {
        min-width: 90vw;
        max-width: 90vw;
        }
        min-height: 40vh;
        max-height: 40vh;
        object-fit: cover;
        overflow: hidden;
    }
    div.park-title {
        max-width: 29vw;
        max-height: 40vh;
    }
    div.park-search-btns {
        position: absolute;
        bottom: 0.75em;
        right: 1.25em;
    }
    h3 {
        margin: 0.5em 0.5em;
    }
    div.btns {
        display: flex;
        justify-content: flex-end;
        margin-bottom: 0.5em;
    }
    button {
        margin-right: 0.5em;
        height: 2em;
        background-color: transparent;
        border: 0.25em solid whitesmoke;
        border-radius: 0.3rem;
        color: whitesmoke;
        cursor: pointer;
    }
`