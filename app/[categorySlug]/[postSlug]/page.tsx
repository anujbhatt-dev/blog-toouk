import axios from "axios";
import Image from "next/image";

export default async function Home({params}:{params:Promise<{categorySlug:string,postSlug:string}>}) {
  const {categorySlug, postSlug} = await params  
  console.log(categorySlug,postSlug);

  const fetchPostdata:any = await axios.get("https://api-blog.toouk.market/index.php?rest_route=/wp/v2/posts&slug="+postSlug)
  
  return (
    <div className="min-h-screen max-w-3xl lg:mx-auto mx-2 leading-relaxed">
        {fetchPostdata && 
            <div>
                <h1 className="text-5xl my-5 font-semibold">
                {fetchPostdata.data[0].title.rendered}
                </h1>
                <Image 
                    src={fetchPostdata.data[0].yoast_head_json.og_image[0].url}
                    width={1920}
                    height={1000}
                    alt=""
                    className="w-full h-auto my-5 rounded-lg"
                />
                <div className="my-5 flex justify-between items-center">

                </div>
                <div className="prose dark:prose-invert" dangerouslySetInnerHTML={{__html:fetchPostdata.data[0].content.rendered}}/>
            </div>

        }
    </div>
  );
}
