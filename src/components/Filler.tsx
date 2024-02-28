import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


const Filler = ( ) => {
  gsap.registerPlugin(ScrollTrigger);
  const fillerRef = useRef(null); 
  useEffect(() => {
    const images = gsap.utils.toArray('.filler-img'); // Select all images with the class 'filler-img'

    // Loop through each image and create a ScrollTrigger animation
    images.forEach((img) => gsap.fromTo(
      img,
      { opacity: 0, scale: 1 },
      {
        opacity: 1,
        y: "+=1.4", 
        duration: 1.5,
        ease: 'power1.out',
        scrollTrigger: {
          trigger: img, 
          start: 'top 90%', // Animation starts when the top of the image hits 90% of the viewport height
          end: 'bottom 70%', // Animation ends when the bottom of the image hits 70% of the viewport height
          scrub: true, 
        },
        overwrite: 'auto',
      }
    ));
  }, []);

  return (
    <section ref={fillerRef} id="filler" className="bg-beige-white relative flex flex-col w-screen h-[80vh] select-none justify-center items-center overflow-hidden font-grotesk" aria-label="hero">
      <div className="relative h-[90vh] overflow-auto w-full">
        <div className="mx-auto mt-6 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
            <div className="lg:aspect-h-4 aspect-w-3 hidden rounded-lg lg:block">
                <img src="https://lh3.googleusercontent.com/p/AF1QipMO4WioKq2xQBr9N1hg4Err7sj0grjP5vqpFPKL=s1360-w1360-h1020" alt="Stack of blueberry bagels." className="filler-img h-full w-full object-cover object-center" />
            </div>
            <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
              <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
                <img src="https://lh3.googleusercontent.com/proxy/_HGJYLQ-WTfOPHJW6rmEK2d709oNEkRqqlTLYDHp1ZcmHj3hVP87F4EedmIt7EXgoLAmt-x4UohwTF1HDPbzaTFTzrq534Nf64ERxdr3f3kxHS2OWn9KevGTGM1uvO0-BCsmmVGylS6l6VOZQTseidWxj3P_Va4=s1360-w1360-h1020" alt="Turkey croissant sandwich." className="filler-img h-full w-full object-cover object-center" />
              </div>
              <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
                {/* <img src="https://lh3.googleusercontent.com/proxy/625AfEch1YBP43tx8a_Bt2uJoF22z3NwZi43Sy8Q3jqTtVXc31kslDAwbUaqPs_NV9ZIiNWnQvrJ-4-gqkJKqiH-C2nlfghdT9R9KsI_kUbV1EvAbMGvInEu9zohZZjrvp0bKhOcboHRHKT_H4rX-J2c8NJTZQ=s1360-w1360-h1020" alt="Donuts with chocolate chips." className="h-full w-full object-cover object-center" /> */}
                <div className="text-2xl text-center lg:text-3xl font-medium text-pbrown">
                  Class One Donuts is a local small-owned donut shop in Glendora. We strive to provide the best customer service and memorable experience at our shop. 
                </div>
              </div>
            </div>
            <div className="aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg">
              <img src="https://lh3.googleusercontent.com/p/AF1QipOSszICctA6jX4glQGPzFIxuDP5jeFpg3Wgra91=s1360-w1360-h1020" alt="Strawberry cronuts." className="filler-img h-full w-full object-cover object-center" />
            </div>
        </div>
      </div>
    </section>
  );
};

export default Filler;