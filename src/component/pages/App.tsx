import React from 'react';
import {
    Route,
    Routes
} from "react-router-dom";

import Navbar from "./root/navbar";
import Footer from "./root/footer";
import Sidebar from "./root/sidebar";
import SlotMachineSolution from "./proje1/slotMachineSolution";
import DrumKit from "./proje1/drumKit";
import CssTest from "./proje1/cssTest";
import Die from "./dice/die";
import ClickFunction from "./proje1/ClickFunction";
import Click2 from "./proje1/click2";
import FormInput from "./proje1/FormInput";

function App() {
    return (

        <div className="layout-light side-menu overlayScroll">
            <div>
                <Navbar/>
            </div>
            <div className="main-content">
                <Sidebar/>
                <div className="content">
                    <Routes>
                        <Route   path="/slotMachineSolution"  element={<SlotMachineSolution/>} />
                        <Route   path="/slotMachineSolution"  element={<DrumKit/>} />
                        <Route   path="/cssTest"  element={<CssTest/>} />
                        <Route   path="/die"  element={<Die/>} />
                        <Route   path="/clickfunction"  element={<ClickFunction/>} />
                        <Route   path="/click2"  element={<Click2/>} />
                        <Route   path="/FormInput"  element={<FormInput/>} />
                    </Routes>
                </div>
                <Footer/>
            </div>
        </div>
    );
}

export default App;


