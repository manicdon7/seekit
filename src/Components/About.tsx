"use client";
import { useEffect } from "react";
import "@/app/globals.css";
import Aos from "aos";
import "aos/dist/aos.css";

const About: React.FC = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

<<<<<<< HEAD
    return (
        <main className="mx-28 pt-28">
            <div className='text-4xl font-anton capitalize font-semibold text-center' data-aos="flip-down">
                why this platform
            </div>
            <div className="pt-10" data-aos="fade-right">
                <h1 className='text-2xl font-semibold'>Motive</h1>
                <p className='text-2xl font-light text-justify text-[#EEEEEE] pt-4'>SeekIt is dedicated to bridging the gap between lost items and their rightful owners. Our mission is to create a community-driven platform where people can easily report and find lost possessions, ensuring valuable items are returned to their owners swiftly and securely.</p>
            </div>
            <div className='grid grid-cols-2 mt-10'>
                <div className="w-full p-52 scale-150">
                    <div className="loader p-28">
                        <span></span>
                    </div>
                    <div>
                        <h1 className="font-semibold text-2xl items-start py-7" data-aos="flip-down">Find your Losings</h1>
                    </div>
                </div>
                <div className=''>
                    <div className='pt-10' data-aos="fade-left">
                        <h1 className='text-2xl font-semibold'>Report Lost Items</h1>
                        <p className='font-light text-[#EEEEEE] pt-2'>Users can quickly create a report for their lost items, including descriptions, photos, and the last known location.</p>
                    </div>
                    <div className='pt-10' data-aos="fade-left">
                        <h1 className='text-2xl font-semibold'>Community Assistance</h1>
                        <p className='font-light text-[#EEEEEE] pt-2'>The platform leverages the power of community by allowing users to browse reports of found items and match them with the reported lost items.</p>
                    </div>
                    <div className='pt-10' data-aos="fade-left">
                        <h1 className='text-2xl font-semibold'>Intelligent Matching</h1>
                        <p className='font-light text-[#EEEEEE] pt-2'>SeekIt uses advanced algorithms to match lost items with found items based on descriptions, photos, and location data.</p>
                    </div>
                    <div className='pt-10' data-aos="fade-left">
                        <h1 className='text-2xl font-semibold'>Secure Communication</h1>
                        <p className='font-light text-[#EEEEEE] pt-2'>Once a match is identified, SeekIt facilitates secure communication between the finder and the owner to arrange for the item&apos;s return.</p>
                    </div>
                    <div className='pt-10' data-aos="fade-left">
                        <h1 className='text-2xl font-semibold'>Reward System</h1>
                        <p className='font-light text-[#EEEEEE] pt-2'>To encourage community participation, SeekIt includes a reward system where users can offer and receive rewards for returning lost items.</p>
                    </div>
                </div>
            </div>
        </main>
    );
}
=======
  return (
    <main className="md:mx-28 py-10 px-5 md:py-28">
      <div
        className="md:text-4xl text-2xl font-anton capitalize font-semibold md:text-center"
        data-aos="flip-down"
      >
        why this platform?
      </div>
      <div className="md:pt-10 pt-5" data-aos="fade-right">
        <h1 className="md:text-2xl font-semibold">Motive</h1>
        <p className="md:text-2xl text-md font-light text-justify text-[#EEEEEE] pt-2 md:pt-4">
          SeekIt is dedicated to bridging the gap between lost items and their
          rightful owners. Our mission is to create a community-driven platform
          where people can easily report and find lost possessions, ensuring
          valuable items are returned to their owners swiftly and securely.
        </p>
      </div>
      <div className="flex flex-col md:flex-row mt-5 md:mt-10">
        <div className="w-full flex flex-col justify-center items-center gap-5 md:p-52 md:scale-150">
          <div className="loader md:p-28">
            <span></span>
          </div>
          <div>
            <h1
              className="font-semibold text-2xl py-3 items-start md:py-7"
              data-aos="flip-down"
            >
              Find your Losings
            </h1>
          </div>
        </div>
        <div className="">
          <div className="md:pt-10 pt-5" data-aos="fade-left">
            <h1 className="md:text-2xl font-semibold">Report Lost Items</h1>
            <p className="font-light text-[#EEEEEE] pt-2">
              Users can quickly create a report for their lost items, including
              descriptions, photos, and the last known location.
            </p>
          </div>
          <div className="md:pt-10 pt-5" data-aos="fade-left">
            <h1 className="md:text-2xl font-semibold">Community Assistance</h1>
            <p className="font-light text-[#EEEEEE] pt-2">
              The platform leverages the power of community by allowing users to
              browse reports of found items and match them with the reported
              lost items.
            </p>
          </div>
          <div className="md:pt-10 pt-5" data-aos="fade-left">
            <h1 className="md:text-2xl font-semibold">Intelligent Matching</h1>
            <p className="font-light text-[#EEEEEE] pt-2">
              SeekIt uses advanced algorithms to match lost items with found
              items based on descriptions, photos, and location data.
            </p>
          </div>
          <div className="md:pt-10 pt-5" data-aos="fade-left">
            <h1 className="md:text-2xl font-semibold">Secure Communication</h1>
            <p className="font-light text-[#EEEEEE] pt-2">
              Once a match is identified, SeekIt facilitates secure
              communication between the finder and the owner to arrange for the
              item&apos;s return.
            </p>
          </div>
          <div className="md:pt-10 pt-5" data-aos="fade-left">
            <h1 className="md:text-2xl font-semibold">Reward System</h1>
            <p className="font-light text-[#EEEEEE] pt-2">
              To encourage community participation, SeekIt includes a reward
              system where users can offer and receive rewards for returning
              lost items.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};
>>>>>>> 5639b55c1dfb8a70b9a8a2311be0f3fbdf6bc211

export default About;
