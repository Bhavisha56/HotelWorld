import React, { useContext, useEffect } from 'react'
import rooms1 from '../assets/img6.jpg'
import Navbar from './Navbar'
import { CartContext } from '../CartContext'; // Import the context
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Cart = () => {
    const { cart,removeFromCart } = useContext(CartContext); // Access cart from context
    const [a, setA] = useState([]);
    useEffect(() => {
        setA(Array(cart.length).fill(1)); // Start each quantity at 1
    }, [cart]);
    const increase = (index) => {
        const updatequanity = [...a];
        updatequanity[index]++;
        setA(updatequanity);
    }
    const decrese = (index) => {
        const updatequanity = [...a];
        if (updatequanity[index] > 1) {
            updatequanity[index]--;
            setA(updatequanity);
        }
    }
    const calculateTotal = () => {
        return cart.reduce((total, item, index) => total + item.price * a[index], 0);
    };
  
    return (
        <>
            <div className='fixed top-0 w-full z-50'>
                <Navbar />
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
                    <h1 className="text-white text-4xl text-center">Welcome to Your Booking Section!</h1>
                </div>
            </div>
            <div className='h-64 w-full p-7 bg-white mt-4'>
                <div className='flex justify-evenly gap-11'>
                    <ul className=''>Room type</ul>
                    <ul className='mr-6'>Price</ul>
                    <ul className='ml-2'>Quantity</ul>
                    <ul className=''>Check-in</ul>
                    <ul className=''>Check-out</ul>
                    <ul className=''>SubTotal</ul>
                    <ul className=''>Action</ul>
                </div>
                {cart.length > 0 ? (
                    <>
                        {cart.map((item, index) => (
                            <div key={index} className='flex flex-row justify-evenly items-center py-2 gap-2 ml-24'>
                                <div className='w-1/6'>{item.type}</div>
                                <div className='w-1/6'>${item.price}</div>
                                <div className='w-1/6 flex items-center'>
                                    <button
                                        className='px-2 py-1 bg-gray-300 text-black rounded '
                                        onClick={() => decrese(index)}
                                    >
                                        -
                                    </button>
                                    <span className='px-4'>{a[index]}</span>
                                    <button
                                        className='px-2 py-1 bg-gray-300 text-black rounded '
                                        onClick={() => increase(index)}
                                    >
                                        +
                                    </button>
                                </div>
                                <div className='w-1/6'>December-23</div>
                                <div className='w-1/6'>December-25</div>
                                <div className='w-1/6'>${item.price * a[index]}</div>
                                <div className='w-1/6'>
                                    <button
                                        className='text-red-500 hover:underline'
                                        onClick={() => removeFromCart(index)}
                                    >
                                        Remove
                                    </button>
                                </div>
                            </div>

                        ))}
                        <div className="cursor-pointer p-6 flex flex-row justify-evenly items-center py-2 font-bold bg-gray-200">
                            <div className="w-1/6">Total</div>
                            <div className="w-1/6"></div>
                            <div className="w-1/6"></div>
                            <div className="w-1/6"></div>
                            <div className="w-1/6"></div>
                            <div className="w-1/6">${calculateTotal()}</div>
                            <div className="w-1/6 active:scale-90 cursor-pointer bg-red-500 rounded-lg text-center"><Link to="/payment">Click to make Payment</Link></div>
                        </div>
                    </>
                ) : (
                    <div className='text-center'>Your cart is empty!</div>
                )}
            </div>

        </>
    )
}

export default Cart