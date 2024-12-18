import React from "react";
import { FaCss3, FaFigma, FaHtml5, FaJs, FaReact,FaJava, FaPython,FaNodeJs  } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { SiMysql, SiPowerbi } from 'react-icons/si';
import tifr from "../../assets/tifr-removebg-preview.png";


const Experience = () => {
  return (
    <div id="Experience" className="p-10 md:p-24">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Skills & Internship</h1>
      <div className="flex flex-wrap items-center justify-around">
        <div className="flex flex-wrap md:w-2/5 gap-8 md:p-12 py-10 text-white">
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaJava color="#007396" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaPython color="#3776AB" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <SiMysql color="#4479A1" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <SiPowerbi color="#F2C811" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaHtml5 color="#E34F26" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaCss3 color="#1572B6" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaJs color="#F7DF1E" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaReact color="#61DAFB" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaNodeJs color="#68A063" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <SiMongodb color="#47A248" size={50} />
          </span>
        </div>
        <div>
          <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center">
          <img src={tifr} alt="TIFR Logo" className="w-22 h-12" />          
          <span className="text-white">
              <h2 className="leading-tight">Tata institute of fundamental research</h2>
              <p className="text-sm leading-tight font-thin">
                Project titled – TIFR sports club wesite
              </p>
              <ul className="text-sm p-2">
                <li>- using Php, Html, Css, Javascript, SQL</li>
                <li>- Worked on a project in STCS (School of Technology and Computer Science) TIFR.</li>
              </ul>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
