import { useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Items.scss";

const BASE_URL = import.meta.env.VITE_BASE_URL;

function Items({ items, setItems }) {
  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/item`);
        setItems(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchItems();
  }, []);

  return (
    <div className="grid">
      {items.map((item) => {
        return (
          <Link to={`/item/${item.id}`} key={item.id} className="grid__item">
            {item.image && (
              <img
                src={`${BASE_URL}${item.image}`}
                alt="preview"
                className="grid__img"
              />
            )}
          </Link>
        );
      })}
    </div>
  );
}
export default Items;
