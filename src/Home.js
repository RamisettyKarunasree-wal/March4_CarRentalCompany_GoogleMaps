import company from "./company.jpg";

const Home = () => {
  return (
    <div>
      <div className="home">
        <h1>Best Car Rental Price Guaranteed!</h1>
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
      </div>
      <img src={company} className="company" />
    </div>
  );
};
export default Home;
