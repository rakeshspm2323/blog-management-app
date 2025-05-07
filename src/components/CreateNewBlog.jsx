import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const CreateNewBlog = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
    //   const timer = setTimeout(() => setLoading(false), 100); // Simulate brief loading
    //   return () => clearTimeout(timer);
    // }, []);
  
  const router = useRouter();
  
  async function handleSubmit(e) {
    e.preventDefault();
    const res = await fetch("/api/add-blog", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, content }),
    });

    const data = await res.json();
    if (data?.success) {
      router.push("/blog");
      alert(data?.message);
    } else {
      alert(data?.message);
    }
  }


  // if (loading)
  //   return (
  //     <>
  //       <div className="container mx-auto my-7">

  //         <div className="grid grid-cols-1 gap-6">
  //           <div className="p-6 rounded-lg shadow-md bg-white animate-pulse">
  //             <div>
  //                 <div className="h-10 w-[40%] bg-gray-300 rounded mb-7"></div>
  //                 <div className="h-10 bg-gray-300 rounded mb-7"></div>
  //                 <div className="h-4 bg-gray-300 rounded mb-3"></div>
  //                 <div className="h-4 bg-gray-300 rounded mb-3"></div>
  //                 <div className="h-4 bg-gray-300 rounded mb-3"></div>
  //                 <div className="h-4 bg-gray-300 rounded mb-3"></div>
  //                 <div className="h-4 bg-gray-300 rounded mb-7"></div>

  //               <div className="mt-4">
  //                   <div className="h-10 bg-green-200 rounded-md"></div>
  //               </div>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     </>
  //   );

  return (
    <>
      <div className="container mx-auto">
        <div className="p-8">
          <h1 className="text-2xl font-bold mb-4 text-gray-700">
            Create New Blog Post
          </h1>
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
            <button
              type="submit"
              className="bg-green-500 hover:bg-green-400 cursor-pointer font-medium transition ease-in-out text-white p-2 rounded"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default CreateNewBlog;