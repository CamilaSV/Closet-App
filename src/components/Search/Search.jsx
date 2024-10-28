import { useEffect, useRef, useState } from "react";
import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL;

function Search({ setItems }) {
  const [search, setSearch] = useState("null");
  const formRef = useRef(null);

  useEffect(() => {
    const searchItems = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/item?s=${search}`);
        setItems(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    searchItems();
  }, [search]);

  async function handleSubmit(event) {
    event.preventDefault();
    setSearch(formRef.current.search.value);
  }
  return (
    <form ref={formRef} onSubmit={handleSubmit}>
      <input type="search" name="search" />
    </form>
  );
}
export default Search;
