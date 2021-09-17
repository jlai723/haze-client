import styled from 'styled-components';
import { MdClose } from 'react-icons/md';

export const Background = styled.div`
    width: 100vw;
    height: 100vh;
    background: rgba(0,0,0,0.8);
    /* position: fixed; */
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 100;
    margin: 0;
    padding: 0;
`

export const ModalWrapper = styled.div`
    width: 55vw;
    height: 75vh;
    box-shadow: 0px 5px 16px rgba(0,0,0,0.2);
    background: #fff;
    color: #000;
    display: grid;
    grid-template-columns: 1fr 1fr;
    position: relative;
    z-index: 10;
    border-radius: 1rem;
`

export const ModalContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    line-height: 1.8;
    color: #141414;

    form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    }
    
    p {
        margin-bottom: 1rem;
    }

    button {
        padding: 10px 24px;
        background: #141414;
        color: #fff;
        border: none;
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