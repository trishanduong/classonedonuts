import { useState } from "react";

import { GiHamburgerMenu } from "react-icons/gi";
import { SlClose } from "react-icons/sl";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYelp } from "react-icons/fa";


import Logo from "../assets/logo.svg";

const Navigation = () => {
  const [openModal, setOpenModal] = useState(false);

   return (
    <nav className="navbar grid grid-cols-[auto_1fr_auto] items-center w-screen px-2 lg:px-20 bg-beige-white">
      <div className="left-group grid gap-2.5 text-xl">
        <div className="hidden lg:flex lg:gap-8 " >
          <div className="hover:bg-ppink rounded-full p-2">
            <a href="https://www.facebook.com/class1donuts/" className='text-dpink font-grotesk text-center font-bold lg:hover:text-xdpink hover:border-b hover:border-b-xdpink'>
              <FaFacebook color="#E89BA2" size={32} />
            </a>
          </div>
          <div className="hover:bg-ppink rounded-full p-2">
            <a href="https://www.instagram.com/class1donuts/" className='text-dpink font-grotesk text-center font-bold lg:hover:bg-ddpink'>
              <FaInstagram color="#E89BA2" size={32} />
            </a>
          </div>
          <div className="hover:bg-ppink rounded-full p-2">
            <a href="https://www.yelp.com/biz/class-one-donuts-glendora-3?utm_campaign=www_business_share_popup&utm_medium=copy_link&utm_source=(direct)" className='text-dpink font-grotesk text-center font-bold lg:hover:bg-ddpink'>
              <FaYelp color="#E89BA2" size={32} />
            </a>
          </div>
        </div>
      </div>
      <div className="center-group grid lg:gap-2.5 lg:justify-center grid-flow-col">
          <a href="/">
            <img src={Logo} alt="Class One Donuts Logo" width={250} height="auto" />
          </a>
       </div>
      <div className="right-group grid gap-2.5 justify-self-end">
        <div className="">
          <div className="hidden lg:flex lg:gap-8">
            <a href="https://www.doordash.com/store/class-one-donuts-glendora-867803/" className='text-dpink lg:hover:text-xdpink font-grotesk text-center font-bold text-2xl hover:border-b hover:border-b-xdpink'>
              order
            </a>
            <a href="#contact" className='text-dpink font-grotesk text-center font-bold text-2xl lg:hover:text-xdpink hover:border-b hover:border-b-xdpink'>
              contact
            </a>
          </div>
          <div className="lg:hidden">
            <button className="p-3" aria-label="Mobile hamburger menu">
              <GiHamburgerMenu size={28} color="#E89BA2" onClick={() => setOpenModal(true)} className="cursor-pointer hover:bg-lightpink m-3 "/>
            </button>
            {/* Modal Overlay  */}
            {openModal && (

              <div className="lg:hidden fixed top-0 left-0 h-screen w-full bg-beige-white transition ease-in-out flex-col z-10">
                <button aria-label="Close Modal" className="flex justify-end p-3">
                  <SlClose size={32} color="#E89BA2" aria-hidden="true" onClick={() => setOpenModal(false)} className="cursor-pointer hover:bg-lightpink rounded-full"/>
                </button>
                <div>
                <ul className="flex flex-col justify-center items-center gap-3">
                  <li>
                    <a href="/" aria-label="logo">
                      <img src={Logo} alt="Class One Donuts Logo" width={300}/>
                    </a>
                  </li>
                  <li className="hover:bg-lightpink  py-2 px-3 rounded-full">
                    <a aria-label="order" href="https://www.doordash.com/store/class-one-donuts-glendora-867803/" className='text-dpink  font-grotesk text-center font-bold text-xl'>
                      order
                    </a>
                  </li>
                  <li className="hover:bg-lightpink  py-2 px-3 rounded-full">
                    <a aria-label="about us" href="https://www.theinfatuation.com/los-angeles/guides/best-donut-shops-in-southern-california-class-one-donuts" className='text-dpink  font-grotesk text-center font-bold text-xl'>
                      about us
                    </a>
                  </li>
                  <li className="hover:bg-lightpink py-2 px-3 rounded-full " >
                    <a onClick={() => setOpenModal(false)} href="#contact" className='text-dpink font-grotesk text-center font-bold text-xl lg:hover:text-xdpink'>contact</a>
                  </li>
                </ul>
                </div>
                <div className="flex flex-col justify-center items-center pt-36 ">
                  <h1 className='text-dpink font-grotesk text-center font-bold text-xl lg:hover:text-xdpink '>
                    follow our socials!
                  </h1>
                  <ul className="flex gap-5 p-3">
                    <li className="hover:bg-lightpink rounded-full p-2" aria-label="Facebook Link">
                      <a href="https://www.facebook.com/class1donuts/" >
                        <FaFacebook color="#E89BA2" size={32} />
                      </a>
                    </li>
                    <li className="hover:bg-lightpink rounded-full p-2" aria-label="Instagram Link">
                      <a href="https://www.instagram.com/class1donuts/" >
                        <FaInstagram color="#E89BA2" size={32} />
                      </a>
                    </li>
                    <li className="hover:bg-lightpink rounded-full p-2" aria-label="Yelp Link">
                      <a href="https://www.yelp.com/biz/class-one-donuts-glendora-3?utm_campaign=www_business_share_popup&utm_medium=copy_link&utm_source=(direct)" >
                        <FaYelp color="#E89BA2" size={32} />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
   )
}

export default Navigation;