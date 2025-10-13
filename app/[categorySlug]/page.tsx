import ArticlesGrid from "@/component/ArticlesGrid";
import Categories from "@/component/Categories";
import Hero from "@/component/Hero";

export default async function Home({params}:{params:Promise<{categorySlug:string}>}) {
  const {categorySlug} = await params  
  console.log(categorySlug);
  
  return (
    <div className="min-h-screen">
        <Categories selected={categorySlug}/>
        <ArticlesGrid/>
    </div>
  );
}
