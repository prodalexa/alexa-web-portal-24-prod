import BlogCard from '@/components/blogs/blog-card'
import Image from 'next/image'
import { title } from 'process'
import React from 'react'

type Props = {}

const Blogs = (props: Props) => {
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
        {blogList.map((blog, idx) => (
          <BlogCard
            key={idx}
            blog={blog}
          />
        ))}
      </div>
    </div>
  )
}

const blogList = [
    {
        title: "A Beginners Roadmap to Mastering Cybersecurity",
        description: "Cybersecurity is a vast field that requires a lot of knowledge and experience to master. Here is a roadmap to help you get started.",
        slug: "a-beginners-roadmap-to-mastering-cybersecurity",
        url: "https://blog.logrocket.com/a-beginners-roadmap-to-mastering-cybersecurity/",
        image: "/blogs/blog.avif",
        date: "May 12, 2021"
    },
    {
        title: "DORM CHEF CHRONICLES",
        description: "A collection of recipes and tips for college students living in dorms.",
        slug: "dorm-chef-chronicles",
        url: "https://blog.logrocket.com/dorm-chef-chronicles/",
        image: "/blogs/blog.avif",
        date: "May 12, 2021"
    },
    {
        title: "Silver Screen Secrets",
        description: "A collection of movie reviews and recommendations.",
        slug: "silver-screen-secrets",
        url: "https://blog.logrocket.com/silver-screen-secrets/",
        image: "/blogs/blog.avif",
        date: "May 12, 2021"
    },
    {
        title: "The Ultimate Guide to Getting Started with React",
        description: "A comprehensive guide to getting started with React.",
        slug: "the-ultimate-guide-to-getting-started-with-react",
        url: "https://blog.logrocket.com/the-ultimate-guide-to-getting-started-with-react/",
        image: "/blogs/blog.avif",
        date: "May 12, 2021"
    },
    {
        title: "The Ultimate Guide to Getting Started with React",
        description: "A comprehensive guide to getting started with React.",
        slug: "the-ultimate-guide-to-getting-started-with-react",
        url: "https://blog.logrocket.com/the-ultimate-guide-to-getting-started-with-react/",
        image: "/blogs/blog.avif",
        date: "May 12, 2021"
    },
    {
        title: "The Ultimate Guide to Getting Started with React",
        description: "A comprehensive guide to getting started with React.",
        slug: "the-ultimate-guide-to-getting-started-with-react",
        url: "https://blog.logrocket.com/the-ultimate-guide-to-getting-started-with-react/",
        image: "/blogs/blog.avif",
        date: "May 12, 2021"
    }
]

export default Blogs