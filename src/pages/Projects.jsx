import React from 'react';
import ProjectCard from '../components/ProjectCard';
import projects from '../data/projects';

const Projects = () => (
  <section className="py-20 px-4 md:px-12 bg-white text-blue-900">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl font-semibold text-center mb-12">All Projects</h2>
      <div className="grid md:grid-cols-2 gap-10">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  </section>
);

export default Projects;