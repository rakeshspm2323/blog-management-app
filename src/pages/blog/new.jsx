// import { useState } from 'react'
// import { useRouter } from 'next/navigation'
// import { addBlog } from '../../lib/blogData';
// import Header from '@/components/Header';
// import Footer from '@/components/Footer';

// export default function NewPost() {
//   const [title, setTitle] = useState('');
//   const [content, setContent] = useState('');
//   const router = useRouter();

//   function handleSubmit(e) {
//     e.preventDefault();
//     addBlog({ title, content });
//     router.push('/blog');
//   }

//   return (
//     <>
//       <Header />
//       <div className="container mx-auto">
//         <div className="p-8">
//           <h1 className="text-2xl font-bold mb-4 text-gray-700">Create New Blog Post</h1>
//           <form onSubmit={handleSubmit} className="flex flex-col gap-7">
//             <input
//               type="text"
//               placeholder="Enter The Title"
//               value={title}
//               onChange={(e) => setTitle(e.target.value)}
//               className="text-sm border border-orange-500 p-2 rounded focus:outline-none focus:ring-1 focus:ring-orange-500"
//               required
//             />
//             <textarea
//               placeholder="Enter The Description"
//               value={content}
//               onChange={(e) => setContent(e.target.value)}
//               className="text-sm border border-orange-500 p-2 h-32 rounded focus:outline-none focus:ring-1 focus:ring-orange-500"
//               required
//             />
//             <button type="submit" className="bg-green-500 hover:bg-green-400 cursor-pointer font-medium transition ease-in-out text-white p-2 rounded">
//               Submit
//             </button>
//           </form>
//         </div>
//       </div>
//       <Footer />
//     </>
   
//   )
// }




import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Header from '@/components/Header';
import Footer from '@/components/Footer';
const fetchAllBlogData=async ()=>{
  const res=await fetch('/api/add-blog',{method:"GET"});
  return await res.json()
}
export default function NewPost() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [blogData,setBlogData]=useState([])
  const router = useRouter();
  useEffect(()=>{
    fetchAllBlogData().then(res=>setBlogData(res?.data||[]))
  },[])

 async function handleSubmit(e) {
    e.preventDefault();
    const res = await fetch('/api/add-blog', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title, content }),
    });

    const data=await res.json();
    if(data?.success){
      fetchAllBlogData().then(res=>setBlogData(res?.data||[]))
      router.push('/blog');
      alert(data?.message)
    }
    else{
      alert(data?.message)
    }
  }

  console.log("blogData", blogData)
  return (
    <>
      <Header />
      <div className="container mx-auto">
        <div className="p-8">
          <h1 className="text-2xl font-bold mb-4 text-gray-700">Create New Blog Post</h1>
          <form onSubmit={handleSubmit} className="flex flex-col gap-7">
            <input
              type="text"
              placeholder="Enter The Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="text-sm border border-orange-500 p-2 rounded focus:outline-none focus:ring-1 focus:ring-orange-500"
              required
            />
            <textarea
              placeholder="Enter The Description"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="text-sm border border-orange-500 p-2 h-32 rounded focus:outline-none focus:ring-1 focus:ring-orange-500"
              required
            />
            <button type="submit" className="bg-green-500 hover:bg-green-400 cursor-pointer font-medium transition ease-in-out text-white p-2 rounded">
              Submit
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
   
  )
}
