import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHotel } from '@fortawesome/free-solid-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faLocation, faPhone } from '@fortawesome/free-solid-svg-icons';



const FooterComp = () => {
  return (
    <>
      <div className='w-full bg-cyan-950 h-96 mt-11 p-11 gap-2'>
        <FontAwesomeIcon className='text-white' icon={faHotel} /><p className='text-white font-sans font-bold'>HotelWorld</p>

        <p className='text-sm text-white mt-2' >Management consulting includes a broad range of activities, </p>
        <p className='text-sm text-white'> and the many firms and their members often define these practices.</p>

        <div className='flex gap-7' >
          <p className='text-white mt-6  cursor-pointer active:scale-95' ><FontAwesomeIcon icon={faInstagram} /></p>
          <p className='text-white mt-6  cursor-pointer active:scale-95' > <FontAwesomeIcon icon={faGoogle} /></p>
          <p className='text-white mt-6  cursor-pointer active:scale-95'> <FontAwesomeIcon icon={faTwitter} /></p>
          <p className='text-white mt-6  cursor-pointer active:scale-95'> <FontAwesomeIcon icon={faFacebook} /> </p>
        </div>
        <div className='flex justify-center gap-12 ml-52'>
          <div className='text-center -mt-56 ml-52 cursor-pointer '>
            <h1 className='text-white font-sans font-bold '>Services</h1>
            <ul className='text-xl text-white mt-3 active:scale-95'>Delicious Food</ul>
            <ul className='text-xl text-white mt-3 active:scale-95'>Parking Area</ul>
            <ul className='text-xl text-white mt-3 active:scale-95'>Swimming pool</ul>
            <ul className='text-xl text-white mt-3 active:scale-95'>Spa Saalon</ul>
            <ul className='text-xl text-white mt-3 active:scale-95'>Gym</ul>
          </div>
          <div className=' -mt-56 ml-6 cursor-pointer'>
            <h1 className='text-white font-sans font-bold cursor-pointer'>Important Link</h1>
            <ul className='text-xl text-white mt-3 text-center active:scale-95'>About us</ul>
            <ul className='text-xl text-white mt-3 text-center active:scale-95'>Popular Destination</ul>
            <ul className='text-xl text-white mt-3 text-center active:scale-95'>Awesome Rooms</ul>
            <ul className='text-xl text-white mt-3 text-center active:scale-95'>Our Services</ul>
            <ul className='text-xl text-white mt-3 text-center active:scale-95'>Pricing Plan</ul>
          </div>
          <div className=' -mt-56 ml-6 cursor-pointer'>
            <h1 className='text-white font-sans font-bold cursor-pointer text-center'>Contact</h1>
            <ul className='text-sm text-white mt-3 text-center active:scale-95'><FontAwesomeIcon icon={faLocation}></FontAwesomeIcon>Near Taj Hotel,Amchi Mumbai-310089</ul>
            <ul className='text-xl text-white mt-3 text-center active:scale-95'><FontAwesomeIcon icon={faPhone}></FontAwesomeIcon>+1 800 123 456 789</ul>

          </div>
        </div>
      </div>
      <div className='bg-blue-950 h-10 text-center text-white text-sm'>
        <p>Copyright © 2022 HotelWorld by wpOceans. All Rights Reserved.</p>
      </div>

    </>
  )
}

export default FooterComp