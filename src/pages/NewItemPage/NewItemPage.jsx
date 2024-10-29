import { useNavigate } from "react-router-dom";
import { useState } from "react";
import ItemForm from "/src/components/ItemForm/ItemForm";
import Header from "/src/components/Header/Header";
import axios from "axios";
import "./NewItemPage.scss";

const BASE_URL = import.meta.env.VITE_BASE_URL;

function NewItemPage() {
  const [item, setItem] = useState({});

  const navigate = useNavigate();

  async function handleSubmit(formData) {
    try {
      await axios.post(`${BASE_URL}/item`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      navigate(-1);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      <Header />
      <ItemForm item={item} setItem={setItem} handleSubmit={handleSubmit} />
    </div>
  );
}
export default NewItemPage;
