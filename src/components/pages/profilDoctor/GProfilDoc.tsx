import React from 'react';
import ProfilDoctor from './ProfilDoctor';
import Edu from './Edu';
import Review from '../homesection/Review';
import sass from "../profilDoctor/GProfilDoc.module.scss"

const GProfilDoc = () => {
    return (
        <div className='container' >
            <div className={sass.doc}>

           
            <ProfilDoctor/>
            <Edu />
            <h1 > Отзывы</h1>
            <Review />
            
            </div>
        </div>
       
    );
};

export default GProfilDoc;