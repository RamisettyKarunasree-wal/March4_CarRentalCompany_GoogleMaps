import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Employees from "./Employees";
import Home from "./Home";
import logo from "./logo.svg";

const CarRentalCompany = () => {
  return (
    <div>
      <BrowserRouter>
        <div className="menu">
          <Link className="link" to="/">
            Home
          </Link>
          <Link className="link" to="/about">
            About
          </Link>
          <Link className="link" to="/contact">
            Contact
          </Link>
          <Link className="link" to="/employees">
            Employees
          </Link>
        </div>
        <img src={logo} className="logo" />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/employees" element={<Employees />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
export default CarRentalCompany;
