import React from "react";
import ProjectCard from "./ProjectCard";
import bannerImg1 from "../../assets/banner1.jpg"; // Import banner images for each project
import bannerImg2 from "../../assets/banner2.png"; 
import bannerImg3 from "../../assets/banner3.png";
import pdf from "../../assets/dbsales.pdf";


const Projects = () => {
  return (
    <div id="Projects" className="p-10 md:p-24 text-white">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Projects</h1>
      <div className="py-12 px-8 flex flex-wrap gap-5">
        <ProjectCard
          title="Online Chatting Website"
          main="An online chatting website allows users to communicate in real-time using easily accessible web interfaces."
          demoLink="https://your-demo-link.com"
          sourceCodeLink="https://github.com/YashLande25/online_chat.github.io"
          bannerImg={bannerImg1} // Pass the appropriate banner image
        />
        <ProjectCard
          title="Field Project in Data Science"
          main="Created interactive dashboard for YASH SEA FOOD to track and analyze sales data."
          demoLink="https://your-demo-link.com"
          sourceCodeLink={pdf}
          bannerImg={bannerImg2} // Another banner image
        />
        <ProjectCard
          title="FarmChain – Blockchain in Agriculture"
          main="Developed a decentralized trading platform for agriculture using Ethereum blockchain."
          demoLink="https://your-demo-link.com"
          sourceCodeLink="https://github.com/YashLande25/FarmChain"
          bannerImg={bannerImg3} // Another banner image
        />
      </div>
    </div>
  );
};

export default Projects;
