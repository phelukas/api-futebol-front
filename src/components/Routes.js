import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import About from '../pages/About'
import Contact from '../pages/Contact'
import Home from '../pages/Home'

const Routes = () => (
    <BrowserRouter>
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/" element={<Home />} />
    </BrowserRouter>
);

export default Routes