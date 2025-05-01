import { useRouter } from "next/router";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BlogView from "@/components/BlogView";

export default function ViewBlog() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <Header />
      <BlogView router={router} id={id}/>
      <Footer />
    </>
  );
}
