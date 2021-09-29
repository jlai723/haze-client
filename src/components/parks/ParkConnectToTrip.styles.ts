import styled from 'styled-components';

export const SelectTripWrapper = styled.div`
    display: flex;
    flex-direction: column;

    button.add-to-trip {
        background-color: rgba(107,129,117,1);
        width: 7em;
        height: 2em;
        margin-top: 0.5em;
    }
    button.select-trip {
        text-align: left;
        background-color: transparent;
        color: rgba(107,129,117,1);
        width: 10em;
        height: 2em;
        margin-bottom: 0.5em;
    }
    button.select-trip:focus {
        color: whitesmoke;
        background-color: rgba(225,185,152,1);
    }
`