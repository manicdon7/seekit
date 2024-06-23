"use client";
import { useEffect } from 'react';
import '@/app/globals.css';
import Aos from 'aos';
import 'aos/dist/aos.css';

const About: React.FC = () => {
    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);

    return (
        <main className='mx-28 py-28'>
            <div className='text-4xl font-anton capitalize font-semibold text-center' data-aos='flip-down'>
                why this platform
            </div>
            <div className='pt-10' data-aos='fade-right'>
                <h1 className='text-2xl font-semibold'>Motive</h1>
                <p className='text-2xl font-light text-justify text-[#EEEEEE] pt-4'>SeekIt is dedicated to bridging the gap between lost items and their rightful owners. Our mission is to create a community-driven platform where people can easily report and find lost possessions, ensuring valuable items are returned to their owners swiftly and securely.</p>
            </div>
            <div className='grid grid-cols-2 mt-10'>
                <div className='w-full p-52 scale-150'>
                    <div className='loader p-28'>
                        <span></span>
                    </div>
                    <div>
                        <h1 className='font-semibold text-2xl items-start py-7' data-aos='flip-down'>Find your Losings</h1>
                    </div>
                </div>
                <div className=''>
                    <div className='pt-10' data-aos='fade-left'>
                        <h1 className='text-2xl font-semibold'>Report Lost Items</h1>
                        <p className='font-light text-[#EEEEEE] pt-2'>Users can quickly create a report for their lost items, including descriptions, photos, and the last known location.</p>
                    </div>
                    <div className='pt-10' data-aos='fade-left'>
                        <h1 className='text-2xl font-semibold'>Community Assistance</h1>
                        <p className='font-light text-[#EEEEEE] pt-2'>The platform leverages the power of community by allowing users to browse reports of found items and match them with the reported lost items.</p>
                    </div>
                    <div className='pt-10' data-aos='fade-left'>
                        <h1 className='text-2xl font-semibold'>Intelligent Matching</h1>
                        <p className='font-light text-[#EEEEEE] pt-2'>SeekIt uses advanced algorithms to match lost items with found items based on descriptions, photos, and location data.</p>
                    </div>
                    <div className='pt-10' data-aos='fade-left'>
                        <h1 className='text-2xl font-semibold'>Secure Communication</h1>
                        <p className='font-light text-[#EEEEEE] pt-2'>Once a match is identified, SeekIt facilitates secure communication between the finder and the owner to arrange for the item&apos;s return.</p>
                    </div>
                    <div className='pt-10' data-aos='fade-left'>
                        <h1 className='text-2xl font-semibold'>Reward System</h1>
                        <p className='font-light text-[#EEEEEE] pt-2'>To encourage community participation, SeekIt includes a reward system where users can offer and receive rewards for returning lost items.</p>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default About;
