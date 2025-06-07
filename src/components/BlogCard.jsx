import React from "react";

const BlogCard = ({ title, summary, image, link }) => (
  <div className="bg-blue-50 border border-blue-100 rounded-xl p-6">
    <img src={image} alt={title} className="rounded-xl mb-4" />
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-blue-800">{summary}</p>
    <a href={link} className="inline-block mt-4 text-blue-600 hover:underline">Read More →</a>
  </div>
);

export default BlogCard;