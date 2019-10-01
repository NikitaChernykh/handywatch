import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "./header.scss";
class Header extends Component {
    render() {
        return (
            <header className="App-header">
                <div className="App-logo">
                <Link to="/">
                    <h1 class="header-logo">HANDY.WATCH</h1>
                </Link>
                </div>
            </header>
        );
    }
}

export default Header;