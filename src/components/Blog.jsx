// import React from "react";
// import Link from 'next/link'
// import { getBlogs } from "@/lib/blogData";

// const Blog = () => {

//         const blogs = getBlogs();
//         console.log("posts blog", blogs);
    
//     // if (isLoading)
//     //     return (
//     //       <>
//     //         <div className="container mx-auto">
//     //           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//     //             {[1, 2].map((item) => (
//     //               <div
//     //                 key={item}
//     //                 className="p-6 rounded-lg shadow-md bg-white animate-pulse"
//     //               >
//     //                 <div>
//     //                   <div className="h-6 bg-gray-300 rounded w-3/4 mb-4"></div>
//     //                   <div className="h-4 bg-gray-300 rounded w-full mb-2"></div>
//     //                   <div className="h-4 bg-gray-300 rounded w-5/6 mb-4"></div>
    
//     //                   <div className="mt-4 flex space-x-2">
//     //                     <div className="w-[50%] h-10 bg-green-100 rounded-md"></div>
//     //                     <div className="w-[50%] h-10 bg-yellow-100 rounded-md"></div>
//     //                   </div>
//     //                 </div>
//     //                 <div className="mt-10">
//     //                   <div className="h-6 bg-gray-300 rounded w-3/4 mb-4"></div>
//     //                   <div className="h-4 bg-gray-300 rounded w-full mb-2"></div>
//     //                   <div className="h-4 bg-gray-300 rounded w-5/6 mb-4"></div>
    
//     //                   <div className="mt-4 flex space-x-2">
//     //                     <div className="w-[50%] h-10 bg-green-100 rounded-md"></div>
//     //                     <div className="w-[50%] h-10 bg-yellow-100 rounded-md"></div>
//     //                   </div>
//     //                 </div>
//     //               </div>
//     //             ))}
//     //           </div>
//     //         </div>
//     //       </>
//     //     );
    
//   return (

//     <div className="container mx-auto">
//         <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 mb-10 lg:px-0 px-2">
//             {blogs?.slice().reverse().slice(0,6).map(post => (
//                 <div key={post.id} className="p-5 rounded-md shadow-md hover:shadow-xl border border-gray-100 ">
//                     <h2 className="md:text-lg font-semibold capitalize">{post?.title}</h2>
//                     <p className="mt-2 md:text-[15px] text-sm"> {post?.content?.charAt(0).toUpperCase() + post?.content?.slice(1)}</p>
//                     <div className="mt-4 flex  gap-4">
//                         <Link href={`/blog/${post?.id}`} 
//                             className="w-[50%] text-center text-white bg-green-500 hover:bg-green-400 px-7 py-1.5 text-sm font-medium rounded-md shadow-md transition ease-in-out"
//                         >
//                             View
//                         </Link>
//                         <Link href={`/blog/edit/${post?.id}`} 
//                             className="w-[50%] text-center text-white bg-yellow-500 hover:bg-yellow-400 px-7 py-1.5 text-sm font-medium rounded-md shadow-md transition ease-in-out"
//                         >
//                             Edit
//                         </Link>                    
//                     </div>
//                 </div>
//             ))}
//         </div>
//     </div>
//   );
// };

// export default Blog;



import React, { useEffect, useState } from "react";
import Link from 'next/link'

const fetchBlog = async () => {
    const res = await fetch("/api/add-blog");
    return await res.json()
  }

const Blog = () => {
    const [allBlog, setAllBlog] = useState([]);
useEffect(()=>{
  fetchBlog().then((res)=>{
    console.log("res ===> ", res?.data);
    setAllBlog(res?.data)
  })
},[])
    
    // if (!allBlog)
    //     return (
    //       <>
    //         <div className="container mx-auto">
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
    
    //                   <div className="mt-4 flex space-x-2">
    //                     <div className="w-[50%] h-10 bg-green-100 rounded-md"></div>
    //                     <div className="w-[50%] h-10 bg-yellow-100 rounded-md"></div>
    //                   </div>
    //                 </div>
    //                 <div className="mt-10">
    //                   <div className="h-6 bg-gray-300 rounded w-3/4 mb-4"></div>
    //                   <div className="h-4 bg-gray-300 rounded w-full mb-2"></div>
    //                   <div className="h-4 bg-gray-300 rounded w-5/6 mb-4"></div>
    
    //                   <div className="mt-4 flex space-x-2">
    //                     <div className="w-[50%] h-10 bg-green-100 rounded-md"></div>
    //                     <div className="w-[50%] h-10 bg-yellow-100 rounded-md"></div>
    //                   </div>
    //                 </div>
    //               </div>
    //             ))}
    //           </div>
    //         </div>
    //       </>
    //     );
    
  return (

    <div className="container mx-auto">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 mb-10 lg:px-0 px-2">
            {allBlog?.slice().reverse().slice(0,6).map(post => (
                <div key={post.id} className="p-5 rounded-md shadow-md hover:shadow-xl border border-gray-100 ">
                    <h2 className="md:text-lg font-semibold capitalize">{post?.title}</h2>
                    <p className="mt-2 md:text-[15px] text-sm"> {post?.content?.charAt(0).toUpperCase() + post?.content?.slice(1)}</p>
                    <div className="mt-4 flex  gap-4">
                        <Link href={`/blog/${post?._id}`} 
                            className="w-[50%] text-center text-white bg-green-500 hover:bg-green-400 px-7 py-1.5 text-sm font-medium rounded-md shadow-md transition ease-in-out"
                        >
                            View
                        </Link>
                        <Link href={`/blog/edit/${post?._id}`} 
                            className="w-[50%] text-center text-white bg-yellow-500 hover:bg-yellow-400 px-7 py-1.5 text-sm font-medium rounded-md shadow-md transition ease-in-out"
                        >
                            Edit
                        </Link>                    
                    </div>
                </div>
            ))}
        </div>
    </div>
  );
};

export default Blog;
