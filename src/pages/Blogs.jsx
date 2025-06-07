import React from 'react';
import BlogCard from '../components/BlogCard';
import blogs from '../data/blogs';

const Blogs = () => (
  <section className="py-20 px-4 md:px-12 bg-white text-blue-900">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl font-semibold text-center mb-12">All Blog Posts</h2>
      <div className="grid md:grid-cols-2 gap-10">
        {blogs.map((blog, index) => (
          <BlogCard key={index} {...blog} />
        ))}
      </div>
    </div>
  </section>
);

export default Blogs;