import { useEffect, useState } from "react";
import Link from "next/link";

const fetchBlog = async () => {
  const res = await fetch("/api/add-blog");
  return await res.json();
};

const BlogPagination = () => {
  const [allBlog, setAllBlog] = useState([]);
  const [loading, setLoading] = useState(true);

  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 4;

  useEffect(() => {
    fetchBlog().then((res) => {
      setAllBlog(res?.data || []);
        setLoading(false);
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

  if (loading)
    return (
      <>
        <div className="container mx-auto mt-7">
          <div className="flex justify-between mb-7">
            <div className="h-10 w-[30%] bg-gray-300 rounded"></div>
            <div className="h-10 w-[20%] bg-gray-300 rounded"></div>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="p-6 rounded-lg shadow-md bg-white animate-pulse">
              <div>
                <div className="h-10 bg-gray-300 rounded mb-7"></div>
                <div className="h-4 bg-gray-300 rounded mb-3"></div>
                <div className="h-4 bg-gray-300 rounded mb-3"></div>
                <div className="h-4 bg-gray-300 rounded mb-3"></div>
                <div className="h-4 bg-gray-300 rounded mb-7"></div>

                <div className="mt-4">
                  <div className="h-10 bg-green-200 rounded-md mb-4"></div>
                  <div className="h-10 bg-orange-200 rounded-md"></div>
                </div>
              </div>
            </div>
            <div className="p-6 rounded-lg shadow-md bg-white animate-pulse">
              <div>
                <div className="h-10 bg-gray-300 rounded mb-7"></div>
                <div className="h-4 bg-gray-300 rounded mb-3"></div>
                <div className="h-4 bg-gray-300 rounded mb-3"></div>
                <div className="h-4 bg-gray-300 rounded mb-3"></div>
                <div className="h-4 bg-gray-300 rounded mb-7"></div>

                <div className="mt-4">
                  <div className="h-10 bg-green-200 rounded-md mb-4"></div>
                  <div className="h-10 bg-orange-200 rounded-md"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  return (
    <>
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
          <div className="flex md:justify-end justify-center items-center space-x-2 mt-10 mb-6">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="cursor-pointer px-3 py-1.5 text-xs font-medium bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
            >
              Prev...
            </button>
            {(() => {
              const maxVisible = 4;
              const half = Math.floor(maxVisible / 2);
              let start = Math.max(1, currentPage - half);
              let end = Math.min(totalPages, start + maxVisible - 1);
              // Adjust start if near the end
              if (end - start < maxVisible - 1) {
                start = Math.max(1, end - maxVisible + 1);
              }
              return [...Array(end - start + 1)].map((_, i) => {
                const pageNum = start + i;
                return (
                  <button
                    key={pageNum}
                    onClick={() => handlePageChange(pageNum)}
                    className={`px-2 py-1 text-xs rounded border font-medium cursor-pointer ${
                      currentPage === pageNum
                        ? "bg-blue-500 text-white"
                        : "bg-white text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    {pageNum}
                  </button>
                );
              });
            })()}
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="cursor-pointer px-3 py-1.5 text-xs font-medium bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
            >
              Next...
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPagination;
