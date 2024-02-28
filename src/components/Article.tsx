
import { GiDonut } from "react-icons/gi";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";



const Article = () => {
    const donut = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        gsap.to(donut.current, { rotation: 360, duration: 3, repeat:-1, ease:"linear" });
    }, []);

    return (
        <div className="h-[50vh] w-full flex flex-col justify-center items-center bg-beige-white pt-50 ">
            <p className="font-grotesk text-3xl font-medium text-pbrown text-center pb-8 lg:px-2 lg:text-4xl">
                From our family to yours, <span className="text-dbrown">Class One Donuts:</span> blending tradition with innovation 
            </p>
            <span ref={donut} className="flex justify-center">
                <GiDonut id="donut" size={64} color="#7d5c3bff" aria-label="donut"/>
            </span>
            <a href="https://www.theinfatuation.com/los-angeles/guides/best-donut-shops-in-southern-california-class-one-donuts" aria-label="Read about our story" className="p-3 bg-dbrown font-grotesk text-beige-white text-2xl lg:text-4xl rounded-md hover:bg-pbrown text-center">
                READ ABOUT OUR STORY 
            </a>
        </div>
    )
};

export default Article;