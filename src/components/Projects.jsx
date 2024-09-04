import React from "react";
import Project from "./Project";

const projectImage =
  "https://www.nopio.com/wp-content/uploads/2016/05/web-development.jpg";

export default function Projects() {
  return (
    <div id="projects" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e] ">
        Projects
      </h1>
      <p className="text-center py-8">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis enim
        provident suscipit incidunt explicabo ratione, sed nostrum vel? Nulla
        aperiam earum, nihil possimus magni rem est iusto amet ullam quasi!
      </p>
      <div className="grid sm:grid-cols-2 gap-12">
        <Project img={projectImage} title="Crypto App" />
        <Project img={projectImage} title="Propery App" />
        <Project img={projectImage} title="Netflix App" />
        <Project img={projectImage} title="Twitch App" />
      </div>
    </div>
  );
}
