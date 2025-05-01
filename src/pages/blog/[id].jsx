// // import { Router, useRouter } from 'next/router';
// // import { deleteBlog, getBlog } from '../../lib/blogData';
// // import Header from '@/components/Header';
// // import Footer from '@/components/Footer';

// // export default function ViewBlog() {

// //   const { query, push } = useRouter();
// //   const blog = getBlog(query.id);
  
// //   const handleDelete = async () => {
// //     confirm(`Are you want to delete the blog post.`)
// //     await deleteBlog(query?.id)
// //     push('/blog')
// //   };

// //   if (!blog)
// //     return (
// //       <>
// //         <div className="container mx-auto">
// //           <div className="flex items-center justify-between my-10">
// //             <div className="h-10 w-60 bg-gray-300 rounded-md animate-pulse"></div>
// //             <div className="h-10 w-60 bg-gray-300 rounded-md animate-pulse"></div>
// //             <div className="h-10 w-32 bg-gray-300 rounded-md animate-pulse"></div>
// //           </div>

// //           <div className="grid grid-cols-1 gap-6">
// //               <div className="p-6 rounded-lg shadow-md bg-white animate-pulse"
// //               >
// //                 <div>
// //                   <div className="h-10 bg-gray-300 rounded w-3/4 mb-4"></div>
// //                   <div className="h-4 bg-gray-300 rounded w-full mb-2"></div>
// //                   <div className="h-4 bg-gray-300 rounded w-5/6 mb-4"></div>
// //                   <div className="h-4 bg-gray-300 rounded w-5/6 mb-4"></div>

// //                   <div className="mt-4 flex justify-end space-x-2">
// //                     <div className="w-[50%] h-10 bg-red-100 rounded-md"></div>
// //                   </div>
// //                 </div>
// //               </div>
// //           </div>
// //         </div>
// //       </>
// //     );
  
// //   return (
// //     <>
// //       <Header />
// //       <div className="container mx-auto">
// //         <div className="p-8">
// //           <h1 className="md:text-2xl text-lg font-bold mb-4 capitalize">{blog?.title}</h1>
// //           <p className="mb-6 md:text-[15px] text-sm">{blog?.content.charAt(0).toUpperCase() + blog?.content.slice(1)}</p>
// //           <div className='flex justify-end'>
// //             <button onClick={handleDelete} className=" bg-red-500 hover:bg-red-400 text-white  px-5 py-2 text-sm font-medium rounded-md shadow-md transition ease-in-out cursor-pointer">
// //               Delete Post
// //             </button>
// //           </div>
// //         </div>
// //       </div>
// //       <Footer />
// //     </>
// //   )
// // }


// import { Router, useRouter } from 'next/router';
// import { deleteBlog, getBlog } from '../../lib/blogData';
// import Header from '@/components/Header';
// import Footer from '@/components/Footer';

// export default function ViewBlog() {

//   const { query, push } = useRouter();
//   const blog = getBlog(query.id);
  
//   const handleDelete = async () => {
//     confirm(`Are you want to delete the blog post.`)
//     await deleteBlog(query?.id)
//     push('/blog')
//   };

//   if (!blog)
//     return (
//       <>
//         <div className="container mx-auto">
//           <div className="flex items-center justify-between my-10">
//             <div className="h-10 w-60 bg-gray-300 rounded-md animate-pulse"></div>
//             <div className="h-10 w-60 bg-gray-300 rounded-md animate-pulse"></div>
//             <div className="h-10 w-32 bg-gray-300 rounded-md animate-pulse"></div>
//           </div>

//           <div className="grid grid-cols-1 gap-6">
//               <div className="p-6 rounded-lg shadow-md bg-white animate-pulse"
//               >
//                 <div>
//                   <div className="h-10 bg-gray-300 rounded w-3/4 mb-4"></div>
//                   <div className="h-4 bg-gray-300 rounded w-full mb-2"></div>
//                   <div className="h-4 bg-gray-300 rounded w-5/6 mb-4"></div>
//                   <div className="h-4 bg-gray-300 rounded w-5/6 mb-4"></div>

