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
        <div className="App">
            <Header/>
            <MainPhoto/>
            <div id={"aboutProjects"}>
                <AboutProjects/>
                <AboutUs/>
            </div>
            <OurWorks/>
            <Advantages/>
            <Catalog/>
            <Contacts/>
            <Footer/>
        </div>
    );
}

export default App;
