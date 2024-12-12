import React from 'react'
import confetti from 'canvas-confetti';
import { useState } from 'react';
import emailjs from 'emailjs-com';


const HomeDiscount = () => {
  const [email,setEmail]=useState('');

    const handleClick = () => {
        if (!email) {
            alert('Please enter your email!');
            return;
        }
        confetti({
            particleCount: 100, // Number of confetti particles
            spread: 70,         // Spread of the confetti
            origin: { x: 0.5, y: 0.5 }, // Start at the center of the screen
        });
        emailjs.send(
            'service_jhaxlsx', // Replace with your EmailJS service ID
            'template_2lxw8ff', // Replace with your EmailJS template ID
            { email }, // Email template parameters
            'Iy5iKrPrpM1HUrKD2' // Replace with your EmailJS public key
        )
        .then(()=>{
            alert('Discount email sent successfully!');
                setEmail(''); // Clear the input field
        })
        .catch((error) => {
            console.error('Email sending error:', error);
            alert('Failed to send email. Please try again.');
        });

    };
    
    return (
        <>
            <div className='text-center h-50 rounded-lg p-10 bg-orange-300'>
                <h1 className='p-3 text-4xl'>Subscribe & Get Special Discount!</h1>
                <h2 className='text-xl'>Don’t Wanna Miss Somethings? Subscribe Right Now And Get The Special Discount And Monthly Newsletter.</h2>
                <input
                    type="text"
                    placeholder="Enter your email"
                    className="border p-1 rounded-l bg-slate-100"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} // Update email state
                />
                    <button  onClick={handleClick} className='bg-red-400 p-3 mt-9 active:scale-95 cursor-pointer'>submit</button>
            </div>
        </>
    )
}

export default HomeDiscount;