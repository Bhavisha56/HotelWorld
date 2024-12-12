import React,{useContext} from 'react'
import Navbar from './Navbar'
import rooms1 from '../assets/img6.jpg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHotel } from '@fortawesome/free-solid-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faLocation, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faBed } from '@fortawesome/free-solid-svg-icons';
import { faBath } from '@fortawesome/free-solid-svg-icons';
import rooms2 from '../assets/img7.jpg';
import HomeDiscount from '../components/HomeDiscount';
// import FooterComp from '../components/FooterComp';
import { CartContext } from '../CartContext'; // Import the context

const Rooms = () => {
    const { cart, setCart } = useContext(CartContext); // Access cart and setCart from context

    const roomsdata = [
        { type: "Single Room", price: 100,img:rooms2 },
        { type: "Double Room", price: 150,img:rooms2 },
        { type: "Deluxe Room", price: 200,img:rooms2 },
        { type: "Suite", price: 300,img:rooms2 },
        { type: "Penthouse", price: 500,img:rooms2 },
        { type: "Family Room", price: 250,img:rooms2 },
        { type: "Executive Suite", price: 350,img:rooms2 },
        { type: "Presidential Suite", price: 1000,img:rooms2 },
        { type: "Twin Room", price: 120,img:rooms2 },
        { type: "King Room", price: 180,img:rooms2 },
        { type: "Queen Room", price: 160,img:rooms2 },
        { type: "Honeymoon Suite", price: 450,img:rooms2}
    ];
    const handleRoomSelect = (room) => {
        setCart([...cart, room]); // Add selected room to cart
    };
    return (
        <>
            <div className='fixed top-0 w-full z-50'>
                <Navbar/>
            </div>
            <div id='room' className="relative bg-black">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: `url(${rooms1})`,
                        opacity: 0.3,
                    }}
                ></div>
                <div className="relative z-10 p-4 py-52">
                    <h1 className="text-white text-4xl text-center">Welcome to Your Room Section!</h1>
                </div>

            </div>
            <div id='roomsimage' className='bg-white w-full h-96 mt-12 grid grid-cols-3 gap-4 rounded-md text-center'>
                {roomsdata.map((room, index) => (
                    <div className='p-24' key={index}>
                        <img className='h-80 w-72 rounded-md' src={room.img} alt={room.type} />
                        <p className='mt-2 text-gray-700 text-2xl'>{room.type}</p>
                        <div className='flex gap-8 ml-28'>
                            <FontAwesomeIcon icon={faBed} className="customicon" />
                            <FontAwesomeIcon icon={faBath} className="customicon" />
                        </div>
                        <h1 className='text-red-900'>${room.price} / Night</h1>
                        <button className='bg-red-950 text-white rounded-lg px-4 py-3 mt-2 active:scale-95 cursor-pointer text-xl' onClick={() => handleRoomSelect(room)}>Book Now</button>
                    </div>
                ))}

            </div>
            <HomeDiscount />
            <div className='w-full bg-cyan-950 h-96 mt-11 p-11 gap-2 text-4xl'>
                <FontAwesomeIcon icon={faHotel} /><p className='text-white font-sans font-bold text-2xl'>HotelWorld</p>

                <p className='text-sm text-white mt-2' >Management consulting includes a broad range of activities, </p>
                <p className='text-sm text-white'> and the many firms and their members often define these practices.</p>

                <div className='flex gap-7' >
                    <p className='text-white mt-6  cursor-pointer active:scale-95' ><FontAwesomeIcon icon={faInstagram} /></p>
                    <p className='text-white mt-6  cursor-pointer active:scale-95' > <FontAwesomeIcon icon={faGoogle} /></p>
                    <p className='text-white mt-6  cursor-pointer active:scale-95'> <FontAwesomeIcon icon={faTwitter} /></p>
                    <p className='text-white mt-6  cursor-pointer active:scale-95'> <FontAwesomeIcon icon={faFacebook} /> </p>
                </div>
                <div className='flex justify-center gap-12 ml-52 mt-20'>
                    <div className='text-center -mt-56 ml-52 cursor-pointer '>
                        <h1 className='text-white font-sans font-bold text-4xl'>Services</h1>
                        <ul className='text-xl text-white mt-3 active:scale-95'>Delicious Food</ul>
                        <ul className='text-xl text-white mt-3 active:scale-95'>Parking Area</ul>
                        <ul className='text-xl text-white mt-3 active:scale-95'>Swimming pool</ul>
                        <ul className='text-xl text-white mt-3 active:scale-95'>Spa Saalon</ul>
                        <ul className='text-xl text-white mt-3 active:scale-95'>Gym</ul>
                    </div>
                    <div className=' -mt-56 ml-6 cursor-pointer'>
                        <h1 className='text-white font-sans font-bold cursor-pointer text-4xl'>Important Link</h1>
                        <ul className='text-xl text-white mt-3 text-center active:scale-95'>About us</ul>
                        <ul className='text-xl text-white mt-3 text-center active:scale-95'>Popular Destination</ul>
                        <ul className='text-xl text-white mt-3 text-center active:scale-95'>Awesome Rooms</ul>
                        <ul className='text-xl text-white mt-3 text-center active:scale-95'>Our Services</ul>
                        <ul className='text-xl text-white mt-3 text-center active:scale-95'>Pricing Plan</ul>
                    </div>
                    <div className=' -mt-56 ml-6 cursor-pointer'>
                        <h1 className='text-white font-sans font-bold cursor-pointer text-center text-xl'>Contact</h1>
                        <ul className='text-sm text-white mt-3 text-center active:scale-95'><FontAwesomeIcon icon={faLocation}></FontAwesomeIcon>7 Green Lake Street Crawfordsville, IN 47933</ul>
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

export default Rooms