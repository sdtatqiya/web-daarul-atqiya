import React from 'react'
import CardBlog from './CardBlog'

const Blog = () => {
  return (
    <section className="flex flexCenter overflow-hidden bg-feature-bg bg-center bg-no-repeat py-24">
      <div className=" max-container padding-container relative w-full flex flex-col justify-center items-center">
        <h2 className="mb-12 text-center text-3xl font-bold">Latest articles</h2>

        <div className="grid gap-6 lg:grid-cols-3 xl:gap-x-12">
          <CardBlog />
          <CardBlog />
          <CardBlog />
        </div>
      </div>
    </section>
  );
}

export default Blog