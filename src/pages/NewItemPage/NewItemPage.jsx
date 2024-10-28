import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import ItemForm from "/src/components/ItemForm/ItemForm";
import Header from "/src/components/Header/Header";
import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL;

function NewItemPage() {
  const [item, setItem] = useState({});
  const formRef = useRef(null);
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
      <h1>Add new item</h1>
      <ItemForm
        item={item}
        setItem={setItem}
        formRef={formRef}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}
export default NewItemPage;
