import axios from "axios";
import { CategorySchema, PostSchema } from "./types";




// utils/data.ts

const CATEGORY_ENDPOINT =
  `${process.env.NEXT_PUBLIC_API_URL}/categories`;

  const POSTS_ENDPOINT =
  `${process.env.NEXT_PUBLIC_API_URL}/posts`;  

export const fetchCategories = async (): Promise<CategorySchema[]> => {
  try {
    const res = await axios.get<CategorySchema[]>(CATEGORY_ENDPOINT);
    // Axios automatically infers type from <CategorySchema[]>

    // Map and filter to ensure we only return expected fields
    const filteredData: CategorySchema[] = res.data.map((item) => ({
      id: item.id,
      name: item.name,
      slug: item.slug,
    }));

    return filteredData;
  } catch (error) {
    console.error("Error fetching categories:", error);
    return []; // fallback to empty array
  }
};


export const fetchPosts = async (): Promise<PostSchema[]> => {
  
  try {
    const res = await axios.get<PostSchema[]>(POSTS_ENDPOINT);
    // Axios automatically infers type from <CategorySchema[]>
    

    // Map and filter to ensure we only return expected fields
    const filteredData: PostSchema[] = res.data.map((item:any) => ({
      id: item.id,
      title: item.title.rendered,
      slug: item.slug,
      description:item.yoast_head_json.og_description,
      image:item.yoast_head_json.og_image[0].url,
      category:item.class_list.at(-1).split("-")[1],
      date:item.date.split("T")[0]
    }));

    return filteredData;
  } catch (error) {
    console.error("Error fetching categories:", error);
    return []; // fallback to empty array
  }
};



  export  const demoArticles = [
    
    {
      id: "3",
      title: "Digital Art and Collectibles in 2025",
      description: "NFTs are evolving into more sophisticated asset classes.",
      image: "/b3.png",
      category: "announcements",
      slug:"how-tokenization-is-changing-real-estate"
    },
    {
      id: "4",
      title: "How Regulation Shapes Token Markets",
      description: "An overview of the latest compliance trends in tokenization.",
      image: "/b4.png",
      category: "leadership",
      slug:"how-tokenization-is-changing-real-estate"
    },
    {
      id: "5",
      title: "Infrastructure for Tokenized Assets",
      description: "Inside the tech that powers real-world asset tokenization.",
      image: "/b5.png",
      category: "leadership",
      slug:"how-tokenization-is-changing-real-estate"
    },
    {
        id: "6",
        title: "Toouk Pay : Tap to Pay",
        description: "Inside the tech that powers real-world asset tokenization.",
        image: "/b6.png",
        category: "announcements",
        slug:"how-tokenization-is-changing-real-estate"
      },
  ];
  

//   export const categories = [
//     {
//       id: "category0",
//       name: "All",
//       slug: "all"
//     },
//     {
//       id: "category1",
//       name: "Tokenization",
//       slug: "tokenization"
//     },
//     {
//       id: "category2",
//       name: "Real Estate",
//       slug: "real-estate"
//     },
//     {
//       id: "category3",
//       name: "Commodities",
//       slug: "commodities"
//     },
//     {
//       id: "category4",
//       name: "Art & Collectibles",
//       slug: "art-collectibles"
//     },
//     {
//       id: "category5",
//       name: "Yield & DeFi",
//       slug: "yield-defi"
//     },
//     {
//       id: "category6",
//       name: "Regulation & Compliance",
//       slug: "regulation-compliance"
//     },
//     {
//       id: "category7",
//       name: "Market Insights",
//       slug: "market-insights"
//     },
//     {
//       id: "category8",
//       name: "Technology & Infrastructure",
//       slug: "technology-infrastructure"
//     },
//     {
//       id: "category9",
//       name: "Community & Updates",
//       slug: "community-updates"
//     },
//     {
//       id: "category10",
//       name: "Education & Guides",
//       slug: "education-guides"
//     }
//   ];