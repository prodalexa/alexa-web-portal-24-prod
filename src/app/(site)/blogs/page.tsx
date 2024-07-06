import BlogCard from '@/components/blogs/blog-card'
import { getAllBlogs } from '@/sanity/data/blog-data'
import Image from 'next/image'
import React from 'react'

type Props = {}

const Blogs = async (props: Props) => {
  const blogs = await getAllBlogs();
  return (
    <div className="flex flex-col gap-4 p-8 md:p-16 lg:px-20">
      <div className="text-5xl font-bold text-center text-white flex flex-col items-start justify-center">
        <h1 className="bg-gradient-to-r from-[#31B553] to-[#0AA294] bg-clip-text text-transparent">
          Our Blogs
        </h1>
        <Image
          src="hero-sep.svg"
          height={10}
          width={300}
          alt="Separator"
          className="mt-5 pl-14 items-center justify-center justify-items-center place-items-center"
        />
      </div>
      <h2 className="text-lg text-white">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </h2>
      <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog, idx) => (
          <BlogCard
            key={idx}
            blog={blog}
          />
        ))}
      </div>
    </div>
  )
}

export default Blogs