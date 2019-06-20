import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { gtmEvent} from "../../Utils/utils";

class Navigation extends Component {
    render() {
        return (
        <nav className="nav-section">
            <Link 
            className={`nav-link ${this.props.selectedClocks}`}
            to="/"
            onClick={() => gtmEvent("Navigation", "Click", "Navigate to Clocks")}
            >
            CLOCKS
            </Link>
            /
            <Link
            className={`nav-link ${this.props.selectedBundles}`}  
            to="/bundles"
            onClick={() => gtmEvent("Navigation", "Click", "Navigate to Bundles")}
            >
            BUNDLES
            </Link>
        </nav>
        )
    }
}

export default Navigation;
