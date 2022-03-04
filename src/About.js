import { BrowserRouter, Link } from "react-router-dom";
import about from "./about.png";
const About = () => {
  return (
    <div>
      <div className="home">
        <h1>About Us</h1>
        <br />
        <p>
          Our online booking service is easy and fast. Reserve your rental car
          now and get competitive prices compaired to other competitors. Pay
          your vehicle on arrival.
        </p>
        <p>
          With Flexible Bookings & No Hidden Fees, Secure Your Car Rental at The
          Best Price Now. We Speak Your Language. Unbeatable Prices. No Credit
          Card Fees. Types: Economy, Mini, Compact, People carrier,
          Intermediate, Premium, 4x4, Estate, SUV, Convertible
        </p>
        <button>Learn More</button>
      </div>
      <img src={about} className="company" />
    </div>
  );
};
export default About;
