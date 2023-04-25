import React from "react";
import { BrowserRouter as Router, Routes as Rotas, Route } from 'react-router-dom';

import Home from "./components/Home";
import About from "./components/About";
import User from "./components/User";

const Routes = () => {
    return (
        <Router>
            <Rotas>
                <Route path="/" element={<Home />} />
                <Route path="/About" element={<About />} />
                <Route path="/Users" element={<User />} />
            </Rotas>
        </Router>
    )
}

export default Routes;