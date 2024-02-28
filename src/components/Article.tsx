import { useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";


import { GiDonut } from "react-icons/gi";

const Article = () => {
    const text = useRef(null);
    
    return (
        <div className="h-screen w-full flex flex-col justify-center items-center bg-beige-white pt-50 mt-5">
            <p ref={text} className="font-grotesk text-3xl font-medium text-pbrown text-center pb-8 lg:px-2 lg:text-5xl">
                From our family to yours, <span className="text-dbrown">Class One Donuts:</span> blending tradition with innovation 
            </p>
            <span className="flex justify-center">
                <GiDonut id="donut" size={64} color="#7d5c3bff" aria-label="donut"/>
            </span>
            <a href="https://www.theinfatuation.com/los-angeles/guides/best-donut-shops-in-southern-california-class-one-donuts" aria-label="Read about our story" className="p-3 bg-dbrown font-grotesk text-beige-white text-2xl lg:text-4xl rounded-md hover:bg-pbrown text-center">
                READ ABOUT OUR STORY 
            </a>
        </div>
    )
};

export default Article;