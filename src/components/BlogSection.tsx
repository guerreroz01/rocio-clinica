import React from "react";
import Chip from "./Chip";
import BlogCard from "./BlogCard";
import { articles, consultaImg } from "@/constants";

function BlogSection() {
  return (
    <section className="w-full flex flex-col justify-center items-center py-10 ">
      <Chip
        title="Nuestro Blog"
        href="/"
        classNames="font-semibold text-gray-800 self-center"
      />
      <h3 className="text-5xl text-gray-800 py-10">
        Blogs / <span className="text-active"> Artículos</span>
      </h3>
      <p className="text-lg max-w-lg text-justify text-gray-700">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis
        dolorum explicabo quos voluptatum fugit quas qui at voluptates
      </p>
      <div className="mt-20 w-full max-w-7xl flex flex-col  md:flex-row md:gap-20 justify-between items-center  ">
        {articles.map(({ chip, description, href, image, tag, title }, i) => (
          <BlogCard
            chip={chip}
            description={description}
            href={href}
            image={image}
            tag={tag}
            title={title}
            key={`Blogs-cards-${i}-${title}`}
          />
        ))}
      </div>
    </section>
  );
}

export default BlogSection;
