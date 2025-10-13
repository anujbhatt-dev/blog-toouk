import axios from "axios";
import { CategorySchema } from "./types";




// utils/data.ts

const API_URL =
  "https://public-api.wordpress.com/wp/v2/sites/tooukmarket.wordpress.com/categories";

export const fetchCategories = async (): Promise<CategorySchema[]> => {
  try {
    const res = await axios.get<CategorySchema[]>(API_URL);
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



  export 
  const demoArticles = [
    {
      id: "1",
      title: "How Tokenization Is Changing Real Estate",
      description: "Learn how blockchain is transforming property ownership.",
      image: "https://tooukmarket.wordpress.com/wp-content/uploads/2025/10/artist-bridge.jpg",
      category: "real-estate",
    },
    {
      id: "2",
      title: "DeFi Yield Strategies Explained",
      description: "Explore the most popular yield farming opportunities.",
      image: "/b2.png",
      category: "yield-defi",
    },
    {
      id: "3",
      title: "Digital Art and Collectibles in 2025",
      description: "NFTs are evolving into more sophisticated asset classes.",
      image: "/b3.png",
      category: "art-collectibles",
    },
    {
      id: "4",
      title: "How Regulation Shapes Token Markets",
      description: "An overview of the latest compliance trends in tokenization.",
      image: "/b4.png",
      category: "regulation-compliance",
    },
    {
      id: "5",
      title: "Infrastructure for Tokenized Assets",
      description: "Inside the tech that powers real-world asset tokenization.",
      image: "/b5.png",
      category: "technology-infrastructure",
    },
    {
        id: "6",
        title: "Toouk Pay : Tap to Pay",
        description: "Inside the tech that powers real-world asset tokenization.",
        image: "/b6.png",
        category: "technology-infrastructure",
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