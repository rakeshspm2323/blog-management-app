import React from 'react'
import Link from 'next/link';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

const index = () => {

  const aboutData = [
    {
      title: "About Us - BlogEase",
      content: (
        <p className="mb-5 mt-2 md:text-base text-para">
          Our goal is to make the PG and hostel rental process quick, transparent, and hassle-free for everyone.
          Welcome to BlogEase – your trusted platform for creating, managing, and sharing blogs effortlessly. 
          Whether you&apos;re a solo blogger, content team, or business looking to expand your online presence, 
          BlogEase is here to simplify your content management journey. Our goal is to make blog publishing fast, 
          organized, and stress-free for everyone.
        </p>
      )
    },
    {
      title: "Who We Are",
      content: (
        <>
        <p className="mt-2 md:text-base text-para">
            BlogEase is more than just a CMS – it&apos;s a smart, intuitive platform built for bloggers, 
            editors, and content creators. With our deep understanding of content workflows and user needs, 
            we help you manage blogs that are consistent, SEO-friendly, and impactful.
        </p>
        <p className="my-2 md:text-base text-para">
            We support content teams and solo creators with features that simplify every step of the process :
        </p>
        <ul className="list-disc ml-8 md:text-base text-para mb-5">
          <li>Creating and organizing blog posts</li>
          <li>Real-time editing and publishing</li>
          <li>SEO optimization tools</li>
          <li>Scheduled publishing</li>
          <li>User roles and collaboration</li>
          <li>Analytics and performance insights</li>
      </ul>
      </>
      )
    },
    {
      title: "Why Choose BlogEase?",
      content: (
        <>
        <p className="mt-2 md:text-base text-para">
        We understand that managing content can be overwhelming – especially when juggling quality, 
        deadlines, and visibility. That&apos;s why BlogEase delivers clarity, control, 
        and efficiency to your blog management process. We stand on three key values :
        </p>
        <ul className="list-disc ml-8 md:text-base text-para mb-5">
          <li>Saving Your Time</li>
          <li>Streamlining Your Workflow</li>
          <li>Helping You Grow Your Audience</li>
        </ul>
      </>
      )
    },
    {
      title: "Who We Serve",
      content: (
        <>
        <p className="mt-2 mb-2 md:text-base text-para">
            BlogEase is built to serve a variety of users across industries :
        </p>
        <ul className="list-disc ml-8 md:text-base text-para">
          <li>Individual bloggers</li>
          <li>Content marketers</li>
          <li>Agencies and publishing teams</li>
          <li>E-commerce websites</li>
          <li>Startups and SMEs</li>
          <li>Educators and course creators</li>
        </ul>
        <p className="my-2 md:text-base text-para mb-5">
            Since our launch, we&apos;ve empowered hundreds of creators to manage content smarter and grow faster – all in one place.        
        </p>
      </>
      )
    },
    {
      title: " Join Our Community",
      content: (
      <>
        <p className="mt-2 md:text-base text-para">
            Whether you&apos;re starting your first blog or managing dozens of posts a month, 
            BlogEase is the all-in-one solution designed to support your growth. 
            Publish smarter, reach wider, and focus on what truly matters – your voice.
        </p>
        <p className="my-2 md:text-base text-para">
            Have questions or want a demo?        
        </p>
        <p className="my-2 md:text-base text-para">
            Feel free to reach out to us anytime – we&apos;re here to help you thrive.       
        </p>
        <p className='mb-5'>
          <span className="font-medium md:text-base text-para">General Inquiries : </span>
          <Link href="mailto: info@indianrooms.com" target="_blank" className="text-teal-700 md:text-base text-para underline underline-offset-2">
            info@blogease.com
          </Link>
        </p>
      </>
      )
    },
  ]
  return (
    <>
        <Header />
        {/* Herosection */}
        <div
          className="md:min-h-[70vh] min-h-[60vh] w-full bg-cover bg-center relative flex items-center justify-center"
          style={{ backgroundImage: "url('/assets/gurugram.jpg')", }}
        >
          <div className="bg-black/70 w-full h-full absolute top-0 left-0 z-0"></div>
          <div className="relative z-10 text-center px-6">
            <h2 className="text-white font-semibold lg:text-[35px] md:text-[34px] text-xl md:mb-6 mb-4 capitalize">
                We Manage Blogs that Build Trust and Engagement
            </h2>
            <p className="text-white capitalize md:text-md text-para">Experience Comfort, Confidence & Care — Wherever You Go</p>
          </div>
        </div>
        {/* About section */}
        <div className="pt-10">
          <h2 className="md:text-2xl text-xl font-semibold text-center md:mb-2 mb-0.5">About Us – BlogEase</h2>
          <div className="md:w-40 w-32 h-1 bg-blue-500 mx-auto mb-10 rounded-full"></div>
        </div>
        <div className="container mx-auto pb-5">
          {aboutData?.map((about, i) => {
            return (
              <>    
                <div key={i} className="md:px-5 px-2 mb-8">
                  <h2 className="md:text-xl text-md font-semibold mb-2">{about.title}</h2>
                  {about.content}
                </div>
              </>
            )
          })}
        </div>
        <Footer />
    </>
  )
}

export default index;


