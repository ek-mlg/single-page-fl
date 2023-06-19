import React from 'react';
import './App.css';
import Header from "./components/header/Header";
import MainPhoto from "./components/mainPhoto/MainPhoto";
import AboutProjects from "./components/aboutProjects/AboutProjects";
import AboutUs from "./components/aboutUs/AboutUs";
import OurWorks from "./components/ourWorks/OurWorks";
import Contacts from "./components/contacts/Contacts";
import Footer from "./components/footer/Footer";
import Advantages from "./components/advantages/Advantages";
import Catalog from "./components/catalog/Catalog";

function App() {
    return (
        <>
            <Header/>

            <MainPhoto/>
            <div id={"aboutProjects"}>
                <AboutProjects/>
                <AboutUs/>
            </div>
            <div id={"ourWorks"}>
                <OurWorks/>
                <Advantages/>
            </div>
            <Catalog/>
            <Contacts/>

            <Footer/>
        </>
    );
}

export default App;
