import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Catherine Tao</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/favourite">Current Favourites</Link>
        <Link to="/sideproject">Side Projects</Link>
        <Link to="/contact">Contact Me</Link>
      </div>
    </nav>
  );
};

export default Navbar;
