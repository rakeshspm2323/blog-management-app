// import Link from 'next/link';
// import { getBlogs, deleteBlog } from '../lib/blogData';
// import Header from '@/components/Header';
// import Footer from '@/components/Footer';
// import Blog from '@/components/Blog';

// export default function Home() {
//   const blogs = getBlogs();

//   return (
//     <>
//     <Header />
//       <div className='container mx-auto'>
//         <div className="flex items-center justify-between my-7 lg:px-0 px-2">
//           <h1 className="md:text-2xl text-md font-bold text-gray-700">Explore Our Latest Blogs</h1>
//           <Link href="/blog" 
//             className="bg-blue-500 hover:bg-blue-400 text-white md:px-4 px-2 py-2 font-medium md:text-sm text-xs rounded-md transition ease-in-out">
//             View All Blogs
//           </Link>
//         </div>
//       </div>
//       <Blog />
//       <Footer />
//     </>
//   );
// }


import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Blog from '@/components/Blog';
import { useEffect, useState } from 'react';

export default function Home() {

  return (
    <>
    <Header />
      <div className='container mx-auto'>
        <div className="flex items-center justify-between my-7 lg:px-0 px-2">
          <h1 className="md:text-2xl text-md font-bold text-gray-700">Explore Our Latest Blogs</h1>
          <Link href="/blog" 
            className="bg-blue-500 hover:bg-blue-400 text-white md:px-4 px-2 py-2 font-medium md:text-sm text-xs rounded-md transition ease-in-out">
            View All Blogs
          </Link>
        </div>
      </div>
      <Blog />
      <Footer />
    </>
  );
}
