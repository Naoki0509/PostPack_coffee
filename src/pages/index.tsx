import { MainLayout } from "@/src/components/Layout/mainlayout";
import { Title } from "@mantine/core";
import { NextPage } from "next";

const HomePage: NextPage = () => {
  return (
    <MainLayout>
      <Title order={2}>Test</Title>
    </MainLayout>
  );
};

export default HomePage;
