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
          <img
            src="/src/assets/add-button.svg"
            alt="add button"
            className="header__button"
          />
        </Link>
      ) : location.pathname !== "/new-item" ? (
        <img
          src="/src/assets/delete-button.svg"
          alt="delete button"
          className="header__button"
          onClick={handleDelete}
        />
      ) : (
        ""
      )}
    </div>
  );
}
export default Header;
