import { MainLayout } from "@/src/components/Layout/mainlayout";
import { Index } from "@/src/components/pages";
import { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <MainLayout>
      <Index />
    </MainLayout>
  );
};

export default Home;
