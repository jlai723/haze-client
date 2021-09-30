import styled from 'styled-components';
import { MdClose } from 'react-icons/md';

export const Background = styled.div`
    width: 100vw;
    height: 100vh;
    background: rgba(0,0,0,0.8);
    position: fixed;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 2;
    margin: 0;
    padding: 0;
`

export const ModalWrapper = styled.div`
    width: 300px;
    height: 60vh;
    box-shadow: 0px 5px 16px rgba(0,0,0,0.2);
    background: rgba(225,185,152,1);
    color: whitesmoke;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    z-index: 2;
    border-radius: 1rem;
`

export const ModalContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    line-height: 1.8;
    color: whitesmoke;

    h3 {
        margin: 0;
        font-size: 1.75em;
        font-weight: 800;
    }

    form {
        display: flex;
        flex-direction: column;
        /* justify-content: center;
        align-items: center; */
        text-align: left;
    }
    label {
        font-weight: 600;
    }
    input {
        margin-bottom: 0.5em;
        border: none;
        border-bottom: 0.2em solid whitesmoke;
        background: none;
    }
    input[type="date"] {
        color: whitesmoke;
        font-family: Montserrat, sans-serif;
    }
    input[type="date"]::-webkit-calendar-picker-indicator {
        cursor: pointer;
    }
    input[type="date"]::-webkit-inner-spin-button {
        background-color: green;
    }
    button {  
        height: 2em;
        width: 3.5em;
        background: whitesmoke;
        color: rgba(225,185,152,1);
        border: 0.15em solid rgba(225,185,152,1);
        border-radius: 0.25rem;
        font-family: Montserrat, sans-serif;
        font-weight: 600;
        cursor: pointer;
    }
`

export const CloseModalBtn = styled(MdClose)`
    cursor: pointer;
    position: absolute;
    top: 20px;
    right: 20px;
    width: 32px;
    height: 32px;
    padding: 0;
    z-index: 10;
`