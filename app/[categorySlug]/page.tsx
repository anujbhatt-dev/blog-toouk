import ArticlesGrid from "@/component/ArticlesGrid";
import Categories from "@/component/Categories";
import Hero from "@/component/Hero";
import { fetchPosts } from "@/utils/data";

export default async function Home({params}:{params:Promise<{categorySlug:string}>}) {
  const {categorySlug} = await params  
  const posts = await fetchPosts();
  if(!posts) return null;
  console.log(categorySlug);
  
  return (
    <div className="min-h-screen">
        
        <ArticlesGrid posts={posts}/>
    </div>
  );
}
