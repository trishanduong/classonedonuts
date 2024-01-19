import { useEffect, useRef} from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Landing from "../assets/images/image1.png";

const Hero = ( ) => {
  const imgContainer = useRef(null);
  const img = useRef(null);
  const text = useRef(null);
  const order = useRef(null);
  
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.create({
        trigger: img.current,
        start: "top+=75% bottom",
        scrub: true,
        end: "bottom top",
        animation: gsap
          .timeline()
          .to(img.current, { scale:1.1, y: '+20%', duration: 0.5, delay:0.2, ease: "Power4.inOut"}),
        toggleActions: "play none none none",
      });
  
  }, []);

  useEffect(() => {
    const tl = gsap.timeline();
    tl
      .to(imgContainer.current, { opacity:80, duration: 1.5, ease: "power4.inOut" } )
      .to(text.current, { y: 0, opacity:1, duration: 1, ease: "power4.inOut", stagger:1 }, "-=1.0")
      .to(order.current, { y: 0, opacity:1, duration: 2, ease: "power4.inOut" }, "-=1.0")
  }, []);

  return (
    <section className="hero relative flex w-full h-screen select-none justify-center items-center" aria-label="hero">
      
      <div ref={imgContainer} className="relative opacity-0 overflow-hidden h-screen w-full">
        <img ref={img} src={Landing} loading="lazy" alt="Assortment of donuts placed next to a luscious pothos plant." className="scale-100 w-full h-full object-cover lg:w-screen lg:overflow-auto opacity-90 pointer-none" />
        <a href="https://www.doordash.com/store/class-one-donuts-glendora-867803/" 
           ref={order} 
           aria-label="Order Now"
           className="translate-y-96 absolute bottom-24 right-1 bg-beige-white text-pbrown font-grotesk font-semibold text-3xl px-4 py-2 rounded-full shadow-lg hover:bg-dbrown hover:text-zinc-100 hover:transition-transform opacity-0 border border-dbrown hover:border-beige-white">
            Order Now
        </a>
        <div className="absolute top-4 left-44 lg:left-0 lg:top-1/2">
            <div ref={text} className="translate-y-96 p-3 text-beige-white text-5xl lg:text-8xl drop-shadow-md lg:w-1/2 opacity-0">
                voted the <span className="italic text-dpink bg-beige-white px-3">best</span> donuts in glendora
            </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;