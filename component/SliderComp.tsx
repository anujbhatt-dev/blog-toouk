"use client";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick'
import Image from "next/image";



export default function SliderComp() {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:false,
    autoPlay:true,
    autoplaySpeed: 1000
  };
  return (
    <div className="bg-zinc-900 rounded-lg p-4 pb-8" >
        <Slider {...settings}>
        <div>
                <Image
                  src={"/b1.png"}
                  alt={"alt"}
                  width={160}
                  height={160}
                  className="w-100 h-60 object-cover rounded-xl lg:float-left lg:mr-10"
                />
                <div className="py-4 flex flex-col gap-3">
                  <span className="text-[10px] uppercase tracking-wide bg-neutral-800 mt-2 px-4 py-2 rounded-lg self-start">
                    Announcement
                  </span>
                  <h3 className="text-white font-semibold text-sm sm:text-base">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus, necessitatibus? Provident
                  </h3>
                  <p className="text-neutral-400 text-xs line-clamp-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, deserunt. Et quia reprehenderit amet odio, sint enim magnam aliquid iste odit provident architecto quasi eum aut cum! Eveniet, consequatur sit rerum molestiae commodi molestias eaque, nesciunt dignissimos quasi quo similique!
                  </p>
                  <span className="text-[10px] uppercase tracking-wide text-neutral-500 mt-2">
                    2025-10-12
                  </span>
                </div>
          </div>
          <div>
                <Image
                  src={"/b2.png"}
                  alt={"alt"}
                  width={160}
                  height={160}
                  className="w-100 h-60 object-cover rounded-xl lg:float-left lg:mr-10"
                />
                <div className="py-4 flex flex-col gap-3">
                  <span className="text-[10px] uppercase tracking-wide bg-neutral-800 mt-2 px-4 py-2 rounded-lg self-start">
                    Announcement
                  </span>
                  <h3 className="text-white font-semibold text-sm sm:text-base">
                    Lelit. Doloribus, necessitatibus? Provident
                  </h3>
                  <p className="text-neutral-400 text-xs line-clamp-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, deserunt. Et quia reprehenderit amet odio, sint enim magnam aliquid iste odit provident architecto quasi eum aut cum! Eveniet, consequatur sit rerum molestiae commodi molestias eaque, nesciunt dignissimos quasi quo similique!
                  </p>
                  <span className="text-[10px] uppercase tracking-wide text-neutral-500 mt-2">
                    2025-10-12
                  </span>
                </div>
          </div>
        </Slider>

    </div>
  )
}
