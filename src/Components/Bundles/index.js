import React, { Component } from 'react';
import "./bundles.css";
class Bundle extends Component {
    render() {
        return (
            <div className="wrapper bundles">
                <section>
                    <div>
                        <img className="banner-image" alt="" src="https://via.placeholder.com/1200x400" />
                    </div>
                </section>
            </div>
        );
    }
}

export default Bundle;