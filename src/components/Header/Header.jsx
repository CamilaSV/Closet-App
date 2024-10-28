import { useLocation, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Header.scss";

const BASE_URL = import.meta.env.VITE_BASE_URL;

function Header({ item }) {
  const location = useLocation();
  const navigate = useNavigate();

  async function handleDelete() {
    try {
      await axios.delete(`${BASE_URL}/item/${item.id}`);
      navigate("/item");
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="header">
      <h1 className="header__title">InCloset</h1>
      {location.pathname === "/" || location.pathname === "/item" ? (
        <Link to="/new-item">
          <input type="button" value="+" />
        </Link>
      ) : location.pathname !== "/new-item" ? (
        <input type="button" value="DELETE" onClick={handleDelete} />
      ) : (
        ""
      )}
    </div>
  );
}
export default Header;
