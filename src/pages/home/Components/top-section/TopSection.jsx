import React, { useState, useEffect } from 'react';
import './TopSection.css'
import Header from '../header/header';
import ImageSection from '../Image-section/ImageSection';
import { IoMenuOutline } from "react-icons/io5";

export default function TopSection() {

    return (
        <div className='Main-Section'>
            <Header />

            <div className='header-wrapper'>
                <ImageSection />
                <div className='Section-Wrapper'>
                    <div className='Text-part'>
                        <span className='Title'>Your order list is easier Online</span>
                        <span className='bellow-title'>A unique experience that contains all the features that help you attract customers and motivate them to take the steps to order and purchase with ease for your customers and for you.</span>
                    </div>
           

                </div>
            </div>
        </div>
    )
}
