import { useEffect, useRef} from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Landing from "../assets/images/image1.webp";

// const Hero = ( ) => {
//   const imgContainer = useRef(null);
//   const img = useRef(null);
//   const text = useRef(null);
//   const order = useRef(null);
  
//   useEffect(() => {
//     gsap.registerPlugin(ScrollTrigger);

//     ScrollTrigger.create({
//         trigger: img.current,
//         start: "top+=75% bottom",
//         scrub: true,
//         end: "bottom top",
//         animation: gsap
//           .timeline()
//           .to(img.current, { scale:1.1, duration: 0.3, ease: "Power4.inOut"}),
//         toggleActions: "play none none none",
//       });
  
//   }, []);

//   useEffect(() => {
//     const tl = gsap.timeline();
//     tl
//       .to(imgContainer.current, { opacity:80, duration: 1.5, ease: "power4.inOut" } )
//       .to(text.current, { y: 0, opacity:1, duration: 1, ease: "power4.inOut", stagger:1 }, "-=1.0")
//       .to(order.current, { y: 0, opacity:1, duration: 2, ease: "power4.inOut" }, "-=1.0")
//   }, []);

//   return (
//     <section className="hero relative flex w-screen h-screen select-none justify-center items-center overflow-hidden bg-beige-white" aria-label="hero">
//       <div ref={imgContainer} className="relative opacity-0 overflow-auto w-full bg-beige-white h-screen">
//         <img 
//            ref={img} 
//            src={ Landing } 
//            rel="preload" 
//            alt="Assortment of donuts placed next to a luscious pothos plant." 
//            className="w-full h-full bg-beige-white object-cover lg:w-screen lg:overflow-auto opacity-85 pointer-none" />
//         <a href="https://www.doordash.com/store/class-one-donuts-glendora-867803/" 
//            ref={order} 
//            aria-label="Order Now"
//            className="translate-y-96 absolute top-1/2 right-1/2 bg-beige-white text-pbrown font-grotesk font-semibold text-3xl px-4 py-2 rounded-full shadow-lg hover:bg-dbrown hover:text-zinc-100 hover:transition-transform opacity-0 border border-dbrown hover:border-beige-white">
//             Order Now
//         </a>
//         <div className="absolute top-4 left-36 lg:left-0 lg:top-1/2">
//             <div ref={text} className="voted p-3 text-beige-white text-6xl lg:text-8xl drop-shadow-md lg:w-1/2 opacity-0">
//                 voted <span className="italic text-center text-dpink bg-beige-white px-3 leading-14">best</span> donuts in glendora
//             </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;

const Hero = () => {
  const imgContainer = useRef(null);
  const img = useRef(null);
  const text = useRef(null);
  const order = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.create({
      trigger: img.current,
      start: "top+=75% bottom",
      end: "bottom top",
      scrub: true,
      animation: gsap
        .timeline()
        .to(img.current, { scale: 1.1, duration: 0.3, ease: "Power4.inOut" }),
    });
  }, []);

  useEffect(() => {
    const tl = gsap.timeline();
    tl
      .to(imgContainer.current, { opacity: 1, duration: 1, ease: "power4.inOut" })
      .to(text.current, {  opacity: 1, duration: 1, ease: "power4.inOut" }, "-=1.0")
      .to(order.current, { opacity: 1, duration: 1, ease: "power4.inOut" }, "-=1.0");
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden bg-ppink">
      <div ref={imgContainer} className="relative w-full h-full flex items-center justify-center">
        <img
          ref={img}
          src={Landing}
          alt="Assortment of donuts placed next to a luscious pothos plant."
          className="object-cover w-full h-full lg:w-1/2 pointer-events-none"
          style={{ opacity: 0.85 }} // Inline style for opacity to prevent flickering during GSAP animation
        />
        <div className="absolute inset-x-0 inset-y-10 lg:relative flex flex-col items-center lg:justify-start lg:items-start lg:w-1/2 px-6 py-12 lg:pl-[10%] lg:pr-20">
          <div className="bg-beige-white lg:bg-ppink w-[50vh] lg:w-full bg-opacity-90">
            <div ref={text} className="font-grotesk text-5xl lg:text-7xl font-bold text-pbrown lg:text-pbrown opacity-0 z-10 text-center lg:text-left p-4">
              <span className="block">voted</span>
              <span className="block italic text-dpink px-5 lg:bg-beige-white">best donuts</span>
              <span className="block">in glendora</span>
            </div>
            <a
              href="https://www.doordash.com/store/class-one-donuts-glendora-867803/"
              ref={order}
              aria-label="Order Now"
              className="ml-14 mt-6 lg:mt-12 bg-dbrown text-zinc-100 font-grotesk text-2xl font-bold px-6 py-3 rounded-full shadow-lg opacity-0 hover:bg-beige-white hover:text-pbrown border border-dbrown hover:border-transparent"
              style={{ transition: 'opacity 1s ease' }} // Inline style for transition to work with GSAP
            >
              Order Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;