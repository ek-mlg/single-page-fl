import React from 'react';
import './App.css';
import Header from "./components/header/Header";
import MainPhoto from "./components/mainPhoto/MainPhoto";
import AboutProjects from "./components/aboutProjects/AboutProjects";
import AboutUs from "./components/aboutUs/AboutUs";
import OurWorks from "./components/ourWorks/OurWorks";
import Contacts from "./components/contacts/Contacts";

function App() {
    return (
        <div className="App">
            <Header/>
            <MainPhoto/>
            <AboutProjects/>
            <AboutUs/>
            <OurWorks/>
            <Contacts/>
        </div>
    );
}

export default App;
