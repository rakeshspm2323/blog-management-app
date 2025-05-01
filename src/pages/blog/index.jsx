// import {useState} from 'react'
// import Link from "next/link";
// import Header from "@/components/Header";
// import Footer from '@/components/Footer';
// import { getBlogs } from '@/lib/blogData';

// const  BlogPage = () => {
//     const blogs = getBlogs();
//     console.log("posts blog", blogs);
//   const [currentPage, setCurrentPage] = useState(1);
//   const postsPerPage = 4;

//   // Calculate the index of the last post on the current page
//   const lastPostIndex = currentPage * postsPerPage;
//   // Calculate the index of the first post on the current page
//   const firstPostIndex = lastPostIndex - postsPerPage;
//   // Slice the posts to show only the posts for the current page
//   const currentPosts = blogs?.slice().reverse()?.slice(firstPostIndex, lastPostIndex);

//   const handlePageChange = (pageNumber) => {
//     if (pageNumber > 0 && pageNumber <= totalPages) {
//       setCurrentPage(pageNumber);
//     }
//   };
//   const totalPages = Math.ceil(blogs?.length / postsPerPage);

// //   if (isLoading)
// //     return (
// //       <>
// //         <div className="container mx-auto">
// //           <div className="flex items-center justify-between mt-10 mb-5">
// //             <div className="h-10 w-60 bg-gray-300 rounded-md animate-pulse"></div>
// //             <div className="h-10 w-60 bg-gray-300 rounded-md animate-pulse"></div>
// //             <div className="h-10 w-32 bg-gray-300 rounded-md animate-pulse"></div>
// //           </div>

// //           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// //             {[1, 2].map((item) => (
// //               <div
// //                 key={item}
// //                 className="p-6 rounded-lg shadow-md bg-white animate-pulse"
// //               >
// //                 <div>
// //                   <div className="h-6 bg-gray-300 rounded w-3/4 mb-4"></div>
// //                   <div className="h-4 bg-gray-300 rounded w-full mb-2"></div>
// //                   <div className="h-4 bg-gray-300 rounded w-5/6 mb-4"></div>

// //                   <div className="mt-4 space-y-2">
// //                     <div className="h-10 bg-green-100 rounded-md"></div>
// //                     <div className="h-10 bg-yellow-100 rounded-md"></div>
// //                   </div>
// //                 </div>
// //                 <div className="mt-10">
// //                   <div className="h-6 bg-gray-300 rounded w-3/4 mb-4"></div>
// //                   <div className="h-4 bg-gray-300 rounded w-full mb-2"></div>
// //                   <div className="h-4 bg-gray-300 rounded w-5/6 mb-4"></div>

// //                   <div className="mt-4 space-y-2">
// //                     <div className="h-10 bg-green-100 rounded-md"></div>
// //                     <div className="h-10 bg-yellow-100 rounded-md"></div>
// //                   </div>
// //                 </div>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </>
// //     );


//   return (
//     <>
//       <Header />
//       <div className="container mx-auto">
//         <div className="my-7 lg:px-0 px-2">
//           <div className="flex justify-between md:items-center items-start mb-4 ">
//             <h1 className="md:block hidden md:text-2xl text-[17px] font-bold text-gray-700">Our Complete Blog Collection</h1>
//             <h1 className="md:hidden text-xl font-bold text-gray-700">Our Blog Collection</h1>
//             <Link
//               href="/blog/new"
//               className="text-nowrap bg-green-500 hover:bg-green-400 text-white md:px-4 px-2 py-2 font-medium md:text-sm text-xs rounded-md transition ease-in-out"
//             >
//               Create New
//             </Link>
//           </div>

//           <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
//             {currentPosts?.map((post) => (
//               <div key={post.id} className="rounded-md shadow-md hover:shadow-xl border border-gray-100 p-5">
//                 <h2 className="md:text-lg font-semibold capitalize">
//                   {post?.title}
//                 </h2>
//                 <p className="mt-2 md:text-[15px] text-sm">
//                   {post?.content?.charAt(0).toUpperCase() + post?.content?.slice(1)}
//                 </p>
//                 <div className="mt-4 flex flex-col  gap-4">
//                   <Link
//                     href={`/blog/${post.id}`}
//                     className="text-center text-white bg-green-500 hover:bg-green-400 px-7 py-1.5 text-sm font-medium rounded-md shadow-md transition ease-in-out"
//                   >
//                     View
//                   </Link>
//                   <Link
//                     href={`/blog/edit/${post.id}`}
//                     className="text-center text-white bg-yellow-500 hover:bg-yellow-400 px-7 py-1.5 text-sm font-medium rounded-md shadow-md transition ease-in-out"
//                   >
//                     Edit
//                   </Link>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Pagination */}
//           <div className="flex md:justify-end justify-center my-6 text-gray-700 font-medium">
//           {currentPage > 1 && (
//             <button
//               onClick={() => handlePageChange(currentPage - 1)}
//               disabled={currentPage === 1}
//               className="px-3 py-0.5 text-xs border rounded mr-2 cursor-pointer"
//             >
//               Prev..
//             </button>
//           )}
//             {/* <span className="text-sm">{currentPage}</span> */}
//           {currentPage < totalPages && (
//             <button
//               onClick={() => handlePageChange(currentPage + 1)}
//               disabled={currentPage === totalPages}
//               className="px-3 py-0.5 text-xs border rounded cursor-pointer"
//             >
//               Next..
//             </button>
//             )}
//           </div>

