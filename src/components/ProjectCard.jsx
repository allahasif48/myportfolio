import React from "react";

const ProjectCard = ({ title, description, image, link }) => (
  <div className="bg-white shadow-lg rounded-xl p-6">
    <img src={image} alt={title} className="rounded-xl mb-4" />
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-blue-800">{description}</p>
    <a href={link} className="inline-block mt-4 text-blue-600 hover:underline">Read More →</a>
  </div>
);

export default ProjectCard;