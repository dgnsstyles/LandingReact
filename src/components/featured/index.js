import React, { Component } from 'react'
import Carrousel from './Carousel';
import TimeUntil from './TimeUntil';

const Features = () => {
    return (
        <div style={{position: 'relative'}}>

        <Carrousel />

            <div className="artist_name">

                <div className="wrapper">
                    Ariana Grande
                </div>

            </div>
            <TimeUntil />


        </div>
    );


}

export default Features