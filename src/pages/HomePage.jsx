import React from 'react'
import img2 from '../assets/img2.jpg'
import img3 from '../assets/img3.jpg'
import img4 from '../assets/img4.jpg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBed } from '@fortawesome/free-solid-svg-icons';
import { faBath } from '@fortawesome/free-solid-svg-icons';
import HomeCard from '../components/HomeCard'
import InfoCard from '../components/InfoCard'
import HomeDiscount from '../components/HomeDiscount'
import FooterComp from '../components/FooterComp'
import { useNavigate } from 'react-router-dom'
import AboutComp from '../components/AboutComp'
const HomePage = () => {
    const navigate=useNavigate();
    const handlebooknow=()=>{
        if(localStorage.getItem('loggedin') === 'true'){
           navigate('/Room')
        }else{
            navigate('/login')
        }
    }
    return (
        <>
            <div id='homepage' className='h-96 text-gray-900  text-center text-5xl mt-6'>
                <h1>Our Most Popular Rooms</h1>
                <p className='text-xl py-2 text-gray-800'>It is a long established fact that a reader will be distracted by the readable content of a page.</p>
                <div className='flex justify-between gap-8 p-8 bg-red-200 rounded-lg'>
                    <div className='flex flex-col items-center'>
                        <img id='homepageimg' className='h-96 w-64 rounded-lg' src={img2} alt="" />
                        <p className='mt-2 text-gray-700 text-2xl'>Deluxe Contrast Room</p>
                        <div className='flex gap-8'>
                            <FontAwesomeIcon icon={faBed} className="customicon" />
                            <FontAwesomeIcon icon={faBath} className="customicon" />
                        </div>
                        <h1 className='text-red-900'>$200 / Night</h1>
                        <button className='bg-red-950 text-white rounded-lg px-4 py-3 mt-2 active:scale-95 cursor-pointer text-xl' onClick={handlebooknow}>Book Now</button>
                    </div>
                    <div className='flex flex-col items-center'>
                        <img id='homepageimg' className='h-96 w-64 rounded-lg' src={img3} alt="" />
                        <p className='mt-2 text-gray-700 text-2xl'>Luxery Twin Room</p>
                        <div className='flex gap-8'>
                            <FontAwesomeIcon icon={faBed} className="customicon" />
                            <FontAwesomeIcon icon={faBath} className="customicon" />
                        </div>
                        <h1 className='text-red-900'>$300 / Night</h1>
                        <button className='bg-red-950 text-white rounded-lg px-4 py-3 mt-2 active:scale-95 cursor-pointer text-xl ' onClick={handlebooknow}>Book Now</button>
                    </div>
                    <div className='flex flex-col items-center'>
                        <img id='homepageimg' className='h-96 w-64 rounded-lg' src={img4} alt="" />
                        <p className='mt-2 text-gray-700 text-2xl'>Single Contrast Room</p>
                        <div className='flex gap-8'>
                            <FontAwesomeIcon icon={faBed} className="customicon" />
                            <FontAwesomeIcon icon={faBath} className="customicon" />
                        </div>
                        <h1 className='text-red-900'>$400 / Night</h1>
                        <button className='bg-red-950 text-white rounded-lg px-4 py-3 mt-2 active:scale-95 cursor-pointer text-xl' onClick={handlebooknow}>Book Now</button>
                    </div>
                </div>
                <div className='w-full'>
                    <HomeCard />
                </div>
                < InfoCard />
                <div id='about-section' className='mb-28 -mt-6'>
                <AboutComp/>
                </div>

                <HomeDiscount />
                <div className='text-left'>
                    <FooterComp />
                </div>
            </div>


        </>
    )
}

export default HomePage