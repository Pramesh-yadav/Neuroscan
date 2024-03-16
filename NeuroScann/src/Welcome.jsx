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
                    <a href="/"><li className='p-4 border-b border-gray-600'>Home</li></a>
                    <a href="/Blog"><li className='p-4 border-b border-gray-600'>Blog</li></a>
                    <a href="/Predict"><li className='p-4 border-b border-gray-600'>Diagnose</li></a>
                    <a href="/Login"><li className='p-4 border-b border-gray-600'>Login</li></a>
                    <a href='/About'><li className='p-4'>About</li></a>
                </ul>
            </div>

            {/* Analytics */}
            <div className='w-full bg-white py-16 px-4'>
                <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
                    <img className='w-[500px] mx-auto my-4' src={Laptop} alt='/' />
                    <div className='flex flex-col justify-center'>
                        <p className='text-[#00df9a] font-bold '>Neuroscan</p>
                        <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Predict Brain Disease </h1>
                        <p>
                            Click The Diagnose Buttton And Predict Your Brain Disease just by uploading your MRI Images.
                        </p>
                        <a href='/Predict'><button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>Diagnose </button></a>
                    </div>
                </div>
            </div>
            <hr className="my-4 border-white" />


            <div></div>

            <div className='w-full bg-light-green py-16 px-4'>
      <figure className="max-w-screen-md mx-auto text-center">
        <svg className="w-10 h-10 mx-auto mb-3 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
          <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z"/>
        </svg>
        <blockquote>
          <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>ABSTRACT</h1><br />
          <p className="text-1xl italic font-small text-white">"Brain tumor is considered as one of the aggressive diseases,
           among children and adults. Brain tumors account for 85 to 90 percent of all primary Central Nervous System(CNS) t
           umors.Every year, around 11,700 people are diagnosed with a brain tumor. The 5-year survival rate for people with 
           a cancerous brain or CNS tumor is approximately 34 percent for men and 36 percent for women. BrainTumors are classiﬁed
            as: Benign Tumor,Malignant Tumor, Pituitary Tumor, etc. Proper treatment planning and accurate diagnostics should be 
            implemented to improve life expectancy of the patients. The best technique to detect brain tumor is Magnetic Resonance Imaging (MRI).
            Huge amount of data images are generated through the scans. These images are examined by the radiologist. Manual examination
            can be error prone due to the level of complexities involved in brain tumors and their properties. Application of automated
            classiﬁcation techniques using Machine Learning(ML) and Artiﬁcial Intelligence(AI) has consistently shown higher accuracy 
            than manual classiﬁcation.<br /><br /> Hence, we propose performing detection and classiﬁcation by using Deep Learning Algorithms using
            Convolution Neural Network (CNN) and Artiﬁcial Neural Network (ANN) to achieve higher accuracy. The MRI images are classiﬁed 
            using different ’Deep Learning Models of ANN and CNN’. These models have permutations and combinations of different 
            ’Network Parameters’. The model with the highest accuracy is selected and deployed. The aim of the project is to achieve higher
            accuracy and reliability for real world MRI data using AI and ML domain knowledge. Further to accurately indicate positional
            change in tumor and to provide some suggestions for treatment by providing ease of access of the software through cloud and
            mobile applications, web browsers platforms."</p>
        </blockquote>
        <figcaption className="flex items-center justify-center mt-6 space-x-3 rtl:space-x-reverse">
          <div className="flex items-center divide-x-2 rtl:divide-x-reverse divide-white dark:divide-white-700">
            <cite className="pe-1 font-medium text-white">Pramesh</cite>
            <cite className="ps-1 text-middle text-white">CEO at Neuroscan</cite>
            <br />
          </div>
        </figcaption>
      </figure>
      <hr className="my-4 border-white" />
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
