"use client";
import { useEffect } from "react";
import About from "@/components/About";
import Navbar from "@/components/Navbar";
import "@/app/globals.css";
import Aos from "aos";
import "aos/dist/aos.css";

const words = [
  "Reunited!",
  "Found!",
  "Discovered!",
  "Eureka!",
  "Gotcha!",
  "Located!",
  "Recovered!",
  "Restored!",
  "Secured!",
  "Spotted!",
];

const electronVariant = {
  initial: {
    opacity: 0,
    scale: 0.5,
  },
  animate: (i: number) => ({
    opacity: 0.5,
    scale: 1,
    x: [
      80 * Math.cos((i / words.length) * 2 * Math.PI),
      200 * Math.cos((i / words.length) * 2 * Math.PI),
      80 * Math.cos((i / words.length) * 2 * Math.PI),
    ],
    y: [
      80 * Math.sin((i / words.length) * 2 * Math.PI),
      200 * Math.sin((i / words.length) * 2 * Math.PI),
      80 * Math.sin((i / words.length) * 2 * Math.PI),
    ],
    transition: {
      duration: 8,
      repeat: Infinity,
      repeatType: "loop",
      delay: i * 0.2,
    },
  }),
};

const Home: React.FC = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div className="font-anton bg-[#232931]">
      <main className="text-white">
        <Navbar />
        <div>
          <h1
            className="font-semibold text-4xl md:text-6xl text-center py-7 font-anton text-white pt-28"
            data-aos="flip-down"
          >
            Seek It
          </h1>
        </div>
        <div className="flex px-5 flex-col md:flex-row gap-5 items-center md:mt-20 md:mx-28">
          <div className="">
            <div className="md:space-y-7 md:ml-20" data-aos="fade-right">
              <h1 className="text-xl md:text-4xl font-anton font-semibold">
                Reuniting You with Your Lost Treasures
              </h1>
              <p className="font-light font-sans md:text-xl text-[#EEEEEE]">
                Seekit helps you find lost items quickly and efficiently. Post
                and browse listings of lost and found belongings with ease.
                Reconnect with your cherished possessions and support our
                community.
              </p>
            </div>
          </div>
          <div className=" md:pl-60 flex flex-col items-center gap-5 justify-center md:space-y-8 text-center md:text-left">
            <svg
              className="md:ml-16 "
              viewBox="0 0 160 160"
              width="160px"
              height="160px"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="grad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#000"></stop>
                  <stop offset="100%" stopColor="#fff"></stop>
                </linearGradient>
                <mask id="mask1">
                  <rect
                    x="0"
                    y="0"
                    width="160"
                    height="160"
                    fill="url(#grad)"
                  ></rect>
                </mask>
                <mask id="mask2">
                  <rect
                    x="28"
                    y="28"
                    width="104"
                    height="104"
                    fill="url(#grad)"
                  ></rect>
                </mask>
              </defs>

              <g>
                <g className="pl__ring-rotate">
                  <circle
                    className="pl__ring-stroke"
                    cx="80"
                    cy="80"
                    r="72"
                    fill="none"
                    stroke="hsl(223,90%,55%)"
                    strokeWidth="16"
                    strokeDasharray="452.39 452.39"
                    strokeDashoffset="452"
                    strokeLinecap="round"
                    transform="rotate(-45,80,80)"
                  ></circle>
                </g>
              </g>
              <g mask="url(#mask1)">
                <g className="pl__ring-rotate">
                  <circle
                    className="pl__ring-stroke"
                    cx="80"
                    cy="80"
                    r="72"
                    fill="none"
                    stroke="hsl(193,90%,55%)"
                    strokeWidth="16"
                    strokeDasharray="452.39 452.39"
                    strokeDashoffset="452"
                    strokeLinecap="round"
                    transform="rotate(-45,80,80)"
                  ></circle>
                </g>
              </g>

              <g>
                <g
                  strokeWidth="4"
                  strokeDasharray="12 12"
                  strokeDashoffset="12"
                  strokeLinecap="round"
                  transform="translate(80,80)"
                >
                  <polyline
                    className="pl__tick"
                    stroke="hsl(223,10%,90%)"
                    points="0,2 0,14"
                    transform="rotate(-135,0,0) translate(0,40)"
                  ></polyline>
                  <polyline
                    className="pl__tick"
                    stroke="hsl(223,10%,90%)"
                    points="0,2 0,14"
                    transform="rotate(-90,0,0) translate(0,40)"
                  ></polyline>
                  <polyline
                    className="pl__tick"
                    stroke="hsl(223,10%,90%)"
                    points="0,2 0,14"
                    transform="rotate(-45,0,0) translate(0,40)"
                  ></polyline>
                  <polyline
                    className="pl__tick"
                    stroke="hsl(223,10%,90%)"
                    points="0,2 0,14"
                    transform="rotate(0,0,0) translate(0,40)"
                  ></polyline>
                  <polyline
                    className="pl__tick"
                    stroke="hsl(223,10%,90%)"
                    points="0,2 0,14"
                    transform="rotate(45,0,0) translate(0,40)"
                  ></polyline>
                  <polyline
                    className="pl__tick"
                    stroke="hsl(223,10%,90%)"
                    points="0,2 0,14"
                    transform="rotate(90,0,0) translate(0,40)"
                  ></polyline>
                  <polyline
                    className="pl__tick"
                    stroke="hsl(223,10%,90%)"
                    points="0,2 0,14"
                    transform="rotate(135,0,0) translate(0,40)"
                  ></polyline>
                  <polyline
                    className="pl__tick"
                    stroke="hsl(223,10%,90%)"
                    points="0,2 0,14"
                    transform="rotate(180,0,0) translate(0,40)"
                  ></polyline>
                </g>
              </g>
              <g mask="url(#mask1)">
                <g
                  strokeWidth="4"
                  strokeDasharray="12 12"
                  strokeDashoffset="12"
                  strokeLinecap="round"
                  transform="translate(80,80)"
                >
                  <polyline
                    className="pl__tick"
                    stroke="hsl(223,90%,80%)"
                    points="0,2 0,14"
                    transform="rotate(-135,0,0) translate(0,40)"
                  ></polyline>
                  <polyline
                    className="pl__tick"
                    stroke="hsl(223,90%,80%)"
                    points="0,2 0,14"
                    transform="rotate(-90,0,0) translate(0,40)"
                  ></polyline>
                  <polyline
                    className="pl__tick"
                    stroke="hsl(223,90%,80%)"
                    points="0,2 0,14"
                    transform="rotate(-45,0,0) translate(0,40)"
                  ></polyline>
                  <polyline
                    className="pl__tick"
                    stroke="hsl(223,90%,80%)"
                    points="0,2 0,14"
                    transform="rotate(0,0,0) translate(0,40)"
                  ></polyline>
                  <polyline
                    className="pl__tick"
                    stroke="hsl(223,90%,80%)"
                    points="0,2 0,14"
                    transform="rotate(45,0,0) translate(0,40)"
                  ></polyline>
                  <polyline
                    className="pl__tick"
                    stroke="hsl(223,90%,80%)"
                    points="0,2 0,14"
                    transform="rotate(90,0,0) translate(0,40)"
                  ></polyline>
                  <polyline
                    className="pl__tick"
                    stroke="hsl(223,90%,80%)"
                    points="0,2 0,14"
                    transform="rotate(135,0,0) translate(0,40)"
                  ></polyline>
                  <polyline
                    className="pl__tick"
                    stroke="hsl(223,90%,80%)"
                    points="0,2 0,14"
                    transform="rotate(180,0,0) translate(0,40)"
                  ></polyline>
                </g>
              </g>

              <g>
                <g transform="translate(64,28)">
                  <g className="pl__arrows" transform="rotate(45,16,52)">
                    <path
                      fill="hsl(3,90%,55%)"
                      d="M17.998,1.506l13.892,43.594c.455,1.426-.56,2.899-1.998,2.899H2.108c-1.437,0-2.452-1.473-1.998-2.899L14.002,1.506c.64-2.008,3.356-2.008,3.996,0Z"
                    ></path>
                    <path
                      fill="hsl(223,10%,90%)"
                      d="M14.009,102.499L.109,58.889c-.453-1.421,.559-2.889,1.991-2.889H29.899c1.433,0,2.444,1.468,1.991,2.889l-13.899,43.61c-.638,2.001-3.345,2.001-3.983,0Z"
                    ></path>
                  </g>
                </g>
              </g>
              <g mask="url(#mask2)">
                <g transform="translate(64,28)">
                  <g className="pl__arrows" transform="rotate(45,16,52)">
                    <path
                      fill="hsl(333,90%,55%)"
                      d="M17.998,1.506l13.892,43.594c.455,1.426-.56,2.899-1.998,2.899H2.108c-1.437,0-2.452-1.473-1.998-2.899L14.002,1.506c.64-2.008,3.356-2.008,3.996,0Z"
                    ></path>
                    <path
                      fill="hsl(223,90%,80%)"
                      d="M14.009,102.499L.109,58.889c-.453-1.421,.559-2.889,1.991-2.889H29.899c1.433,0,2.444,1.468,1.991,2.889l-13.899,43.61c-.638,2.001-3.345,2.001-3.983,0Z"
                    ></path>
                  </g>
                </g>
              </g>
            </svg>
            <div className="">
              <h1 className="md:text-3xl text-xl font-anton font-normal">
                Found Your Lost Things
              </h1>
            </div>
          </div>
        </div>
        <div>
          <About />
        </div>
      </main>
    </div>
  );
};

export default Home;
