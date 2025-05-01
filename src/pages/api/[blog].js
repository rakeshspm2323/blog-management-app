import dbConnection from "@/lib/mongodb";
import Blog from "@/models/Blog";

const addBlogApi = async (req, res) => {
  await dbConnection();
  if (req.method === "PUT") {
    try {
      const { blog } = req.query;
      const { title, content } = req.body;
      const blogData = await Blog.findByIdAndUpdate(
        blog,
        { $set: { title, content } },
        { new: true }
      );

      if (!blogData) {
        return res
          .status(300)
          .json({ success: false, message: "something went wrong" });
      }
      return res.status(200).json({
        success: true,
        message: "blog update successfully",
        data: blogData,
      });
    } catch (error) {
      return res
        .status(500)
        .json({ success: false, message: "Internal Server Error", error });
    }
  } else if (req.method === "DELETE") {
    try {
      const { blog } = req.query;
      const blogData = await Blog.findByIdAndDelete(blog);
      if (!blogData) {
        return res
          .status(300)
          .json({ success: false, message: "something went wrong" });
      }
      return res.status(200).json({
        success: true,
        message: "blog deleted successfully",
        data: blogData,
      });
    } catch (error) {
      return res
        .status(500)
        .json({ success: false, message: "Internal Server Error", error });
    }
  } else if (req.method === "GET") {
    try {
      const { blog } = req.query;
      const blogData = await Blog.findById(blog);
      if (!blogData) {
        return res
          .status(400)
          .json({ success: false, message: "blog not found" });
      }

      return res.status(200).json({
        success: true,
        message: "blog fetched successfully",
        data: blogData,
      });
    } catch (error) {
      return res
        .status(500)
        .json({ success: false, message: "Internal Server Error", error });
    }
  } else {
    return res.status(400).json({ message: "Method not allowed" });
  }
};

export default addBlogApi;
