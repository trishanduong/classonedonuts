
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { GiDonut } from "react-icons/gi";

const Middle = () => {
    const wrapper = useRef(null);
    const slider = useRef<HTMLDivElement>(null);
    const sliderWrapper = useRef<HTMLDivElement>(null);
    const firstImage = useRef(null); // Reference to the first image
    const text = useRef(null); // Keeping your text ref

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        if (slider.current && sliderWrapper.current && firstImage.current && wrapper.current) {
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
        <section ref={wrapper} className="h-full grid transition-colors duration-300 bg-beige-white">
            <div className="h-[60vh] w-full flex flex-col justify-center items-center bg-beige-white pt-50">
                <p ref={text} className="font-grotesk text-3xl lg:text-5xl font-medium text-pbrown text-center pb-8 px-2">
                    From our family to yours, <span className="text-dbrown">Class One Donuts:</span> blending tradition with innovation 
                </p>
                <a href="https://www.theinfatuation.com/los-angeles/guides/best-donut-shops-in-southern-california-class-one-donuts" aria-label="Article about Class One Donuts" className="p-3 bg-dbrown font-grotesk text-beige-white text-2xl lg:text-4xl rounded-md hover:bg-pbrown text-center">
                    READ ABOUT OUR STORY 
                    <span className="flex justify-center">
                        <GiDonut id="donut" size={64} color="white" aria-label="donut"/>
                    </span>
                </a>
            </div>
            <div ref={slider} className="slider bg-beige-white">
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
                            aria-label="image of Specialty donuts: madagascar vanilla, samoas, oreo swirl, fruity pebbles"
                            src="https://s3-media0.fl.yelpcdn.com/bphoto/zQVcVQtZg-8XW90rLwBXyA/o.jpg" alt="Specialty donuts: madagascar vanilla, samoas, oreo swirl, fruity pebbles" className="insta" />
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
            <div>
                <p className="font-grotesk text-5xl p-5 lg:text-8xl font-medium text-pbrown bg-beige-white text-center">our donuts are baked fresh daily!</p>
            </div>
        </section>
    )
};

export default Middle;
