import { useRef, useEffect } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Info from "./Info";


const Middle = () => {
    const slider = useRef<HTMLDivElement>(null);
    const sliderWrapper = useRef<HTMLDivElement>(null);
    const text = useRef(null);
    const mainSection = useRef<HTMLDivElement>(null);

    useEffect(() => {

        gsap.registerPlugin(ScrollTrigger);


        // Ensure GSAP can use the refs
        if (slider.current && sliderWrapper.current) {
            const totalWidth = sliderWrapper.current.scrollWidth;
            const sliderWidth = slider.current.offsetWidth;

            // Create the GSAP timeline for the horizontal scroll effect
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: slider.current,
                    pin: true,
                    scrub: 1, // smooth scrubbing, consider a number > 1 for slower scrubbing
                    end: () => `+=${totalWidth}`,
                    anticipatePin: 1,
                },
            });

            // Animate the slider wrapper to the left
            tl
            .to(sliderWrapper.current, {
                x: () => -(totalWidth - sliderWidth),
                ease: "none",
            });

            // Clean up function to kill the ScrollTrigger instance on component unmount
            return () => {
                if (tl.scrollTrigger) {
                    tl.scrollTrigger.kill();
                }
                tl.kill();
            };
        }
    }, []);

    return (
        <div ref={mainSection} className="h-full grid transition-colors duration-300 bg-beige-white">
            <div className="h-[50vh] w-full p-3 flex justify-center items-center bg-beige-white">
                <p ref={text} className=" font-grotesk text-5xl font-medium text-pbrown text-center">
                    From our family to yours, <span className="text-dbrown "> Class One Donuts: </span> blending tradition with innovation 
                </p>
            </div>
        <div ref={slider} className="slider bg-beige-white">
            <div ref={sliderWrapper} className="slider-wrapper">
                <div className="slide slide1">
                    <img src="https://s3-media0.fl.yelpcdn.com/bphoto/MYgU5sD7OKaYQMIPD6hR4w/o.jpg" alt="Plate of a sprinkled pink donut tower" className="insta"/>
                </div>
                <div className="slide">
                    <img src="https://s3-media0.fl.yelpcdn.com/bphoto/foWdyjdL_XI3H4jhKqYuxg/o.jpg" alt="Donut display of cronuts" className="insta" />
                </div>
                <div className="slide">
                    <img src="https://s3-media0.fl.yelpcdn.com/bphoto/dv4g5Q6S013VH7f01by1Ug/o.jpg" alt="blended ice coffees (mocha, cookies n cream, caramel" className="insta" />
                </div>
                <div className="slide">
                    <img src="https://s3-media0.fl.yelpcdn.com/bphoto/zQVcVQtZg-8XW90rLwBXyA/o.jpg" alt="Specialty donuts: madagascar vanilla, samoas, oreo swirl, fruity pebbles" className="insta" />
                </div>
                <div className="slide">
                    <img src="https://s3-media0.fl.yelpcdn.com/bphoto/BZLdjOF1A2S6xKy_3p1uMQ/o.jpg" alt="Fruity pebbles glazed donut" className="insta" />
                </div>
                <div className="slide">
                    <img src="https://s3-media0.fl.yelpcdn.com/bphoto/3oxc0D0YxGs1hm0gix2Myw/o.jpg" alt="Fruity pebbles glazed donut" className="insta" />
                </div>
                <div className="slide">
                    <img src="https://s3-media0.fl.yelpcdn.com/bphoto/57KDUQcoSKs-JVXT73K8zA/o.jpg" alt="Donut display" className="insta" />
                </div>
            </div>
        </div>
        <div>
            <p className="font-grotesk text-5xl p-5 lg:text-8xl font-medium text-pbrown bg-beige-white text-center ">our donuts are baked fresh daily♥</p>
        </div>
            <Info />
        </div>
    )
};


export default Middle;