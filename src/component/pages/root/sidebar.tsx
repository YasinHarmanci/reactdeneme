import React, {Component} from 'react';
import DrumKit from "../proje1/drumKit";
class Sidebar extends Component {
    render() {
        return (
            <aside className="sidebar" >
                <div className="sidebar__menu-group">
                    <ul className="sidebar_nav">
                        <li>
                            <a href="slotmachinesolution">
                                <span data-feather="home" className="nav-icon"></span>
                                <span className="menu-text">Slot Machine Solution</span>
                            </a>
                        </li>
                        <li>
                            <a href="DrumKit">
                                <span data-feather="user-plus" className="nav-icon"></span>
                                <span className="menu-text">Drum Kit</span>
                            </a>
                        </li>
                        <li>
                            <a href="cssTest">
                                <span data-feather="calendar" className="nav-icon"></span>
                                <span className="menu-text">Style Test</span>
                            </a>
                        </li>
                        <li>
                            <a href="die">
                                <span data-feather="calendar" className="nav-icon"></span>
                                <span className="menu-text">DİCE</span>
                            </a>
                        </li>
                        <li>
                            <a href="clickfunction">
                                <span data-feather="calendar" className="nav-icon"></span>
                                <span className="menu-text">clickfunction</span>
                            </a>
                        </li>
                        <li>
                            <a href="click2">
                                <span data-feather="calendar" className="nav-icon"></span>
                                <span className="menu-text">click2</span>
                            </a>
                        </li>
                        <li>
                            <a href="FormInput">
                                <span data-feather="calendar" className="nav-icon"></span>
                                <span className="menu-text">FormInput</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </aside>
        );
    }
}

export default Sidebar;