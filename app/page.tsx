import ArticlesGrid from "@/component/ArticlesGrid";
import Categories from "@/component/Categories";
import Hero from "@/component/Hero";

export default function Home() {

  return (
    <div className="min-h-screen">
        <Hero/>
        <Categories selected="all" />
        <ArticlesGrid/>
    </div>
  );
}
