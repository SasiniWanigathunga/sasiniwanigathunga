import { About } from "@/components/home/About";
import { Header } from "@/components/home/Header";
import { TopicIndex } from "@/components/home/TopicIndex";
import { Updates } from "@/components/home/Updates";

export default function Home() {
  return (
    <>
      <Header />
      <About />
      <Updates />
      <TopicIndex />
    </>
  );
}
