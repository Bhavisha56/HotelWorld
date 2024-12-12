import React from 'react'
import image from '../assets/img1.jpg'
import { useNavigate } from 'react-router-dom';
// import './index.css';
const BigCard = () => {
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
            <div id='big' className="relative bg-black">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: `url(${image})`,
                        opacity: 0.3,
                    }}
                ></div>
                <div className="relative z-10 p-4 py-52">

                    <h1 className="text-white text-8xl text-center">Welcome to Your Next Adventure!
                    </h1>
                    <h2 className="text-white text-4xl text-center">Discover the perfect escape with our exclusive room bookings.</h2>
                <button id='btn' className='text-white bg-red-700 rounded-lg active:scale-90 cursor-pointer text-4xl text-center p-6 ml-96' onClick={handlebooknow}>Book Now !</button>
                </div>
            </div>
        </>
    )
}

export default BigCard