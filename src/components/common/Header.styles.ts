import styled from 'styled-components';

export const Wrapper = styled.div`
    margin: 0;
    padding: 0;
    position: fixed;
    top: 0;
    z-index: 1;
    min-width: 100vw;
    max-width: 100%;
    height: 5em;
    font-family: Montserrat, sans-serif;
    background-color: rgba(199,211,175,1);

    /* div.btn-links {
        position: absolute;
    } */

    button.logo {
        margin-left: 0.25em;
        z-index: 2;
        position: absolute;
        top: 0px;
        border: none;
        background-color: transparent;
        color: whitesmoke;
        font-size: 4em;
        font-family: Montserrat, sans-serif;
        font-weight: 900;
        cursor: pointer;
    }
    /* button.links {
        background-color: transparent;
        border: none;
        color: whitesmoke;
        font-family: Montserrat, sans-serif;
        font-size: 1.5em;
        font-weight: 600;
    } */

    div.navbar {
        background-color: rgba(199,211,175,1);
        height: 80px;
        display: flex;
        justify-content: end;
        align-items: center;
        z-index: 10;
    }
    .menu-bars {
        margin-right: 0.75rem;
        margin-top: 0.45rem;
        font-size: 2.5rem;
        background-color: none;
    }
    .nav-menu {
        background-color: rgba(199,211,175,1);
        width: 250px;
        height: 100vh;
        display: flex;
        justify-content: center;
        position: fixed;
        top: 0;
        right: -100%;
        transition: 850ms;
        z-index: 10;
    }
    .nav-menu-active {
        background-color: rgba(199,211,175,1);
        width: 250px;
        height: 100vh;
        display: flex;
        justify-content: center;
        position: fixed;
        top: 0;
        right: 0;
        transition: 350ms;
        z-index: 10;
    }
    .nav-text {
        display: flex;
        justify-content: end;
        align-items: center;
        padding: 8px 0px 8px 16px;
        list-style: none;
        height: 60px;
    }
    .nav-text a {
        text-decoration: none;
        color: whitesmoke;
        cursor: pointer;
        font-size: 18px;
        font-weight: 600;
        width: 95%;
        height: 100%;
        display: flex;
        align-items: center;
        padding: 0 16px;
        border-radius: 4px;
    }
    .nav-text a:hover {
        color: rgba(67,48,76,1);
    }
    .nav-menu-items {
        width: 100%;
        padding-left: 10px;
    }
    .navbar-toggle {
        background-color: rgba(199,211,175,1);
        width: 100%;
        height: 80px;
        display: flex;
        justify-content: end;
        align-items: center;
    }
    `

export const NavWrapper = styled.div`
    font-family: Montserrat, sans-serif;
    
    a {
        font-size: 1.15em;
        font-weight: 600;
        color: whitesmoke;
        text-decoration: none;
        cursor: pointer;
        margin-top: 1.3em;
        padding-right: 1em;
        z-index: 2;
    }
    
`