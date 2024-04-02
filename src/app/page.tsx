import Hero from "./components/Hero";
import ShowcaseProjects from "./util/provider/showcase-provider";

export default function Home() {
  return (
    <>
      <Hero />
      <ShowcaseProjects />
    </>
  );
}
