import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";


export default function Nav(){
    return (
      <div className="flex justify-around bg-pink-300 items-center"> {/* This makes the div a flex container and centers its children horizontally */}
        <div className="flex gap-7">
          <div>
            <Link href="https://www.instagram.com/class1donuts/">
              <FontAwesomeIcon icon={faInstagram} size="2xl" className="text-pink-500 hover:text-pink-900"/>
            </Link>
          </div>
          <div>
            <Link href="https://www.facebook.com/class1donuts/">
              <FontAwesomeIcon icon={faFacebook} size="2xl" className="text-pink-500 hover:text-pink-900"/>
            </Link>
          </div>
        </div>
        <Image 
          src="https://utfs.io/f/13babe1c-170f-4288-8b9e-a1ea99a7266f-1ff77d.svg" 
          width="200" 
          height="0" 
          alt="Class One Donuts"
        />
        <div className="flex gap-5 font-bold">
          <div className="text-pink-500 hover:text-pink-900">ORDER</div>
          <div className="text-pink-500 hover:text-pink-900">CONTACT</div>
        </div>
      </div>
    )
}
