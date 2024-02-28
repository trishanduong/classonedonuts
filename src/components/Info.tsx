import BusinessHours from "./BusinessHours";

const Info = () => {

  return (
    <>
    <section id="contact" className="font-grotesk w-full lg:h-screen">
      <div className="flex flex-col justify-center items-center text-center py-3 lg:pb-24" >
      </div>
      <div className="flex justify-center items-center">
        <div className="bg-white">
          <div className="max-w-sm rounded overflow-auto bg-ppink" >
              <a href="https://www.doordash.com/store/class-one-donuts-glendora-867803/" aria-label="Doordash">
                  <img className="w-full hover:opacity-75 hover:transition-opacity ease-in-out" src="https://s3-media0.fl.yelpcdn.com/bphoto/bAvd5b9UKWay9bZ1mY3YgA/o.jpg" alt="Chocolate donut being held in front of Class One Donuts store"  />
              </a>
              <div className="px-6 py-4">
                  <h1 className="font-bold text-dpink text-2xl mb-2">ADDRESS</h1>
                  <p className="font-bold text-xl mb-2 text-dbrown">1804 E Rte 66, Glendora, CA 91740</p>
                  <h1 className="text-dpink font-bold text-2xl"> Call Us </h1>
                  <p className="text-xl font-semibold text-dbrown">(626) 594-0079</p>
            </div>
          <a href="https://maps.app.goo.gl/qis8f47BweHR156AA" className="text-xl flex justify-center p-3 bg-pbrown text-dbrown font-bold hover:bg-dbrown hover:text-beige-white ease-in-out">
            View Map
          </a>
          </div>
        </div>
        <div className="pl-10 hidden lg:block">
          <BusinessHours />
        </div>
      </div>
    </section>
    <div className="lg:hidden">
      <BusinessHours />
    </div>
  </>
  )
};

export default Info;