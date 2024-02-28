import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
// Assuming you have 'react-social-media-embed' installed for InstagramEmbed
import { InstagramEmbed } from 'react-social-media-embed';
import { GiDonut } from 'react-icons/gi';

gsap.registerPlugin(ScrollTrigger);

const VideoBlock = () => {
    const vidBlock = useRef<HTMLDivElement>(null);
    const video = useRef<HTMLDivElement>(null);
    const marqueeInner = useRef<HTMLDivElement>(null);
    const donut1 = useRef(null); 
    const donut2 = useRef(null); 

    useEffect(() => {
        // Ensure that the refs are assigned to the elements before attempting to animate
        if (donut1.current && donut2.current) {
          // GSAP animations should target the `.current` property of the refs
          gsap.to(donut1.current, { rotation: 360, duration: 3, repeat:-1, ease:"linear" });
          gsap.to(donut2.current, { rotation: -360, duration: 3, repeat:-1, ease:"linear" }); // Assuming you want to rotate it in the opposite direction
        }
      }, []);

    useEffect(() => {
        // Marquee animation
        if (marqueeInner.current){
            gsap.to(marqueeInner.current.children, {
                xPercent: -100,
                ease: "linear",
                repeat: -1,
                duration: 5,
                modifiers: {
                    xPercent: gsap.utils.unitize(x => parseFloat(x) % 100), // Loop within the 100% boundary
                },
            });
        }
        // Background and video animations with ScrollTrigger
        ScrollTrigger.create({
            trigger: vidBlock.current,
            start: "top 90%",
            end: "bottom 0%",
            // scrub: true,
            markers: true,
            onEnter: () => gsap.to('body', {duration: 1.0, backgroundColor: '#000000', ease: "power1.inOut"}),
            onLeave: () => gsap.to('body', {backgroundColor: '#F9F5F1', ease: "power1.inOut", duration: 1.0}),
            onEnterBack: () => gsap.to('body', {backgroundColor: '#000000', ease: "power1.inOut", duration: 1.0}),
            onLeaveBack: () => gsap.to('body', {backgroundColor: '#F9F5F1', ease: "power1.inOut", duration: 1.0}),
    
        });

        return () => {
            document.body.style.backgroundColor = "transparent"; // Reset background color
            ScrollTrigger.getAll().forEach(trigger => trigger.kill()); // Kill all ScrollTrigger instances
        };
    }, []);

    return (
        <div ref={vidBlock} className="mt-44 h-screen w-screen flex justify-center items-center relative overflow-hidden">
            <div className="lg:absolute top-0" ref={donut1}>
                <GiDonut size={48} color="#E89BA2" aria-label="Donut"/>
            </div>
            {/* Marquee */}
            <div className="absolute top-12 lg:top-1/2 left-0 w-full h-full">
                <div ref={marqueeInner} className=" flex">
                    {Array(6).fill(6).map((_, index) => (
                        <div key={index} className="marquee__part flex-shrink-0 px-1 py-3 font-grotesk whitespace-nowrap text-3xl uppercase font-semibold text-amber-400 bg-transparent">
                            {/* <GiDonut size={48} color="#E89BA2" aria-label="Donut"/> */}
                            <div>
                            our donuts are baked fresh daily!
                            </div>
                            {/* <GiDonut size={48} color="#E89BA2" aria-label="Donut"/> */}
                        </div>
                    ))}
                </div>
            </div>

            {/* Video Content */}
            <div ref={video} className=" z-10">
                {/* InstagramEmbed or other content */}
                <InstagramEmbed url="https://www.instagram.com/p/C3DcMPnRrhQ/" width={328} />
            </div>
            <div className='lg:absolute bottom-0' ref={donut2}>
                <GiDonut  size={48} color="#E89BA2" aria-label="Donut" />
            </div>
        </div>
    );
};

export default VideoBlock;

//