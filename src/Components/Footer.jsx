import Image from "next/image";
import logo from "@/Assets/Seekit_transparent.png";

const Footer = () => {
    return(
        <div className="bg-[#393E46] text-white top-0 sticky z-50 fixed w-full backdrop-filter backdrop-blur-lg shadow-2xl bg-opacity-20">
            <div className="grid grid-cols-3">
            <div className=" mx-10 ">
             <Image src={logo} height={500} width={250} alt="logo"/>
            </div>
            <div className="mx-10">
                <div className="py-4">
                    <h1 className=" text-gray-500 font-bold text-2xl font-anton border-b-2 border-gray-700 mr-72">EXPLORE</h1>
                </div>
                <div>
                   <a href='/lost'><h1 className=" text-gray-400 font-semibold text-xl">Lost</h1></a>
                   <a href='/seek'><h1 className="text-gray-400 font-semibold text-xl">Seek</h1></a>
                   <a href='/found'><h1 className="text-gray-400 font-semibold text-xl">Found</h1></a>
                   <a href='/myposts'><h1 className=" text-gray-400 font-semibold text-xl">My post</h1></a>
                </div>
            </div>
            <div className="mx-10">
                <div className="py-4">
                    <h1 className="font-anton text-gray-500 font-bold text-2xl border-b-2 border-gray-700 mr-80">LEGAL</h1>
                </div>
                <div>
                    <a href='#'><h1 className=" text-gray-400 font-semibold text-xl ">Terms of use</h1></a>
                    <a href='#'><h1 className=" text-gray-400 font-semibold text-xl ">Privacy policy</h1></a>
                    <a href='#'><h1 className=" text-gray-400 font-semibold text-xl ">Cookie policy</h1></a>
                    <a href='#'><h1 className=" text-gray-400 font-semibold text-xl ">Blog</h1></a>
                </div>
            </div>
            </div>
            <div className="bg-[#393E46] text-white top-0 sticky z-50 fixed w-full backdrop-filter backdrop-blur-lg shadow-2xl bg-opacity-20">
            <div className="">
                <h1 className="flex justify-center text-xl py-2 text-gray-400">&copy; 2024 Seekit. All rights reserved.</h1>
            </div>
            </div>
        </div>
    )

}
export default Footer;