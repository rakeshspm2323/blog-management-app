import { useEffect, useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const fetchBlog = async () => {
  const res = await fetch("/api/add-blog");
  return await res.json();
};

const BlogPage = () => {
  const [allBlog, setAllBlog] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 4;

  useEffect(() => {
    fetchBlog().then((res) => {
      setAllBlog(res?.data || []);
    });
  }, []);

  const totalPages = Math.ceil(allBlog.length / postsPerPage);
  const startIdx = (currentPage - 1) * postsPerPage;
  const currentPosts = allBlog
    .slice()
    .reverse()
    .slice(startIdx, startIdx + postsPerPage);

  const handlePageChange = (pageNumber) => {
    if (pageNumber > 0 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  return (
    <>
      <Header />
      <div className="container mx-auto">
        <div className="my-7 lg:px-0 px-2">
          <div className="flex justify-between md:items-center items-start mb-4">
            <h1 className="md:block hidden md:text-2xl text-[17px] font-bold text-gray-700">
              Our Complete Blog Collection
            </h1>
            <h1 className="md:hidden text-xl font-bold text-gray-700">
              Our Blog Collection
            </h1>
            <Link
              href="/blog/new"
              className="text-nowrap bg-green-500 hover:bg-green-400 text-white md:px-4 px-2 py-2 font-medium md:text-sm text-xs rounded-md transition ease-in-out"
            >
              Create New
            </Link>
          </div>

          <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
            {currentPosts.map((post) => (
              <div
                key={post._id}
                className="rounded-md shadow-md hover:shadow-xl border border-gray-100 p-5"
              >
                <h2 className="md:text-lg font-semibold capitalize">
                  {post?.title}
                </h2>
                <p className="mt-2 md:text-[15px] text-sm">
                  {post?.content?.charAt(0).toUpperCase() +
                    post?.content?.slice(1)}
                </p>
                <div className="mt-4 flex flex-col gap-4">
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
           <div className="flex justify-center items-center space-x-2 mt-10 mb-6">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-4 py-1.5 text-xs font-medium bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
            >
              Prev...
            </button>

            {[...Array(totalPages)].map((_, index) => {
              const pageNum = index + 1;
              return (
                <button
                  key={index}
                  onClick={() => handlePageChange(pageNum)}
                  className={`px-3 py-1 text-xs rounded border font-medium ${
                    currentPage === pageNum
                      ? "bg-blue-500 text-white"
                      : "bg-white text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  {pageNum}
                </button>
              );
            })}

            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="px-4 py-1.5 text-xs font-medium bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
            >
              Next...
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BlogPage;
