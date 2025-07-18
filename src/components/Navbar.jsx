import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link to="/">خانه</Link> | <Link to="/products">محصولات</Link>
    </nav>
  );
}

export default Navbar;
