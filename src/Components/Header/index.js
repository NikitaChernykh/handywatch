import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "./header.scss";
class Header extends Component {
    render() {
        return (
            <header className="hw-header">
                <div >
                <Link to="/">
                    <h1 className="header-logo">HANDY.WATCH</h1>
                </Link>
                </div>
            </header>
        );
    }
}

export default Header;