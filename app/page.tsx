import ArticlesGrid from "@/components/ArticlesGrid";
import Categories from "@/components/Categories";
import Hero from "@/components/Hero";
import { fetchPosts } from "@/utils/data";

export default async function Home() {
  const posts = await fetchPosts();
  if(!posts) return null
  return (
    <div className="min-h-screen">
        
        <ArticlesGrid posts={posts}/>
    </div>
  );
}
