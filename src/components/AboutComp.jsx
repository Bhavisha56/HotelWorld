import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft, faQuoteRight, faHotel, faClock, faLock, faHeadset } from '@fortawesome/free-solid-svg-icons';

const AboutComp = () => {
    return (
        <>
            <div id='abot' className='p-4 cursor-pointer bg-emerald-600 w-full h-96 text-black rounded-3xl '>
                <h1 className=' p-2 ml-3 underline'>About Us</h1>
                <div className=' p-6 bg-green-200 rounded-3xl'>
                    <p className='p-3  text-xl'><FontAwesomeIcon className='text-2xl' icon={faQuoteLeft} style={{ color: "#fc7373", }} /> Welcome to StayEase, your one-stop solution for effortless hotel booking. Our platform is designed to connect travelers with the perfect accommodations, offering a seamless and intuitive booking experience.
                        At StayEase, we believe that finding the right place to stay should be simple, reliable, and personalized. Whether you're planning a weekend getaway, a business trip, or a family vacation, our platform caters to every need. <FontAwesomeIcon className='text-2xl' icon={faQuoteRight} style={{ color: "#fc7373", }} /></p>
                </div>
                <h1 className='underline mt-3'>Why Choose Us?</h1>
                <div className='flex p-6 justify-evenly text-5xl'>
                    <ul><FontAwesomeIcon icon={faHotel} /></ul>
                    <ul><FontAwesomeIcon icon={faClock} /></ul>
                    <ul><FontAwesomeIcon icon={faLock} /></ul>
                    <ul><FontAwesomeIcon icon={faHeadset} /></ul>

                </div>
                <div className='flex p-6  justify-evenly text-2xl'>
                    <ul>Wide Selection of Hotels</ul>
                    <ul>Real-Time Availability</ul>
                    <ul>Secure Transactions</ul>
                    <ul>Customer Support</ul>

                </div>
            </div>
        </>
    )
}

export default AboutComp;