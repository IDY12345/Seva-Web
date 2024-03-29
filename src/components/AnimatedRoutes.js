import React from 'react'
import Home from './Home';
import { Routes, Route, useLocation } from 'react-router-dom'
import About from './About';
import Contact from './Contact';
import Portal from './Portal';

import { AnimatePresence } from 'framer-motion';
function AnimatedRoutes(sidebar) {
    const location = useLocation()
    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path='/' element={<Home sidebar={sidebar}/>} />
                <Route path='/About' element={<About sidebar={sidebar}/>} />
                <Route path='/Contact' element={<Contact sidebar={sidebar}/>} />
                <Route path='/Portal' element={<Portal sidebar={sidebar}/>} />
            </Routes>
        </AnimatePresence>

    )
}

export default AnimatedRoutes