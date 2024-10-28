import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const BASE_URL = import.meta.env.VITE_BASE_URL;

function ItemForm({ item, setItem, formRef, handleSubmit }) {
  const [preview, setPreview] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (item.image) {
      setPreview(`${BASE_URL}${item.image}`);
      if (item.image?.type) {
        setPreview(URL.createObjectURL(item.image));
      }
    }
  }, [item]);

  function getFile(event) {
    const file = event.target.files[0];
    setItem({ ...item, image: file });
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setItem({ ...item, [name]: value });
  }

  function onSubmit(event) {
    event.preventDefault();

    const formData = new FormData();
    if (item.image) formData.append("image", item.image);
    formData.append("season", item.season || "");
    formData.append("category", item.category || "");
    formData.append("color", item.color || "");
    formData.append("material", item.material || "");
    formData.append("pattern", item.pattern || "");
    formData.append("style", item.style || "");
    formData.append("fit", item.fit || "");
    formData.append("brand", item.brand || "");
    formData.append("tags", item.tags || "");
    formData.append("notes", item.notes || "");

    handleSubmit(formData);
  }

  return (
    <div>
      <form ref={formRef} encType="multipart/form-data" onSubmit={onSubmit}>
        <input type="submit" value="SUBMIT" />
        <button onClick={() => navigate("/item")}>CANCEL</button>

        {preview && <img src={preview} alt="preview" />}

        <input type="file" name="image" accept="image/*" onChange={getFile} />

        <label>
          Season:
          <input
            type="text"
            name="season"
            className="item--input"
            value={item?.season || ""}
            onChange={handleChange}
          />
        </label>

        <label>
          Category:
          <input
            type="text"
            name="category"
            className="item--input"
            value={item?.category || ""}
            onChange={handleChange}
          />
        </label>

        <label>
          Color:
          <input
            type="text"
            name="color"
            className="item--input"
            value={item?.color}
            onChange={handleChange || ""}
          />
        </label>

        <label>
          Material:
          <input
            type="text"
            name="material"
            className="item--input"
            value={item?.material || ""}
            onChange={handleChange}
          />
        </label>

        <label>
          Pattern:
          <input
            type="text"
            name="pattern"
            className="item--input"
            value={item?.pattern || ""}
            onChange={handleChange}
          />
        </label>

        <label>
          Style:
          <input
            type="text"
            name="style"
            className="item--input"
            value={item?.style || ""}
            onChange={handleChange}
          />
        </label>

        <label>
          Fit:
          <input
            type="text"
            name="fit"
            className="item--input"
            value={item?.fit || ""}
            onChange={handleChange}
          />
        </label>

        <label>
          Brand:
          <input
            type="text"
            name="brand"
            className="item--input"
            value={item?.brand || ""}
            onChange={handleChange}
          />
        </label>

        <label>
          Tags:
          <input
            type="text"
            name="tags"
            className="item--input"
            value={item?.tags || ""}
            onChange={handleChange}
          />
        </label>

        <label>
          Notes:
          <input
            type="text"
            name="notes"
            className="item--input"
            value={item?.notes || ""}
            onChange={handleChange}
          />
        </label>
        {/* <label>
          Extra Images
          <input
            type="file"
            name="extra_imgs"
            accept="image/*,.pdf"
            onChange={getFile}
            multiple
          />
          {item?.extra_imgs?.map((img, i) => {
            return <img src={img} key={i}></img>;
          })}
        </label> */}
      </form>
    </div>
  );
}
export default ItemForm;
