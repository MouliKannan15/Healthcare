import React from "react";
import MainNavbar from './navbar';
import HeroSection from './frontdoc';
import TreatmentSection from './treatment';
import Services from './service';
import Journey from './journey';
import Booking from'./book';
import Whymedagg from "./why";
import Footer from "./footer";







function Home(){
    return(
        <>
        <MainNavbar/>
        <HeroSection/>
        <TreatmentSection/>
        <Services/>
        <Journey/>
        <Booking/>
        <Whymedagg/>
        <Footer/>
        
        </>
    );


}

export default Home;