import React from 'react';


import Glavnyi from './pages/homesection/Glavnyi';
import Experience from './pages/homesection/Experience';
import Quations from './pages/homesection/Quations';
import Doctor from './pages/homesection/Doctor';
import Consultation from './pages/homesection/Consultation';
import Service from './pages/homesection/Service';
import Review from './pages/homesection/Review';
import Answer from './pages/homesection/Answer';

const HomePage = () => {
    return (
        <div>
            <Glavnyi/>
            <Experience/>
            <Quations/>
            <Doctor/>
            <Consultation/>
            <Service/>
            <Review/>
            <Answer/>
        </div>
    );
};

export default HomePage;