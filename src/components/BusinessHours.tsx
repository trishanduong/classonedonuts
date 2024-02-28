const BusinessHours = () => {


  return (
    <div className="py-16 font-grotesk">
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
            <h1 className="text-2xl text-dbrown font-semibold py-4 lg:hidden">We look forward to meeting you! </h1>
        </div>
    </div>
  )
};

export default BusinessHours;