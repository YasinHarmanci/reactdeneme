import React, {Component} from 'react';

class Footer extends Component {
    render() {
        return (
            <footer className="footer-wrapper">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="footer-copyright">
                                <p>2022 @<a href="#">GDEXA</a>
                                </p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="footer-menu text-right">
                                <ul>
                                    <li>
                                        <a href="#">About</a>
                                    </li>
                                    <li>
                                        <a href="#">Team</a>
                                    </li>
                                    <li>
                                        <a href="#">Contact</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;