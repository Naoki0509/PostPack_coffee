import { MainLayout } from "@/src/components/Layout/mainlayout";
import { Title } from "@mantine/core";
import { NextPage } from "next";

const AboutPage: NextPage = () => {
  return (
    <MainLayout>
      <Title order={2}>About</Title>
    </MainLayout>
  );
};

export default AboutPage;
