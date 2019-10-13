import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { gtmEvent } from "../../Utils/utils";
import "./see-more.scss";

class SeeMore extends Component {
    render() {
        return (
            <section className="see-more">
                  <div>
                    <Link
                     to="/"
                     className="see-more-link"
                        onClick={() =>
                          gtmEvent(
                            "See more",
                            "Click",
                            "See more,back to home page"
                          )
                        }
                      >
                      SEE MORE
                    </Link>
                  </div>
            </section>
        );
    }
}

export default SeeMore;