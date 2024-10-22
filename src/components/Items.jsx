import { useEffect, useState } from "react";
import axios from "axios";
import "./Items.scss";

const BASE_URL = import.meta.env.VITE_BASE_URL;

function Items() {
  const [items, setItems] = useState([]);

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
    <div>
      {items.map((item) => {
        return <img src={item.image} key={item.id} />;
      })}
    </div>
  );
}
export default Items;
