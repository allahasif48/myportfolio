import React from 'react';
import Hero from '../components/Hero';
import SkillsSection from '../components/SkillsSection';
import ProjectCard from '../components/ProjectCard';
import BlogCard from '../components/BlogCard';
import projects from '../data/projects';
import blogs from '../data/blogs';

const Home = () => {
  return (
    <main className="bg-white text-blue-900">
      <Hero />
      <SkillsSection />

      <section className="py-20 px-4 md:px-12 bg-blue-50" id="projects">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-12">Projects Preview</h2>
          <div className="grid md:grid-cols-2 gap-10">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 md:px-12 bg-white" id="blog">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-12">Blog Preview</h2>
          <div className="grid md:grid-cols-2 gap-10">
            {blogs.map((blog, index) => (
              <BlogCard key={index} {...blog} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;