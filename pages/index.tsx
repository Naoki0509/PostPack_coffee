import { MainLayout } from "@/src/components/Layout/mainlayout";
import { Index } from "@/src/components/pages";
import { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <MainLayout>
      <Index />
    </MainLayout>
  );
};

export default Home;
