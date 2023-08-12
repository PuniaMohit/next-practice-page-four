import Image from "next/image";
import Header from "./components/header/header";
import Banner from "./components/Banner/banner";
import Content from "./components/Content/content";

export default function Home() {
  return (
    <main>
      <Header />
      <Banner />
      <Content />
    </main>
  );
}
