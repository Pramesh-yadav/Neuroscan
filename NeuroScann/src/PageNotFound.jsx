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

            <p className="text-sm font-light text-gray-1000 dark:text-gray-400">Page Not Found.</p>

            <div className="grid min-h-full grid-cols-1 grid-rows-[1fr,auto,1fr] bg-white lg:grid-cols-[max(50%,36rem),1fr]">
        <header className="mx-auto w-full max-w-7xl px-6 pt-6 sm:pt-10 lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:px-8">
          <a href="#">
            <span className="sr-only">Your Company</span>
            <img
              className="h-10 w-auto sm:h-12"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt=""
            />
          </a>
        </header>
        <main className="mx-auto w-full max-w-7xl px-6 py-24 sm:py-32 lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:px-8">
          <div className="max-w-lg">
            <p className="text-base font-semibold leading-8 text-indigo-600">404</p>
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">Page not found</h1>
            <p className="mt-6 text-base leading-7 text-gray-600">
              Sorry, we couldn’t find the page you’re looking for.
            </p>
            <div className="mt-10">
              <a href="/" className="text-sm font-semibold leading-7 text-indigo-600">
                <span aria-hidden="true">&larr;</span> Back to home
              </a>
            </div>
          </div>
        </main>
        <footer className="self-end lg:col-span-2 lg:col-start-1 lg:row-start-3">
          <div className="border-t border-gray-100 bg-gray-50 py-10">
            <nav className="mx-auto flex w-full max-w-7xl items-center gap-x-4 px-6 text-sm leading-7 text-gray-600 lg:px-8">
              <a href="/About">About</a>
              <svg viewBox="0 0 2 2" aria-hidden="true" className="h-0.5 w-0.5 fill-gray-300">
                <circle cx={1} cy={1} r={1} />
              </svg>
              <a href="/">Neuroscan</a>
            </nav>
          </div>
        </footer>
        <div className="hidden lg:relative lg:col-start-2 lg:row-start-1 lg:row-end-4 lg:block">
          {/* <img
            src="https://images.unsplash.com/photo-1470847355775-e0e3c35a9a2c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1825&q=80"
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
          /> */}
        </div>
      </div>

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
