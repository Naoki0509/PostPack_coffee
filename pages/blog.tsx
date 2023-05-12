import { MainLayout } from "@/src/components/Layout/mainlayout";
import { About } from "@/src/components/pages/about";
import { Blog } from "@/src/components/pages/blog";
import { NextPage } from "next";

const BlogPage: NextPage = () => {
  return (
    <MainLayout>
      <Blog />
    </MainLayout>
  );
};

export default BlogPage;
