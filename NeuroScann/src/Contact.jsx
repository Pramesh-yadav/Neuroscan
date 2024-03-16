import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import {
    FaDribbbleSquare,
    FaFacebookSquare,
    FaGithubSquare,
    FaInstagram,
    FaTwitterSquare,
} from 'react-icons/fa';
import Laptop from './assets/laptop.jpg';
import Single from './assets/single.png';
import Double from './assets/double.png';
import Triple from './assets/triple.png';
import { Link } from 'react-router-dom';

const Homepage = () => {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    };

    return (
        <div>
            {/* Navbar */}
            <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
            <a href="/"><h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>NeuroScan.</h1></a>
                <ul className='hidden md:flex'>
                    <a href="/"><button className='p-4'>Home</button></a>
                    <a href="/Blog"><button className='p-4'>Blog</button></a>
                    <a href="/Predict"><button className='p-4'>Diagnose</button></a>
                    <a href="/About"><button className='p-4'>About</button></a>
                    <a href="/Contact"><button className='p-4'>Contact</button></a>
                    <a href="/login"><button className='p-4'>Login</button></a>

                </ul>
                <div onClick={handleNav} className='block md:hidden'>
                    {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
                </div>
                <ul className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
                    <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>NeuroScan.</h1>
                    <li className='p-4 border-b border-gray-600'>Home</li>
                    <li className='p-4 border-b border-gray-600'>Blog</li>
                    <li className='p-4 border-b border-gray-600'>Predict</li>
                    <li className='p-4 border-b border-gray-600'>Login</li>
                    <li className='p-4'>About</li>
                </ul>
            </div>

            <p className="text-sm font-light text-gray-1000 dark:text-gray-400">Contact Page</p>

            {/* Footer */}
            <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
                <div>
                    <h1 className='w-full text-3xl font-bold text-[#00df9a]'>Neuroscan</h1>
                    <p className='py-4'>AI Tool to predict brain Disease</p>
                    <div className='flex justify-between md:w-[75%] my-6'>
                        <FaFacebookSquare size={30} />
                        <FaInstagram size={30} />
                        <FaTwitterSquare size={30} />
                        <FaGithubSquare size={30} />
                        <FaDribbbleSquare size={30} />
                    </div>
                </div>
                <div className='lg:col-span-2 flex justify-between mt-6'>
                <div>
                        <h6 className='font-medium text-gray-400'>Homepage</h6>
                        <ul>
                        <a href='/'> <li className='py-2 text-sm'>Home</li></a>
                            <a href='/Predict'> <li className='py-2 text-sm'>Predict</li></a>
                        </ul>
                    </div>

                    <div>
                        <h6 className='font-medium text-gray-400'>Blogs</h6>
                        <ul>
                        <a href='/Blog'> <li className='py-2 text-sm'>Blog</li></a>
                        </ul>
                    </div>
                    <div>
                        <a href='/About'> <h6 className='font-medium text-gray-400'>AboutUs</h6></a>
                        <ul>
                        <a href='/About'> <li className='py-2 text-sm'>Who we are ?</li></a>
                        <a href='/Contact'> <li className='py-2 text-sm'>Contact</li></a>
                        <a href='/About'> <li className='py-2 text-sm'>About</li></a>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Homepage;
