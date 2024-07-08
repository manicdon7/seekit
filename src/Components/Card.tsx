import Map from "./Map";
import Aos from "aos";
import "aos/dist/aos.css";

const Card: React.FC = () => {
    return (
        <div>
            <div className="text-4xl ">
                <h1 className="text-center my-10 lg:my-0 mx-2">Community-Driven Lost & Found Platform</h1>
            </div>
            <div className="grid lg:grid-cols-2 grid-cols-1 my-10 ">
                <div className="lg:ml-32 mx-5">
                    <div className='pt-10' data-aos="fade-right">
                        <h1 className='text-2xl font-semibold'>Location Awareness</h1>
                        <p className='font-light text-[#EEEEEE] pt-2'>Seekit includes a map feature that displays where found items were located.</p>
                    </div>
                    <div className="pt-10" data-aos="fade-right">
                        <h1 className='text-2xl font-semibold'>Visual Context</h1>
                        <p className='font-light text-[#EEEEEE] pt-2'>Users can visually see where items were found on an interactive map interface.</p>
                    </div>
                    <div className="pt-10" data-aos="fade-right">
                        <h1 className='text-2xl font-semibold'>Enhanced Search</h1>
                        <p className='font-light text-[#EEEEEE] pt-2'>Allows users to search for lost items based on geographical proximity.</p>
                    </div>
                    <div className="pt-10" data-aos="fade-right">
                        <h1 className='text-2xl font-semibold'>User Interaction</h1>
                        <p className='font-light text-[#EEEEEE] pt-2'>Enables users to explore and understand the geographic distribution of found items.</p>
                    </div>
                    <div className="pt-10" data-aos="fade-right">
                        <h1 className='text-2xl font-semibold'>Intuitive Navigation</h1>
                        <p className='font-light text-[#EEEEEE] pt-2'>Intuitive controls for zooming, panning, and interacting with the map.</p>
                    </div>
                    <div className="pt-10" data-aos="fade-right">
                        <h1 className='text-2xl font-semibold'>Information Access</h1>
                        <p className='font-light text-[#EEEEEE] pt-2'>Provides additional context and details about each found item&apos;s location.</p>
                    </div>
                </div>
                <div className="lg:ml-40 mx-10 lg:mt-40 mt-10" data-aos="zoom-in">
                    <Map />
                    <div>
                        <h1 className="font-semibold text-4xl lg:pt-32 pt-5 font-anton">Found Ur Things</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Card;