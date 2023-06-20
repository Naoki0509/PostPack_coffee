import { MainLayout } from "@/src/components/Layout/mainlayout";
import { Title } from "@mantine/core";
import { NextPage } from "next";

const BlogPage: NextPage = () => {
  return (
    <MainLayout>
      <Title order={2}>Blog</Title>
    </MainLayout>
  );
};

export default BlogPage;
