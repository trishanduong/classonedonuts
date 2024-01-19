import { GiDonut } from "react-icons/gi";

const Info = () => {
  return (
    <div className="font-grotesk w-full h-screen flex justify-center items-center bg-beige-white p-5">
      <div className="bg-white">
        <div className="max-w-sm rounded overflow-hidden bg-ppink">
            <a href="">
                <img className="w-full hover:opacity-75 hover:transition-opacity ease-in-out" src="https://s3-media0.fl.yelpcdn.com/bphoto/5IeCtxWtVMq9oinvdRV9hw/o.jpg" alt="Chocolate donut being held in front of Class One Donuts store"  />
            </a>
            <div className="px-6 py-4">
                <h1 className="font-bold text-dpink text-2xl mb-2">ADDRESS</h1>
                <p className="font-bold text-xl mb-2 text-dbrown">1804 E Rte 66, Glendora, CA 91740</p>
                <h1 className="text-dpink font-bold text-2xl"> call us </h1>
                <p className="text-xl font-semibold text-dbrown">(626) 594-0079</p>
        </div>
        <a href="https://maps.app.goo.gl/qis8f47BweHR156AA" className="flex justify-center p-3 bg-pbrown text-dbrown font-bold">View Map</a>
        </div>
        {/* <img src="https://s3-media0.fl.yelpcdn.com/bphoto/v3k4RGtHJbDmyod-Jz7now/o.jpg" alt="" /> */}
      </div>
      
  </div>
  )
};

export default Info;