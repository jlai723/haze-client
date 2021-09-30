import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Wrapper } from './Header.styles';

type HeaderProps = {
    logout(): void,
    token: string | null,
}
type HeaderState = {
    sidebar: boolean
}

export class Header extends Component<HeaderProps, HeaderState> {
    constructor(props: HeaderProps) {
        super(props);
        this.state = {
            sidebar: false,
        }
    }

    showSidebar = () => {
        this.setState({ sidebar: !this.state.sidebar })
    }

    render() {
        let navBtn = { color: "whitesmoke" }
        return (
            <div>
                <Wrapper>
                    <button className="logo">h</button>
                    <div className="navbar">
                        <Link to="#" className="menu-bars">
                            <FaIcons.FaBars style={navBtn} onClick={this.showSidebar} />
                        </Link>
                    </div>
                    <nav className={this.state.sidebar ? 'nav-menu-active' : 'nav-menu'}>
                        <ul className='nav-menu-items' onClick={this.showSidebar}>
                            <li className="navbar-toggle">
                                <Link to="#" className="menu-bars">
                                    <AiIcons.AiOutlineClose style={navBtn} />
                                </Link>
                            </li>
                            <li className="nav-text">
                                <Link to="/">
                                    <span>home</span>
                                </Link>
                            </li>
                            <li className="nav-text">
                                <Link to="/trips">
                                    <span onClick={() => window.location.reload()}>my trips</span>
                                </Link>
                            </li>
                            <li className="nav-text">
                                <Link to="/admin">
                                    <span>admin dashboard</span>
                                </Link>
                            </li>
                            <li className="nav-text">
                                <a onClick={this.props.logout}>logout</a>
                            </li>
                        </ul>
                    </nav>
                </Wrapper>
            </div>
        )
    }
}