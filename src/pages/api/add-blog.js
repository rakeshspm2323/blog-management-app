import dbConnection from "@/lib/mongodb";
import Blog from "@/models/Blog";

const addBlogApi = async (req, res) => {
  await dbConnection();
  if (req.method === "POST") {
    try {
      const { title, content } = req.body;
      const blogData = await Blog.create({ title, content });

      if (!blogData) {
        return res
          .status(300)
          .json({ success: false, message: "something went wrong" });
      }
      return res
        .status(201)
        .json({
          success: true,
          message: "blog created successfully",
          data: blogData,
        });
    } catch (error) {
      return res
        .status(500)
        .json({ success: false, message: "Internal Server Error", error });
    }
  } else if (req.method === "GET") {
    try {
      const blogData = await Blog.find({});
      if (blogData.length === 0) {
        return res
          .status(404)
          .json({ success: false, message: "blog not found" });
      }
      return res
        .status(200)
        .json({
          success: true,
          message: "blog found successfully",
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