//         </div>
//       </div>
//       <Footer />
//     </>
//   );
// }

// export default BlogPage;


import {useEffect, useState} from 'react'
import Link from "next/link";
import Header from "@/components/Header";
import Footer from '@/components/Footer';

const fetchBlog = async () => {
  const res = await fetch("/api/add-blog");
  return await res.json()
}

const  BlogPage = () => {
    const [allBlog, setAllBlog] = useState([]);
useEffect(()=>{
  fetchBlog().then((res)=>{
    console.log("res ===> ", res?.data);
    setAllBlog(res?.data)
  })
},[])

  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 4;

  // Calculate the index of the last post on the current page
  const lastPostIndex = currentPage * postsPerPage;
  // Calculate the index of the first post on the current page
  const firstPostIndex = lastPostIndex - postsPerPage;
  // Slice the posts to show only the posts for the current page
  const currentPosts = allBlog?.slice().reverse()?.slice(firstPostIndex, lastPostIndex);

  const handlePageChange = (pageNumber) => {
    if (pageNumber > 0 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };
  const totalPages = Math.ceil(allBlog?.length / postsPerPage);

//   if (!allBlog)
//     return (
//       <>
//         <div className="container mx-auto">
//           <div className="flex items-center justify-between mt-10 mb-5">
//             <div className="h-10 w-60 bg-gray-300 rounded-md animate-pulse"></div>
//             <div className="h-10 w-60 bg-gray-300 rounded-md animate-pulse"></div>
//             <div className="h-10 w-32 bg-gray-300 rounded-md animate-pulse"></div>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             {[1, 2].map((item) => (
//               <div
//                 key={item}
//                 className="p-6 rounded-lg shadow-md bg-white animate-pulse"
//               >
//                 <div>
//                   <div className="h-6 bg-gray-300 rounded w-3/4 mb-4"></div>
//                   <div className="h-4 bg-gray-300 rounded w-full mb-2"></div>
//                   <div className="h-4 bg-gray-300 rounded w-5/6 mb-4"></div>

//                   <div className="mt-4 space-y-2">
//                     <div className="h-10 bg-green-100 rounded-md"></div>
//                     <div className="h-10 bg-yellow-100 rounded-md"></div>
//                   </div>
//                 </div>
//                 <div className="mt-10">
//                   <div className="h-6 bg-gray-300 rounded w-3/4 mb-4"></div>
//                   <div className="h-4 bg-gray-300 rounded w-full mb-2"></div>
//                   <div className="h-4 bg-gray-300 rounded w-5/6 mb-4"></div>

//                   <div className="mt-4 space-y-2">
//                     <div className="h-10 bg-green-100 rounded-md"></div>
//                     <div className="h-10 bg-yellow-100 rounded-md"></div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </>
//     );


  return (
    <>
      <Header />
      <div className="container mx-auto">
        <div className="my-7 lg:px-0 px-2">
          <div className="flex justify-between md:items-center items-start mb-4 ">
            <h1 className="md:block hidden md:text-2xl text-[17px] font-bold text-gray-700">Our Complete Blog Collection</h1>
            <h1 className="md:hidden text-xl font-bold text-gray-700">Our Blog Collection</h1>
            <Link
              href="/blog/new"
              className="text-nowrap bg-green-500 hover:bg-green-400 text-white md:px-4 px-2 py-2 font-medium md:text-sm text-xs rounded-md transition ease-in-out"
            >
              Create New
            </Link>
          </div>

          <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
            {currentPosts?.map((post) => (
              <div key={post.id} className="rounded-md shadow-md hover:shadow-xl border border-gray-100 p-5">
                <h2 className="md:text-lg font-semibold capitalize">
                  {post?.title}
                </h2>
                <p className="mt-2 md:text-[15px] text-sm">
                  {post?.content?.charAt(0).toUpperCase() + post?.content?.slice(1)}
                </p>
                <div className="mt-4 flex flex-col  gap-4">
                  <Link
                    href={`/blog/${post._id}`}
                    className="text-center text-white bg-green-500 hover:bg-green-400 px-7 py-1.5 text-sm font-medium rounded-md shadow-md transition ease-in-out"
                  >
                    View
                  </Link>
                  <Link
                    href={`/blog/edit/${post._id}`}
                    className="text-center text-white bg-yellow-500 hover:bg-yellow-400 px-7 py-1.5 text-sm font-medium rounded-md shadow-md transition ease-in-out"
                  >
                    Edit
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex md:justify-end justify-center my-6 text-gray-700 font-medium">
          {currentPage > 1 && (
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-3 py-0.5 text-xs border rounded mr-2 cursor-pointer"
            >
              Prev..
            </button>
          )}
            {/* <span className="text-sm">{currentPage}</span> */}
          {currentPage < totalPages && (
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="px-3 py-0.5 text-xs border rounded cursor-pointer"
            >
              Next..
            </button>
            )}
          </div>

        </div>
      </div>
      <Footer />
    </>
  );
}

export default BlogPage;