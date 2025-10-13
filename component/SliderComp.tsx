"use client";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick'
import Image from "next/image";
import { useEffect, useState } from "react";
import { PostSchema } from "@/utils/types";
import { fetchPosts } from "@/utils/data";
import Link from "next/link";



export default function SliderComp() {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:false,
    autoPlay:true,
    autoplaySpeed: 1000,
    useCss:true
  };

  const [featured,setFeatured] = useState<PostSchema[] | null>(null)
  const [loading,setLoading] = useState<boolean>(true)


  useEffect(()=>{
      const fetchdata = async () => {

        try {
          setFeatured(await fetchPosts())
        } catch (error) {
          console.log(error);
          
        } finally{
          setLoading(false)
        }
      }
      fetchdata()
  },[])

  return (
    <div className="rounded-lg my-10" >
      {
        loading && <div>
          <div className="h-[60vh]  lg:h-[50vh]">
            <div className="flex flex-col lg:flex-row animate-pulse">
              <div className="w-full lg:w-2/3">
                <div className="w-full h-[150px] lg:h-[250px] bg-neutral-800 rounded-xl"></div>
              </div>

              <div className="px-4 flex flex-col gap-3 mt-4 lg:mt-0 lg:ml-10 w-full">
                <div className="w-20 h-6 bg-neutral-800 rounded-lg"></div>

                <div className="w-3/4 h-8 bg-neutral-800 rounded"></div>
                <div className="w-full h-4 bg-neutral-800 rounded"></div>
                <div className="w-5/6 h-4 bg-neutral-800 rounded"></div>

                <div className="w-16 h-3 bg-neutral-700 rounded mt-2"></div>
              </div>
            </div>

          </div>
        </div>
      }  
      {!loading &&
      <div className="h-[60vh] lg:h-[50vh]">
          <Slider {...settings}>
        {featured?.slice(0,4).map((article)=>{
          return <Link 
              href={`/${article.category}/${article.slug}`}
          >
                  <Image
                    priority
                    src={article.image}
                    alt={"alt"}
                    width={1920}
                    height={1000}
                    className="w-130 h-auto object-cover rounded-xl lg:float-left lg:mr-10 "
                    />
                  <div className="px-4 flex flex-col gap-3">
                    <span className="text-[10px] uppercase tracking-wide bg-neutral-800 mt-2 px-4 py-2 rounded-lg self-start text-white font-semibold">
                      {article.category}
                    </span>
                    <h3 className="text-white font-semibold text-sm lg:text-3xl">
                      {article.title}
                    </h3>
                    <p className="text-neutral-400 text-xs lg:text-sm line-clamp-2">
                      {article.description}
                    </p>
                    <span className="text-[10px] uppercase tracking-wide text-neutral-500 mt-2">
                      {article.date}
                    </span>
                  </div>
            </Link>
        })
        
        }
          
        
        </Slider>
        
      </div>
    }

    </div>
  )
}
