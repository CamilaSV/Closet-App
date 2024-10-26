import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import "./ItemPage.scss";

const BASE_URL = import.meta.env.VITE_BASE_URL;

function ItemPage() {
  const location = useLocation();
  const [item, setItem] = useState([]);
  const formRef = useRef(null);
  const navigate = useNavigate();

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
  }, []);

  async function updateItem() {
    let updatedItem = {
      id: item.id,
      image: item.image,
      season: formRef.current.season.value,
      category: formRef.current.category.value,
      color: formRef.current.color.value,
      material: formRef.current.material.value,
      pattern: formRef.current.pattern.value,
      style: formRef.current.style.value,
      fit: formRef.current.fit.value,
      brand: formRef.current.brand.value,
      tags: formRef.current.tags.value,
      notes: formRef.current.notes.value,
      extra_imgs: item.extra_imgs,
    };

    try {
      const response = await axios.patch(
        `${BASE_URL}${location.pathname}`,
        updatedItem
      );
      navigate("/item");
    } catch (error) {
      console.error(error);
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    updateItem();
  }

  return (
    <div>
      <form ref={formRef} onSubmit={handleSubmit}>
        <img src={item.image} />
        <input type="submit" value="SUBMIT" />
        <button onClick={() => navigate("/item")}>CANCEL</button>

        <label>
          Season:
          <input
            type="text"
            name="season"
            className="item--input"
            value={item.season}
          />
        </label>
        <label>
          Category:
          <input
            type="text"
            name="category"
            className="item--input"
            value={item.category}
          />
        </label>
        <label>
          Color:
          <input
            type="text"
            name="color"
            className="item--input"
            value={item.color}
          />
        </label>
        <label>
          Material:
          <input
            type="text"
            name="material"
            className="item--input"
            value={item.material}
          />
        </label>
        <label>
          Pattern:
          <input
            type="text"
            name="pattern"
            className="item--input"
            value={item.pattern}
          />
        </label>
        <label>
          Style:
          <input
            type="text"
            name="style"
            className="item--input"
            value={item.style}
          />
        </label>
        <label>
          Fit:
          <input
            type="text"
            name="fit"
            className="item--input"
            value={item.fit}
          />
        </label>
        <label>
          Brand:
          <input
            type="text"
            name="brand"
            className="item--input"
            value={item.brand}
          />
        </label>
        <label>
          Tags:
          <input
            type="text"
            name="tags"
            className="item--input"
            value={item.tags}
          />
        </label>
        <label>
          Notes:
          <input
            type="text"
            name="notes"
            className="item--input"
            value={item.notes}
          />
        </label>
        <label>
          Extra Images
          {item.extra_imgs?.map((img, i) => {
            return (
              <img>
                src={img} key={i}
              </img>
            );
          })}
        </label>
      </form>
    </div>
  );
}
export default ItemPage;