//                   <div className="mt-4 flex justify-end space-x-2">
//                     <div className="w-[50%] h-10 bg-red-100 rounded-md"></div>
//                   </div>
//                 </div>
//               </div>
//           </div>
//         </div>
//       </>
//     );
  
//   return (
//     <>
//       <Header />
//       <div className="container mx-auto">
//         <div className="p-8">
//           <h1 className="md:text-2xl text-lg font-bold mb-4 capitalize">{blog?.title}</h1>
//           <p className="mb-6 md:text-[15px] text-sm">{blog?.content.charAt(0).toUpperCase() + blog?.content.slice(1)}</p>
//           <div className='flex justify-end'>
//             <button onClick={handleDelete} className=" bg-red-500 hover:bg-red-400 text-white  px-5 py-2 text-sm font-medium rounded-md shadow-md transition ease-in-out cursor-pointer">
//               Delete Post
//             </button>
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </>
//   )
// }



// import { Router, useRouter } from 'next/router';
// import { deleteBlog, getBlog } from '../../lib/blogData';
// import Header from '@/components/Header';
// import Footer from '@/components/Footer';

// export default function ViewBlog() {

//   const { query, push } = useRouter();
//   const blog = getBlog(query.id);
  
//   const handleDelete = async () => {
//     confirm(`Are you want to delete the blog post.`)
//     await deleteBlog(query?.id)
//     push('/blog')
//   };

//   if (!blog)
//     return (
//       <>
//         <div className="container mx-auto">
//           <div className="flex items-center justify-between my-10">
//             <div className="h-10 w-60 bg-gray-300 rounded-md animate-pulse"></div>
//             <div className="h-10 w-60 bg-gray-300 rounded-md animate-pulse"></div>
//             <div className="h-10 w-32 bg-gray-300 rounded-md animate-pulse"></div>
//           </div>

//           <div className="grid grid-cols-1 gap-6">
//               <div className="p-6 rounded-lg shadow-md bg-white animate-pulse"
//               >
//                 <div>
//                   <div className="h-10 bg-gray-300 rounded w-3/4 mb-4"></div>
//                   <div className="h-4 bg-gray-300 rounded w-full mb-2"></div>
//                   <div className="h-4 bg-gray-300 rounded w-5/6 mb-4"></div>
//                   <div className="h-4 bg-gray-300 rounded w-5/6 mb-4"></div>

//                   <div className="mt-4 flex justify-end space-x-2">
//                     <div className="w-[50%] h-10 bg-red-100 rounded-md"></div>
//                   </div>
//                 </div>
//               </div>
//           </div>
//         </div>
//       </>
//     );
  
//   return (
//     <>
//       <Header />
//       <div className="container mx-auto">
//         <div className="p-8">
//           <h1 className="md:text-2xl text-lg font-bold mb-4 capitalize">{blog?.title}</h1>
//           <p className="mb-6 md:text-[15px] text-sm">{blog?.content.charAt(0).toUpperCase() + blog?.content.slice(1)}</p>
//           <div className='flex justify-end'>
//             <button onClick={handleDelete} className=" bg-red-500 hover:bg-red-400 text-white  px-5 py-2 text-sm font-medium rounded-md shadow-md transition ease-in-out cursor-pointer">
//               Delete Post
//             </button>
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </>
//   )
// }


// import { Router, useRouter } from 'next/router';
// import Header from '@/components/Header';
// import Footer from '@/components/Footer';

// export default function ViewBlog() {

  
//   const handleDelete = async () => {
//     confirm(`Are you want to delete the blog post.`)
//     push('/blog')
//   };

//   if (!blog)
//     return (
//       <>
//         <div className="container mx-auto">
//           <div className="flex items-center justify-between my-10">
//             <div className="h-10 w-60 bg-gray-300 rounded-md animate-pulse"></div>
//             <div className="h-10 w-60 bg-gray-300 rounded-md animate-pulse"></div>
//             <div className="h-10 w-32 bg-gray-300 rounded-md animate-pulse"></div>
//           </div>

