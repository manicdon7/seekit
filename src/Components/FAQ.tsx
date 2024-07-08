"use client";
import { useEffect } from 'react';
import '@/app/globals.css';
import Aos from 'aos';
import 'aos/dist/aos.css';

const FAQ: React.FC = () => {
    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);
    return (
        <div className='mx-10 my-20'>

            <div className="flex gap-6 justify-center py-10" data-aos="flip-down">
                <div>
                    <button className="faq-button">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                            <path
                                d="M80 160c0-35.3 28.7-64 64-64h32c35.3 0 64 28.7 64 64v3.6c0 21.8-11.1 42.1-29.4 53.8l-42.2 27.1c-25.2 16.2-40.4 44.1-40.4 74V320c0 17.7 14.3 32 32 32s32-14.3 32-32v-1.4c0-8.2 4.2-15.8 11-20.2l42.2-27.1c36.6-23.6 58.8-64.1 58.8-107.7V160c0-70.7-57.3-128-128-128H144C73.3 32 16 89.3 16 160c0 17.7 14.3 32 32 32s32-14.3 32-32zm80 320a40 40 0 1 0 0-80 40 40 0 1 0 0 80z"
                            ></path>
                        </svg>
                    </button>
                </div>
                <div>
                    <h1 className="font-anton font-semibold pt-4 text-3xl">FAQ! Need Help ?</h1>
                    <h1 className='font-anton font-medium pl-6'>We&apos;ve Got You Covered!</h1>
                </div>
            </div>

            {/* <div>
                <div className='flex pt-10 pb-20 justify-center gap-6 pr-20'>
                    <div>
                        <h1 className='text-lg text-white pt-2' data-aos="fade-right">
                            Ask Your Questions
                        </h1>
                    </div>
                    <div>
                        <svg data-aos="flip-down" className='pt-2' xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 60 50"><path fill="none" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m50 8l7 9m0 0l-7 8m7-8H3" /></svg>
                    </div>
                    <div>
                        <input
                            className='w-96 font-anton font-medium text-lg text-[#393E46] py-2 px-4 rounded-lg'
                            data-aos="flip-down"
                            type='search'
                            placeholder='Search Here'
                        />
                    </div>
                    <div>
                        <button className='border-2 bg-[#4ECCA3] border-none py-3 px-4 font-semibold rounded-lg hover:bg-[#378a70]' data-aos="fade-left" >Search</button>
                    </div>
                </div>
            </div> */}

            <div className='flex gap-8 space-x-16 justify-center'>
            <div className="card">
                <div className="bg">
                    <div className='flex justify-center pt-10'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 36 36"><path fill="white" d="M30.86 20.94a4.7 4.7 0 0 1 1.86.64h.05a15.1 15.1 0 0 0-.61-8.37a1 1 0 1 0-1.87.69a13.2 13.2 0 0 1 .57 7.04m-4.53 7.64a13 13 0 0 1-6.07 2.82a1 1 0 1 0 .17 2h.18a15.16 15.16 0 0 0 7.21-3.4v-.07a4.7 4.7 0 0 1-1.49-1.35m-10.71 2.76a13.3 13.3 0 0 1-4.29-1.61a15 15 0 0 1-1.63-1.11A4.7 4.7 0 0 1 8.24 30a16 16 0 0 0 2.07 1.48a15.4 15.4 0 0 0 4.94 1.86h.19a1 1 0 0 0 .18-2M4.56 21.15q.3 0 .6-.09A13 13 0 0 1 5.7 14a1 1 0 0 0-1.88-.69a15 15 0 0 0-.56 8.43a4.8 4.8 0 0 1 1.3-.59" /><path fill="white" d="M31.9 23a3.2 3.2 0 0 0-2.43-.42a3.3 3.3 0 0 0-1.4.77l-3.87-2.24a6.87 6.87 0 0 0-2.77-8.43l-.11-.07a6.7 6.7 0 0 0-2.42-.81V8a3.23 3.23 0 0 0 1.88-1.5A3.3 3.3 0 0 0 19.65 2a3.15 3.15 0 0 0-2.42-.32a3.24 3.24 0 0 0-2 1.51a3.3 3.3 0 0 0 1.13 4.46a3 3 0 0 0 .74.35v3.8a6.63 6.63 0 0 0-4.86 3.28a6.85 6.85 0 0 0-.42 6l-4 2.29a4 4 0 0 0-.45-.37A3.2 3.2 0 0 0 3 24.21a3.3 3.3 0 0 0 1.1 4.46a3.2 3.2 0 0 0 1.65.46a3 3 0 0 0 .78-.1a3.25 3.25 0 0 0 2.34-3.94v-.17l3.88-2.24a7 7 0 0 0 1.89 1.71a6.49 6.49 0 0 0 8.73-1.7l3.83 2.21a3.29 3.29 0 0 0 1.45 3.64A3.18 3.18 0 0 0 33 27.41A3.3 3.3 0 0 0 31.9 23M8.05 10a13 13 0 0 1 5.35-3.77a5 5 0 0 1-.17-2.07a15.15 15.15 0 0 0-6.7 4.51A1 1 0 0 0 8.05 10" /><path fill="white" d="M24.67 7.23A13.1 13.1 0 0 1 27.93 10a1 1 0 1 0 1.52-1.3a15 15 0 0 0-3.76-3.2a16 16 0 0 0-2.94-1.33a4.8 4.8 0 0 1-.15 2.06a14 14 0 0 1 2.07 1" /><path fill="none" d="M0 0h36v36H0z" /></svg>
                    </div>
                    <div className='pt-10 flex justify-evenly px-2'>
                        <div>
                        <h1 className='text-lg text-white font-medium'>How to Post Founded Things in Seekit ? </h1> 
                        </div>
                        <div className='pt-16'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 8 8"><path fill="white" d="M5 1v2H0v1h5v2l3-2.53z"/></svg> 
                        </div>
                    </div>
                </div>
                <div className="blob"></div>
            </div>
            <div className="card">
                <div className="bg">
                    <div className='flex justify-center pt-10'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 14 14"><path fill="white" fill-rule="evenodd" d="M5.763 2.263A1.75 1.75 0 0 1 8.75 3.5h-3.5c0-.464.184-.91.513-1.237M3.75 3.5a3.25 3.25 0 0 1 6.5 0h1.25A2.5 2.5 0 0 1 14 6v5.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 0 11.5V6a2.5 2.5 0 0 1 2.5-2.5zm2.915 3.067A.875.875 0 1 1 7 8.25a.625.625 0 0 0-.625.625v1a.625.625 0 1 0 1.25 0v-.469a2.125 2.125 0 1 0-2.75-2.031a.625.625 0 1 0 1.25 0a.875.875 0 0 1 .54-.808m.337 6.308a.75.75 0 1 1 0-1.5a.75.75 0 0 1 0 1.5" clip-rule="evenodd" /></svg>
                        
                    </div>
                    <div className='pt-10 flex justify-evenly px-2'>
                        <div>
                        <h1 className='text-lg text-white font-medium '>How to Post Losted Things in Seekit ? </h1> 
                        </div>
                        <div className='pt-16'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 8 8"><path fill="white" d="M5 1v2H0v1h5v2l3-2.53z"/></svg> 
                        </div>
                    </div>
                </div>
                <div className="blob"></div>
            </div>
            <div className="card">
                <div className="bg">
                    <div className='flex justify-center pt-10'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 24 24"><path fill="none" stroke="white" stroke-width="2" d="M18.5 21a4.5 4.5 0 1 0 0-9a4.5 4.5 0 0 0 0 9ZM10 7h4M1.5 14.5S5.5 5 6 4s1.5-1 2-1s2 0 2 2v11m-4.5 5a4.5 4.5 0 1 1 0-9a4.5 4.5 0 0 1 0 9Zm17-6.5S18.5 5 18 4s-1.5-1-2-1s-2 0-2 2v11m-4 0h4" /></svg>
                    </div>
                    <div className='pt-10 flex justify-evenly px-2'>
                        <div>
                        <h1 className='text-lg text-white font-medium'>How to Seek Things in Seekit ? </h1> 
                        </div>
                        <div className='pt-16'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 8 8"><path fill="white" d="M5 1v2H0v1h5v2l3-2.53z"/></svg> 
                        </div>
                    </div>
                </div>
                <div className="blob"></div>
            </div>
            <div className="card">
                <div className="bg">
                    <div className='flex justify-center pt-10'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 24 24"><path fill="white" d="M15 3H5c-1.11 0-2 .89-2 2v5.82a6.505 6.505 0 0 1 9.1.08a6.525 6.525 0 0 1 0 9.2c-.36.35-.75.64-1.16.9H19c1.11 0 2-.89 2-2V9zm-1 7V4.5l5.5 5.5zm-6.5 1C5 11 3 13 3 15.5c0 .88.25 1.71.69 2.4L.61 21L2 22.39l3.12-3.07c.69.43 1.51.68 2.38.68c2.5 0 4.5-2 4.5-4.5S10 11 7.5 11m0 7a2.5 2.5 0 0 1 0-5a2.5 2.5 0 0 1 0 5"/></svg>
                    </div>
                    <div className='pt-10 flex justify-evenly px-2'>
                        <div>
                        <h1 className='text-lg text-white font-medium'>Where to See Myposts in Seekit ? </h1> 
                        </div>
                        <div className='pt-16'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 8 8"><path fill="white" d="M5 1v2H0v1h5v2l3-2.53z"/></svg> 
                        </div>
                    </div>
                </div>
                <div className="blob"></div>
            </div>
            </div>
            
        </div>
    )
}

export default FAQ;
