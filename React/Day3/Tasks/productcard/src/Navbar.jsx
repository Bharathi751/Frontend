
import "./Navbar.css";

const Navbar = () => {
  return (
   
<nav className="navbar">
  <div className="companybrand">
    <img className="logo" src="/logo.jpg" alt="logo" />
    <h2>Apple Store</h2>
  </div>

  <div className="navbar-links">
    <a href="/">Home</a>
    <a href="/products">Product</a>
    <a href="/contact">Contact</a>
  </div>
</nav>
  );
};

export default Navbar;