//           <div className="grid grid-cols-1 gap-6">
//               <div className="p-6 rounded-lg shadow-md bg-white animate-pulse"
//               >
//                 <div>
//                   <div className="h-10 bg-gray-300 rounded w-3/4 mb-4"></div>
//                   <div className="h-4 bg-gray-300 rounded w-full mb-2"></div>
//                   <div className="h-4 bg-gray-300 rounded w-5/6 mb-4"></div>
//                   <div className="h-4 bg-gray-300 rounded w-5/6 mb-4"></div>

//                   <div className="mt-4 flex justify-end space-x-2">
//                     <div className="w-[50%] h-10 bg-red-100 rounded-md"></div>
//                   </div>
//                 </div>
//               </div>
//           </div>
//         </div>
//       </>
//     );
  
//   return (
//     <>
//       <Header />
//       <div className="container mx-auto">
//         <div className="p-8">
//           <h1 className="md:text-2xl text-lg font-bold mb-4 capitalize">{blog?.title}</h1>
//           <p className="mb-6 md:text-[15px] text-sm">{blog?.content.charAt(0).toUpperCase() + blog?.content.slice(1)}</p>
//           <div className='flex justify-end'>
//             <button onClick={handleDelete} className=" bg-red-500 hover:bg-red-400 text-white  px-5 py-2 text-sm font-medium rounded-md shadow-md transition ease-in-out cursor-pointer">
//               Delete Post
//             </button>
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </>
//   )
// }



import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function ViewBlog() {
  const router = useRouter();
  const { id } = router.query;

  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return; // Wait for the id to be available

    const fetchBlog = async () => {
      console.log("id",id)
      try {
        const res = await fetch(`/api/add-blog?id=${id}`);
        if (!res.ok) {
          throw new Error('Failed to fetch the blog post.');
        }
        const data = await res.json();
        console.log("data ====>",data?.data);
        
        setBlog(data?.data);
      } catch (error) {
        console.error(error);
        setBlog(null);
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [id]);

  const handleDelete = async () => {
    const confirmDelete = confirm('Are you sure you want to delete this blog post?');
    if (confirmDelete) {
      try {
        const res = await fetch(`/api/add-blog?id=${id}`, {
          method: 'DELETE',
        });
        if (!res.ok) {
          throw new Error('Failed to delete the blog post.');
        }
        router.push('/blog');
      } catch (error) {
        console.error(error);
      }
    }
  };
  console.log("blog view page  ", blog);
  
  if (loading) {
    return (
      <div className="container mx-auto">
        <div className="flex items-center justify-between my-10">
          <div className="h-10 w-60 bg-gray-300 rounded-md animate-pulse"></div>
          <div className="h-10 w-60 bg-gray-300 rounded-md animate-pulse"></div>
          <div className="h-10 w-32 bg-gray-300 rounded-md animate-pulse"></div>
        </div>

        <div className="grid grid-cols-1 gap-6">
          <div className="p-6 rounded-lg shadow-md bg-white animate-pulse">
            <div>
              <div className="h-10 bg-gray-300 rounded w-3/4 mb-4"></div>
              <div className="h-4 bg-gray-300 rounded w-full mb-2"></div>
              <div className="h-4 bg-gray-300 rounded w-5/6 mb-4"></div>
              <div className="h-4 bg-gray-300 rounded w-5/6 mb-4"></div>

              <div className="mt-4 flex justify-end space-x-2">
                <div className="w-[50%] h-10 bg-red-100 rounded-md"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="container mx-auto">
        <p className="text-center text-red-500 mt-10">Blog post not found.</p>
      </div>
    );
  }

  return (
    <>
      <Header />
      <div className="container mx-auto">
        <div className="p-8">
          <h1 className="md:text-2xl text-lg font-bold mb-4 capitalize">{blog?.title}</h1>
          <p className="mb-6 md:text-[15px] text-sm">
            {blog?.content?.charAt(0).toUpperCase() + blog?.content?.slice(1)}
          </p>
          <div className="flex justify-end">
            <button
              onClick={handleDelete}
              className="bg-red-500 hover:bg-red-400 text-white px-5 py-2 text-sm font-medium rounded-md shadow-md transition ease-in-out cursor-pointer"
            >
              Delete Post
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
