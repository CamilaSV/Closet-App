import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import ItemForm from "/src/components/ItemForm/ItemForm";
import Header from "/src/components/Header/Header";
import axios from "axios";
import "./ItemPage.scss";

const BASE_URL = import.meta.env.VITE_BASE_URL;

function ItemPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const [item, setItem] = useState({});

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const response = await axios.get(`${BASE_URL}${location.pathname}`);
        setItem(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchItem();
  }, [location.pathname]);

  async function handleSubmit(formData) {
    try {
      await axios.patch(`${BASE_URL}/item/${item.id}`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      navigate("/item");
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      <Header item={item} />
      <ItemForm item={item} setItem={setItem} handleSubmit={handleSubmit} />
    </div>
  );
}
export default ItemPage;
