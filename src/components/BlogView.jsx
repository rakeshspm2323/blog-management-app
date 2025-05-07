import { useEffect, useState } from "react";

const BlogView = ({router, id}) => {
    
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return; // Wait for the id to be available

    const fetchBlog = async () => {
      console.log("id", id);
      try {
        const res = await fetch(`/api/${id}`, {
           method: "GET" }
        );
        if (!res.ok) {
          throw new Error("Failed to fetch the blog post.");
        }
        const data = await res.json();
        console.log("data ====>", data?.data);

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
    const confirmDelete = confirm(
      "Are you sure you want to delete this blog post?"
    );
    if (confirmDelete) {
      try {
        const res = await fetch(`/api/${id}`, {
          method: "DELETE",
        });
        const blogData = await res?.json();
        if (blogData?.success) {
          alert(blogData?.message);
          router.push("/blog");
        } else {
          alert(blogData?.message);
        }
      } catch (error) {
        console.error(error);
      }
    }
  };

  const handleBack = (e) => {
    e.preventDefault();
    router.push("/blog");
  }
  console.log("blog view page  ", blog);

  if (loading) {
    return (
      <div className="container mx-auto mt-10 mb-28">

        <div className="grid grid-cols-1 gap-6">
          <div className="p-6 rounded-lg shadow-md bg-white animate-pulse">
            <div>
              <div className="h-10 bg-gray-300 rounded w-3/4 mb-4"></div>
              <div className="h-4 bg-gray-300 rounded mb-2"></div>
              <div className="h-4 bg-gray-300 rounded mb-4"></div>
              <div className="h-4 bg-gray-300 rounded mb-4"></div>

              <div className="mt-4 flex justify-end space-x-2">
                <div className="w-[20%] h-10 bg-red-100 rounded-md"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }


  return (
    <>
      <div className="container mx-auto">
        <div className="p-8">
          <h1 className="md:text-2xl text-lg font-bold mb-4 capitalize">
            {blog?.title}
          </h1>
          <p className="mb-6 md:text-[15px] text-sm">
            {blog?.content?.charAt(0).toUpperCase() + blog?.content?.slice(1)}
          </p>
          <div className="flex md:justify-end justify-center gap-5">
            <button
              onClick={handleBack}
              className="bg-green-500 hover:bg-green-400 text-white px-5 py-2 text-sm font-medium rounded-md shadow-md transition ease-in-out cursor-pointer"
            >
              Back
            </button>
            <button
              onClick={handleDelete}
              className="bg-red-500 hover:bg-red-400 text-white px-5 py-2 text-sm font-medium rounded-md shadow-md transition ease-in-out cursor-pointer"
            >
              Delete Post
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default BlogView;