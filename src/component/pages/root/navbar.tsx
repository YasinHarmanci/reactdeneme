import React, {Component} from 'react';
class Navbar extends Component {
    render() {
        return (
            <div>
                <div className="mobile-search"></div>
                <div className="mobile-author-actions"></div>
                <header className="header-top">
                    <nav className="navbar navbar-light">
                        <div className="navbar-left">
                            <a href="#dashboard" className="sidebar-toggle"><img className="svg" src="img/svg/bars.svg" alt=""/></a>
                            <a className="navbar-brand" href="#dashboard"><img src="img/Logo_white.png" alt="" /></a>
                        </div>
                        <div className="navbar-right">
                            <ul className="navbar-right__menu">
                                <li className="nav-search d-none">
                                    <a href="#nolink" className="search-toggle">
                                        <i className="la la-search"></i>
                                        <i className="la la-times"></i>
                                    </a>
                                    <form action="/" className="search-form-topMenu">
                                        <span className="search-icon" data-feather="search"/>
                                        <input className="form-control mr-sm-2 box-shadow-none" type="search" placeholder="search..." aria-label="Search"/>
                                    </form>
                                </li>
                                <li className="nav-message">
                                    <div className="dropdown-custom">
                                        <a href="#nolink;" className="nav-item-toggle">

                                        </a>
                                        <div className="dropdown-wrapper">
                                            <h2 className="dropdown-wrapper__title" >Messages <span
                                                className="badge-circle badge-success ml-1">0</span></h2>
                                            <ul>
                                                <li>
                                                    Empty
                                                </li>
                                            </ul>
                                            <a href="#nolink;" className="dropdown-wrapper__more">See All
                                                Message</a>
                                        </div>
                                    </div>
                                </li>
                                <li className="nav-notification">
                                    <div className="dropdown-custom">
                                        <a href="#nolink;" className="nav-item-toggle"></a>
                                        <div className="dropdown-wrapper">
                                            <h2 className="dropdown-wrapper__title">Notifications <span
                                                className="badge-circle badge-warning ml-1">0</span></h2>
                                            <ul>
                                                <li className="nav-notification__single nav-notification__single d-flex flex-wrap">
                                                    Empty
                                                </li>
                                            </ul>
                                            <a href="#nolink;" className="dropdown-wrapper__more">See all
                                                incoming activity</a>
                                        </div>
                                    </div>
                                </li>
                                <li className="nav-settings d-none">
                                    <div className="dropdown-custom">
                                        <a href="#nolink;" className="nav-item-toggle">
                                        </a>
                                        <div className="dropdown-wrapper dropdown-wrapper--large">
                                            <ul className="list-settings">
                                                <li className="d-flex">
                                                    <div className="mr-3"><img src="../../../public/img/mail.png" alt=""/></div>
                                                    <div className="flex-grow-1">
                                                        <h6>
                                                            <a href="#nolink">All Features</a>
                                                        </h6>
                                                        <p>Introducing Increment subscriptions</p>
                                                    </div>
                                                </li>
                                                <li className="d-flex">
                                                    <div className="mr-3"><img src="../../../public/img/color-palette.png" alt=""/></div>
                                                    <div className="flex-grow-1">
                                                        <h6>
                                                            <a href="#nolink">Themes</a>
                                                        </h6>
                                                        <p>Third party themes that are compatible</p>
                                                    </div>
                                                </li>
                                                <li className="d-flex">
                                                    <div className="mr-3"><img src="../../../public/img/home.png" alt=""/></div>
                                                    <div className="flex-grow-1">
                                                        <h6>
                                                            <a href="#nolink">Payments</a>
                                                        </h6>
                                                        <p>We handle billions of dollars</p>
                                                    </div>
                                                </li>
                                                <li className="d-flex">
                                                    <div className="mr-3"><img src="../../../public/img/video-camera.png" alt=""/></div>
                                                    <div className="flex-grow-1">
                                                        <h6>
                                                            <a href="#nolink;" className="stretched-link">Design Mockups</a>
                                                        </h6>
                                                        <p>Share planning visuals with clients</p>
                                                    </div>
                                                </li>
                                                <li className="d-flex">
                                                    <div className="mr-3"><img src="../../../public/img/document.png" alt=""/></div>
                                                    <div className="flex-grow-1">
                                                        <h6>
                                                            <a href="#nolink;" className="stretched-link">Content Planner</a>
                                                        </h6>
                                                        <p>Centralize content gethering and editing</p>
                                                    </div>
                                                </li>
                                                <li className="d-flex">
                                                    <div className="mr-3"><img src="../../../public/img/microphone.png" alt=""/></div>
                                                    <div className="flex-grow-1">
                                                        <h6>
                                                            <a href="#nolink;" className="stretched-link">Diagram
                                                                Maker</a>
                                                        </h6>
                                                        <p>Plan user flows & test scenarios</p>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                                <li className="nav-support d-none">
                                    <div className="dropdown-custom">
                                        <a href="#nolink">

                                        </a>
                                        <div className="dropdown-wrapper">
                                            <div className="list-group">
                                                <span>Documentation</span>
                                                <ul>
                                                    <li>
                                                        <a href="#nolink;">How to customize admin</a>
                                                    </li>
                                                    <li>
                                                        <a href="#nolink;">How to use</a>
                                                    </li>
                                                    <li>
                                                        <a href="#nolink;">The relation of vertical spacing</a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="list-group">
                                                <span>Payments</span>
                                                <ul>
                                                    <li>
                                                        <a href="#nolink;">How to customize admin</a>
                                                    </li>
                                                    <li>
                                                        <a href="#nolink;">How to use</a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="list-group">
                                                <span>Content Planner</span>
                                                <ul>
                                                    <li>
                                                        <a href="#nolink;">How to customize admin</a>
                                                    </li>
                                                    <li>
                                                        <a href="#nolink;">How to use</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="nav-flag-select d-none">
                                    <div className="dropdown-custom">
                                        <a href="#nolink;" className="nav-item-toggle">
                                            <img src="img/flag_en.png" alt="" className="rounded-circle"/>
                                        </a>
                                        <div className="dropdown-wrapper dropdown-wrapper--small">
                                            <a href="#nolink;"><img src="img/flag_en.png" alt=""/> English</a>
                                            <a href="#nolink;"><img src="img/ger.png" alt=""/> German</a>
                                            <a href="#nolink;"><img src="img/spa.png" alt=""/> Spanish</a>
                                            <a href="#nolink;"><img src="img/tur.png" alt=""/> Turkish</a>
                                        </div>
                                    </div>
                                </li>
                                <li className="nav-author">
                                    <div className="dropdown-custom">
                                        <a href="#nolink;" className="nav-item-toggle"><img
                                            src="img/ashleysmith.png" alt="" className="rounded-circle"/></a>
                                        <div className="dropdown-wrapper">
                                            <div className="nav-author__info">
                                                <div className="author-img">
                                                    <img src="img/ashleysmith.png" alt="" className="rounded-circle"/>
                                                </div>
                                                <div>
                                                    <h6>Ashley Smith</h6>
                                                    <span>Business Development</span>
                                                </div>
                                            </div>
                                            <div className="nav-author__options">
                                                <ul>
                                                    <li>
                                                        <a href="#profile">
                                                            <span data-feather="user"></span> Profile</a>
                                                    </li>
                                                    <li>
                                                        <a href="#nolink;">
                                                            <span data-feather="settings"></span> Settings</a>
                                                    </li>
                                                    <li>
                                                        <a href="#nolink;">
                                                            <span data-feather="key"></span> Billing</a>
                                                    </li>
                                                    <li>
                                                        <a href="#nolink;">
                                                            <span data-feather="users"></span> Activity</a>
                                                    </li>
                                                    <li>
                                                        <a href="#nolink;">
                                                            <span data-feather="bell"></span> Help</a>
                                                    </li>
                                                </ul>
                                                <a href="" className="nav-author__signout">
                                                    <span data-feather="log-out"></span> Sign Out</a>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </header>
            </div>

        );
    }
}

export default Navbar;