import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function EditBlog() {
  const router = useRouter();
  const { id } = router.query;

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    const fetchBlog = async () => {
      try {
        const res = await fetch(`/api/${id}`, { method: "GET" });
        if (!res.ok) {
          throw new Error("Failed to fetch the blog post.");
        }
        const data = await res.json();
        console.log("data from edit page", data?.data);
        setTitle(data?.data?.title || "");
        setContent(data?.data?.content || "");
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const confirmUpdate = confirm(
      "Are you sure you want to update this blog post?"
    );
    if (!confirmUpdate) return;

    try {
      const res = await fetch(`/api/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, content }),
      });

      const blogData = await res.json();

      if (blogData?.success) {
        router.push("/");
        alert(blogData?.message);
      } else {
        alert(blogData?.message);
      }
    } catch (error) {
      console.error(error);
    }
  };

  if (loading)
    return <div className="text-center py-20">Loading blog post...</div>;

  return (
    <>
      <Header />
      <div className="container mx-auto">
        <div className="p-8">
          <h1 className="text-2xl font-bold mb-5 text-gray-700">
            Edit Blog Post
          </h1>
          <form onSubmit={handleSubmit} className="flex flex-col gap-7">
            <input
              type="text"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="text-sm border border-orange-500 p-2 rounded focus:outline-none focus:ring-1 focus:ring-orange-500"
              required
            />
            <textarea
              placeholder="Body"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="text-sm border border-orange-500 p-2 rounded h-32 focus:outline-none focus:ring-1 focus:ring-orange-500"
              required
            />
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-400 font-medium transition ease-in-out text-white p-2 rounded cursor-pointer"
            >
              Update
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}
