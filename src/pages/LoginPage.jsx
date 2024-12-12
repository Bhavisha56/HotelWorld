import React from 'react'
import { useState } from 'react';
import { faHotel } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const LoginPage = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const handlesubmit = (e) => {
        e.preventDefault();
        setError('');

        if (!email || !password) {
            setError('Please fill in all fields');
            return;
        }
        const emailpattern = '@';
        if (!email.match(emailpattern)) {
            setError('Invalid email address');
            return;
        }
        if (password.length < 6) {
            setError('Password must be at least 6 characters long.');
            return;
        }

        const loggedin = JSON.parse(localStorage.getItem("user"));

        if (email === loggedin.email && password === loggedin.password) {
            localStorage.setItem("loggedin",true);
            
            toast.success("Login Success",{
                position: "top-right",
                autoClose: 1000,
            })
            setTimeout(() => {
                navigate("/");
            }, 2000);

        } else {
            alert("Invalid")
        }
    };

    return (
        <>
            <div className='flex items-center justify-center h-screen bg-slate-800'>
                <div id='login' className='bg-white h-96 w-96 rounded-md p-9'>
                    <h1 className='text-2xl text-center -mb-7'><FontAwesomeIcon icon={faHotel}></FontAwesomeIcon> HotelWorld!</h1>
                    <form onSubmit={handlesubmit}>
                        <div className='p-5 mt-7'>
                            <label className='block text-gray-700 text-xl font-bold mb-2' htmlFor="email">Email</label>
                            <input
                                type='email'
                                id='email'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700'
                                required
                            />
                        </div>
                        <div className=' p-5 '>
                            <label className='block text-gray-700 text-xl font-bold mb-2' htmlFor="password">Password</label>
                            <input
                                type='password'
                                id='password'
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700'
                                required
                            />
                        </div>
                        <h1 className='p-2 -mt-4 cursor-pointer active:scale-95 text-gray-700 '>Forget Password</h1>
                        <div className='flex justify-center'>
                            <button className='bg-blue-700 text-xl p-3 rounded-2xl px-20 mt-5 active:scale-90 cursor-pointer'>login</button>
                        </div>
                        <div className='text-center p-2'>
                            <h1>Don't have an account! <button className='text-blue-600 active:scale-90 cursor-pointer'><Link to='/register'>Register here</Link></button></h1>
                        </div>
                    </form>
                </div>
            </div>
            <ToastContainer />

        </>
    )
}

export default LoginPage