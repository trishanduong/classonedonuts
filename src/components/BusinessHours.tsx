const BusinessHours = () => {


  return (
    <div className="py-16 bg-beige-white font-grotesk">
        <div className="business-hours text-center text-pbrown  text-xl p-4 rounded-md">
            <h1 className="text-4xl text-dbrown font-semibold lg:hidden">VISIT US</h1>
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
        </div>
    </div>
  )
};

export default BusinessHours;