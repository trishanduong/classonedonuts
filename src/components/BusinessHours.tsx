const BusinessHours = () => {


  return (
    <div className="py-16 bg-beige-white font-grotesk">
        <div className="business-hours text-center text-pbrown  text-xl p-4 rounded-md">
            <p className="font-bold">Business Hours</p>
            <ul>
              <li>Sunday: 6:00 AM - 12:00 PM</li>
              <li>Monday: 5:00 AM - 2:00 PM</li>
              <li>Tuesday: 5:00 AM - 2:00 PM</li>
              <li>Wednesday: 5:00 AM - 2:00 PM</li>
              <li>Thursday: 5:00 AM - 2:00 PM</li>
              <li>Friday: 5:00 AM - 2:00 PM</li>
              <li>Saturday: 6:00 AM - 2:00 PM</li>
        </ul>
            <h1 className="text-2xl text-dbrown font-semibold pt-4 lg:hidden">we'll see you soon! </h1>
        </div>
    </div>
  )
};

export default BusinessHours;