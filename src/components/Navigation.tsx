// import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { SlClose } from "react-icons/sl";

const Navigation = () => {
  // const [openModal, setOpenModal] = useState(false);

   return (
    <div className="navbar grid grid-cols-[auto_1fr_auto] items-center w-screen px-5 lg:px-20">
      <div className="left-group grid gap-2.5 text-xl">
        <div className="hidden lg:flex lg:gap-8 " >
          <a href="https://www.facebook.com/class1donuts/" className='text-dpink font-grotesk text-center font-bold lg:hover:text-xdpink'>facebook</a>
          <a href="https://www.instagram.com/class1donuts/" className='text-dpink font-grotesk text-center font-bold lg:hover:text-xdpink'>instagram</a>
        </div>
      </div>
      <div className="center-group grid lg:gap-2.5 lg:justify-center grid-flow-col">
          <a href="/">
            <img src="/src/assets/logo.svg" alt="" />
          </a>
       </div>
      <div className="right-group grid gap-2.5 justify-self-end">
        <div className="">
          <div className="hidden lg:flex lg:gap-8">
            <a href="https://www.doordash.com/store/class-one-donuts-glendora-867803/" className='text-dpink lg:hover:text-xdpink font-grotesk text-center font-bold text-xl'>order</a>
            <a href="#contact" className='text-dpink font-grotesk text-center font-bold text-xl lg:hover:text-xdpink'>contact</a>
          </div>
          <div className="lg:hidden">
            <GiHamburgerMenu size={28} color="#D95963" onClick={() => {}} />
            {/* Modal Overlay  */}
            {/* <div className="lg:hidden fixed top-0 left-0 h-screen w-full bg-ppink transition ease-in-out flex-col z-10">
              <SlClose size={32} color="#F9F5F1" />
              <ul>
                <li>this is my menu</li>
              </ul>
            </div> */}
          </div>
        </div>
      </div>
    </div>
   )
}

export default Navigation;