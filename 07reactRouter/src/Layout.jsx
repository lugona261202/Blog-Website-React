// what we intent to do is two feature like header and footer should be same in every page
// like home about
// so when we have these fixed elements
//  we use layout 

import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import {Outlet, outlet} from 'react-router-dom'

function Layout() {
    return (
        <>
        <Headers/>
        <Outlet/>
        <Footer/>
        </>
    )
}

export default Layout

// this outlet is a feature of react router dom

