import { MainLayout } from "@/src/components/Layout/mainlayout";
import { About } from "@/src/components/pages/about";
import { NextPage } from "next";
import Head from "next/head";

const AboutPage: NextPage = () => {
  return (
    <MainLayout>
      <About />
    </MainLayout>
  );
};

export default AboutPage;
