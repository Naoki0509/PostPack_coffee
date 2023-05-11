import { MainLayout } from "@/src/components/Layout/mainlayout";
import { Index } from "@/src/components/pages";
import { About } from "@/src/components/pages/about";
import Head from "next/head";

const Home = () => {
  return (
    <MainLayout>
      <About />
    </MainLayout>
  );
};

export default Home;
