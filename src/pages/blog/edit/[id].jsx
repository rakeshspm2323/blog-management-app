import { useRouter } from "next/router";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BlogEdit from "@/components/BlogEdit";

export default function EditBlog() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <Header />
      <BlogEdit  router={router} id={id}/>
      <Footer />
    </>
  );
}
