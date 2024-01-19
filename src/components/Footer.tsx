import Logo from "../assets/logo.svg";

import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYelp } from "react-icons/fa";


const Footer = () => {
    return (
        <footer className="h-auto w-full flex flex-col justify-center items-center bg-dbrown">
            <img src={Logo} alt="Class One Donuts Logo" />
            <p className="text-pbrown">© Copyright 2023 | Class One Donuts</p>
            <ul className="flex gap-5 p-3">
                <li className="hover:bg-beige-white rounded-full p-2">
                  <a href="https://www.facebook.com/class1donuts/" aria-label="Link to Facebook page">
                    <FaFacebook color="#b99169ff" size={28} />
                  </a>
                </li>
                <li className="hover:bg-beige-white rounded-full p-2"  >
                  <a href="https://www.instagram.com/class1donuts/" aria-label="Link to Instagram profile">
                    <FaInstagram color="#b99169ff" size={28} />
                  </a>
                </li>
                <li className="hover:bg-beige-white rounded-full p-2" >
                  <a aria-label="Link to Yelp business page" href="https://www.yelp.com/biz/class-one-donuts-glendora-3?utm_campaign=www_business_share_popup&utm_medium=copy_link&utm_source=(direct)" >
                    <FaYelp color="#b99169ff" size={28} />
                  </a>
                </li>
            </ul>
        </footer>
    )
};

export default Footer;