import React, { useContext, useState } from 'react'
import { faHotel } from '@fortawesome/free-solid-svg-icons';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../CartContext';

const navbar = ({ onSearch }) => {
    const { cart } = useContext(CartContext); // Access cart from context

    const navigate = useNavigate('');
    const isLoggedIn = () => localStorage.getItem('loggedin') === 'true';
    const handlelogout = () => {
        localStorage.removeItem('loggedin', 'false');
        navigate('/login');
    }
    const handleroom = () => {
        if (localStorage.getItem('loggedin') === 'true') {
            navigate('/room');
        } else {
            navigate('/login')
        }
    }
    const handleScrollToAbout = () => {
        navigate('/');
        setTimeout(() => {
            document.getElementById('about-section')?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
    };
    const [searchQuery, setSearchQuery] = useState('');
    const handlesearch = (e) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            navigate(`/rooms?search=${searchQuery}`);
            setSearchQuery("");
        }
    };

    return (
        <>
            <div className='bg-gray-900 p-7 flex justify-between text-white'>
                <h1 className='text-xl'><FontAwesomeIcon icon={faHotel}></FontAwesomeIcon><Link className='cursor-pointer ' to='/'>HotelWorld</Link></h1>
                <form onSubmit={handlesearch} className='flex items-center'>
                    <input
                        type='text'
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder='search...'
                        className='p-2 rounded-l-lg border w-96 border-gray-300 text-black'
                    />
                    <button
                        type='submit'
                        className='bg-blue-500 h-10 text-white px-4 rounded-r-lg active:scale-90 hover:bg-blue-600'
                    >
                        Search
                    </button>
                </form>

                <div className='flex gap-9'>
                    <ul className='active:scale-95 cursor-pointer hover:text-gray-700'><Link to='/'>Home</Link></ul>
                    <ul className='active:scale-95 cursor-pointer hover:text-gray-700' onClick={handleroom}>Rooms</ul>
                    <ul className='active:scale-95 cursor-pointer hover:text-gray-700' onClick={handleScrollToAbout}>About</ul>
                    <ul className='active:scale-95 cursor-pointer hover:text-gray-700'><Link to='contact'>Contact</Link></ul>


                    {isLoggedIn() && (
                        <ul className='active:scale-95 cursor-pointer hover:text-gray-700'><Link to='/cart'>
                            <FontAwesomeIcon icon={faShoppingCart} /></Link>
                            <span className='bg-red-600 rounded-lg p-1 gap-2'>
                                <span>{cart.length}</span> {/* Cart size */}
                            </span>
                        </ul>
                    )}

                    {isLoggedIn() ? (
                        <ul className='active:scale-95 cursor-pointer hover:text-gray-700' onClick={handlelogout}>
                            Logout
                        </ul>
                    ) : (
                        <ul className='active:scale-95 cursor-pointer hover:text-gray-700'>
                            <Link to='/login'>Login</Link>
                        </ul>
                    )}
                </div>
            </div>
        </>
    )
}

export default navbar