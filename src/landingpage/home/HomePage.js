import React from 'react'
import Hero from "./Hero.js"
import OpenAccount from '../OpenAccount.js';
import Navbars from '../Navbar.js'
import Footer from '../Footer.js'
import Stats from './Stats.js'
import Pricing from './Pricing.js'
import Education from './Education.js'
import Awards from './Awards.js'
function HomePage() {
    return ( 
        <>
            <Navbars/>
            <Hero/>
            <Awards/>
            <Stats/>
             <Pricing/>
            <Education/> 
            <OpenAccount/>
            <Footer/>
        </>
     );
}

export default HomePage;