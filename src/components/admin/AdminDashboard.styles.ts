import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 90vw;

    button {
        cursor: pointer;
        background-color: rgba(225,185,152,1);
        color: whitesmoke;
        font-size: 1em;
        font-weight: 700;
        border: none;
        border-radius: 0.5rem;
        width: 4em;
        height: 2em;
        margin-left: 0.5em;
        margin-bottom: 0.5em;
    }
    .delete-btn {
        width: 8em;
        height: 4em;
    }
`

export const TableWrapper = styled.table`
    margin: 1em;
    width: 96vw;
    border-collapse: collapse;
    
    th, td {
        padding: 1em;
        text-align: left;
        color: rgba(67,48,76,1);
        border-bottom: solid 1px rgba(107,129,117,1);
    }
    tr:nth-of-type(odd) {
        background-color: rgba(199,211,175,0.4);
    }

    @media(max-width: 800px) {
        table {
            width: 90vw;
        }
        table, th, td, tr {
            display: block;
        }
        th {
            position: absolute;
            top: -9999px;
            left: -9999px;
        }
        td {
            border: none;
            border-bottom: solid 1px rgba(107,129,117,1);
            position: relative;
            padding-left: 50%;
        }
        td:before {
            position: absolute;
            top: 6px;
            left: 6px;
            width: 45%;
            padding-right: 10px;
            white-space: nowrap;
        }
        td:nth-of-type(1):before { content: "user id"; font-weight: 700; }
        td:nth-of-type(2):before { content: "first name"; font-weight: 700; }
        td:nth-of-type(3):before { content: "last name"; font-weight: 700; }
        td:nth-of-type(4):before { content: "email"; font-weight: 700; }
        td:nth-of-type(5):before { content: "username"; font-weight: 700; }
        td:nth-of-type(6):before { content: "role"; font-weight: 700; }
        td:nth-of-type(7):before { content: ""; font-weight: 700; }
    }
`