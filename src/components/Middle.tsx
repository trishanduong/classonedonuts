
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { GiDonut } from "react-icons/gi";
import { ImPointDown } from "react-icons/im";

import dogs from "../assets/images/donutdogs.png"

const Middle = () => {
    const wrapper = useRef(null);
    const slider = useRef<HTMLDivElement>(null);
    const sliderWrapper = useRef<HTMLDivElement>(null);
    const firstImage = useRef(null); 
    const text = useRef(null); 
    
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        
        if (slider.current && sliderWrapper.current && firstImage.current && wrapper.current ) {
            const totalWidth = sliderWrapper.current.scrollWidth;
            const sliderWidth = slider.current.offsetWidth;

            // Create the GSAP timeline for the horizontal scroll effect
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: slider.current,
                    pin: true,
                    scrub: 1,
                    end: () => `+=${totalWidth}`,
                    anticipatePin: 1,
                },
            });

            // Animate the slider wrapper to the left
            tl.to(sliderWrapper.current, {
                x: () => -(totalWidth - sliderWidth),
                ease: "none",
            });

            ScrollTrigger.create({
                trigger: wrapper.current,
                start: "top 10%",
                onEnter: () => gsap.to(firstImage.current, { opacity: 1, duration: 1, ease: "power4.inOut" })
            });

            return () => {
                if (tl.scrollTrigger) {
                    tl.scrollTrigger.kill();
                }
                tl.kill();
            };
        }
    }, []);

    return (
        <section ref={wrapper} className="h-full grid transition-colors duration-300 bg-beige-white py-15">
            <div className="h-screen w-full flex flex-col justify-center items-center bg-beige-white pt-50 mt-5">
                <p ref={text} className="font-grotesk text-3xl lg:text-5xl font-medium text-pbrown text-center pb-8 px-2">
                    From our family to yours, <span className="text-dbrown">Class One Donuts:</span> blending tradition with innovation 
                </p>
                <span className="flex justify-center">
                    <GiDonut id="donut" size={64} color="#7d5c3bff" aria-label="donut"/>
                </span>
                <a href="https://www.theinfatuation.com/los-angeles/guides/best-donut-shops-in-southern-california-class-one-donuts" aria-label="Read about our story" className="p-3 bg-dbrown font-grotesk text-beige-white text-2xl lg:text-4xl rounded-md hover:bg-pbrown text-center">
                    READ ABOUT OUR STORY 
                </a>
            </div>
            <div ref={slider} className="slider bg-beige-white">
                <div className="text-dpink text-center font-grotesk">
                    <div className="flex p-5 justify-center">
                        <p className="flex text-3xl lg:text-5xl font-medium z-90 pb-7">Take a glimpse at our yummy goodies <ImPointDown size={48} className="animate-bounce lg:hidden " aria-label="Arrow pointing down"/> </p>
                        <ImPointDown size={48} className="animate-bounce hidden lg:block " aria-label="Arrow pointing down"/>
                    </div>
                    <p className=" text-pbrown text-lg  hover:text-dpink">
                        <a href="#contact" className="underline underline-offset-8 hover:bg-dbw p-3 rounded-md">Or take a look at our business hours! </a>
                    </p>
                </div>
                <div ref={sliderWrapper} className="slider-wrapper">
                    <div className="slide slide1">
                        <img 
                            ref={firstImage}
                            src="https://s3-media0.fl.yelpcdn.com/bphoto/MYgU5sD7OKaYQMIPD6hR4w/o.jpg" 
                            alt="Plate of a sprinkled pink donut tower" 
                            className="insta" 
                            style={{ opacity: 0 }} 
                        />
                    </div>
                    <div className="slide">
                    <img 
                        aria-label="image of blended ice coffees (mocha, cookies n cream, caramel"
                        src="https://s3-media0.fl.yelpcdn.com/bphoto/dv4g5Q6S013VH7f01by1Ug/o.jpg" alt="blended ice coffees (mocha, cookies n cream, caramel" className="insta" />
                    </div>
                    <div className="slide">
                        <img 
                            aria-label="two dogs looking at a colorful fruity pebble donut"
                            src={dogs} alt="two dogs looking at a colorful fruity pebble donut" className="insta" />
                    </div>
                    <div className="slide">
                        <img src="https://s3-media0.fl.yelpcdn.com/bphoto/BZLdjOF1A2S6xKy_3p1uMQ/o.jpg" aria-label="image of fruity pebble donuts" alt="Fruity pebbles glazed donut" className="insta" />
                    </div>
                    <div className="slide">
                        <img src="https://s3-media0.fl.yelpcdn.com/bphoto/3oxc0D0YxGs1hm0gix2Myw/o.jpg" alt="Box of donuts" aria-label="image of box of donuts" className="insta" />
                    </div>
                    <div className="slide">
                        <img src="https://s3-media0.fl.yelpcdn.com/bphoto/57KDUQcoSKs-JVXT73K8zA/o.jpg" aria-label="donut display" alt="Donut display" className="insta" />
                    </div>
                </div>
            </div>
            
        </section>
    )
};

export default Middle;
