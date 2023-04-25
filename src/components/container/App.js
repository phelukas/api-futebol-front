import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import Container from '../components/container'
import Footer from '../footer'
import Header from '../header'
import Routes from '../Routes'

const App = () => (
    <BrowserRouter>
        <Header />
        <Container>
            <Routes />
        </Container>
        <Footer />
    </BrowserRouter>
)

export default App