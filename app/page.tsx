import { About } from "@/components/home/About";
import { TopicList } from "@/components/home/TopicList";
import { Updates } from "@/components/home/Updates";

export default function Home() {
  return (
    <>
      <About />
      <Updates />
      <TopicList />
    </>
  );
}
