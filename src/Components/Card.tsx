import Map from "./Map";
import Aos from "aos";
import "aos/dist/aos.css";

const Card : React.FC = () => {
return(
    <div className="grid grid-cols-2 my-20 ">
        <div className="ml-32">
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
                    <p className='font-light text-[#EEEEEE] pt-2'>Provides additional context and details about each found item's location.</p>
                </div>
            </div>
            <div className="ml-40 mt-40" data-aos="zoom-in">
                <Map/>
                <div>
                    <h1 className="font-semibold text-4xl pt-32 font-anton">Found Ur Things</h1>
                </div>
            </div>
    </div>
)
}
export default Card;