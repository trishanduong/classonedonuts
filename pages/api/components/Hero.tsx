import Image from "next/image";
import Link from "next/link";

export default function Hero(){
    return (
        <section className="dark:bg-pink-200">
        <div className="grid max-w-screen-xl px-4 py-5 mx-auto lg:gap-2 xl:gap-0 lg:py-10 lg:grid-cols-12">
            <div className="mr-auto lg:col-span-7">
                <h1 className="max-w-2xl mb-4 text-4xl font-extrabold leading-none md:text-4xl xl:text-6xl dark:text-pink-500 drop-shadow-xl">Voted the BEST donuts in Glendora</h1>
                <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-pink-600 italic font-serif">From our family to yours: Class One Donuts, blending tradition with innovation.</p>
                <Link href="/aboutus" className="bg-pink-400 inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                    Learn about our story here 
                    <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </Link>
            </div>
            <div className="hidden lg:mt-0 lg:col-span-4 lg:flex">
            <Image src="https://utfs.io/f/b5caf1ae-e4c4-4209-9cbf-d63f7080000a-1l0nc2.png" alt="pink sprinkles donut" width={500} height={500} className='animate-spin-slow'></Image>
            </div>                
        </div>
    </section>
    )
}