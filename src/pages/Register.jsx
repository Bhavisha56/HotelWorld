// import React from 'react'
import React, { useState } from 'react'
// import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { faHotel } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Register = () => {
    // const [input,setInput]=useState({})
    const navigate=useNavigate();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const handlesubmit = (e) => {
        e.preventDefault();
        setError('')
      
        if(!email || !password || !name){
            setError("Fill all details")
            return;
        }
        const emailpattern ='@';
        if (!email.match(emailpattern)) {
            setError('Invalid email address');
            return;
        }
        if (password.length < 6) {
            setError('Password must be at least 6 characters long.');
            return;
        }
        const user={
            name:name,
            email:email,
            password:password,
        };
        localStorage.setItem("user",JSON.stringify(user));
        if(user){
            toast.success("Registeration Success",{
                position:"top-right",
                autoClose:1000
            })
            setTimeout(() => {
                navigate("/login");
            }, 2000);
        }
       
    }
    return (
        <>
            <div className='flex items-center justify-center h-screen bg-slate-800'>
                <div id='register' className='bg-white h-96 w-96 rounded-md p-9'>
                    <h1 className='text-2xl text-center -mb-7 cursor-pointer'><FontAwesomeIcon icon={faHotel}></FontAwesomeIcon> HotelWorld!</h1>
                    <form onSubmit={handlesubmit}>
                        <div className='p-5 mt-7'>
                            <label className='block text-gray-700 text-xl font-bold mb-2' htmlFor="name">Name</label>
                            <input type="name"
                                id='name'
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700'
                                required
                            />
                        </div>
                        <div className='p-5'>
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
                        <div className='flex justify-center'>
                            <button className='bg-green-700 text-xl p-3 rounded-2xl px-20 mt-5 active:scale-90 cursor-pointer'>Register</button>
                        </div>
                        <div className='text-center p-3'>
                            <h1>Already have an Account! <button className='text-blue-600 active:scale-90 cursor-pointer'><Link to='/login'>Login</Link></button></h1>
                        </div>
                    </form>
                </div>
            </div>
            <ToastContainer />
        </>
    )
}

export default Register