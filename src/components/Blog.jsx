import React, { useEffect, useState } from "react";
import Link from "next/link";

const fetchBlog = async () => {
  const res = await fetch("/api/add-blog");
  return await res.json();
};

const Blog = () => {
  const [allBlog, setAllBlog] = useState([]);

  useEffect(() => {
    fetchBlog().then((res) => {
      setAllBlog(res?.data || []);
    });
  }, []);


  return (
    <div className="container mx-auto">
      {/* Blog Cards */}
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 mb-10 lg:px-0 px-2">
        {allBlog?.slice().reverse().slice(0,6).map((post) => (
          <div key={post._id} className="p-5 rounded-md shadow-md hover:shadow-xl border border-gray-100 ">
            <h2 className="md:text-lg font-semibold capitalize">{post?.title}</h2>
            <p className="mt-2 md:text-[15px] text-sm">
              {post?.content?.charAt(0).toUpperCase() + post?.content?.slice(1)}
            </p>
            <div className="mt-4 flex gap-4">
              <Link
                href={`/blog/${post?._id}`}
                className="w-[50%] text-center text-white bg-green-500 hover:bg-green-400 px-7 py-1.5 text-sm font-medium rounded-md shadow-md transition ease-in-out"
              >
                View
              </Link>
              <Link
                href={`/blog/edit/${post?._id}`}
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
