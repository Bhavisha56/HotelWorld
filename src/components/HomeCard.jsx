import React from 'react'
import img5 from '../assets/img5.jpg'
import { useNavigate } from 'react-router-dom';
const HomeCard = () => {
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
            <div id='big' className="relative bg-black mt-7 rounded-lg">
                <div
                    className="absolute inset-0 bg-cover bg-center "
                    style={{
                        backgroundImage: `url(${img5})`,
                        width: '100%',
                        height: '100%',
                        opacity: 0.3,
                        rounded: '9px'
                    }}
                ></div>
                <div className="relative z-10 p-4 py-52">
                    <div id='homekacard' className='bg-pink-100 w-72'>
                        <h1 className='text-red-700 text-5xl p-4'>Exclusive Offer</h1>
                        <p className='p-4 font-serif'>Enjoy Your Dream Vacation In switzerland</p>

                        <div className='flex text-2xl mt-4 p-2 gap-28'>
                            <p className='text-center font-bold'>2 Days / 3 Nights</p>
                            <p className='text-yellow-300'>★★★★★</p>
                            <p className='bg-red-600 rounded-lg px-6 text-center text-2xl text-white'>$2500</p>

                        </div>
                        <div className='flex flex-col items-center mt-4'>
                            <button className='bg-red-600 rounded-lg text-white px-5 mt-2 active:scale-90 cursor-pointer text-4xl' onClick={handlebooknow}>Book now</button>
                        </div>
                        <div className='flex text-2xl mt-0 p-3'>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomeCard