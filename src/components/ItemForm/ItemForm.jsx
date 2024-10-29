import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ItemForm.scss";

const BASE_URL = import.meta.env.VITE_BASE_URL;

function ItemForm({ item, setItem, handleSubmit }) {
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
    formData.append("tags", item.tags || "");
    formData.append("notes", item.notes || "");

    handleSubmit(formData);
  }

  return (
    <div>
      <form encType="multipart/form-data" onSubmit={onSubmit} className="form">
        <div className="form__buttons">
          <input
            type="submit"
            value="SUBMIT"
            className="form__button form__button--submit"
          />

          <button
            onClick={() => {
              navigate(-1);
              setItem([]);
            }}
            className="form__button form__button--cancel"
          >
            CANCEL
          </button>
        </div>

        <div className="form__main">
          <div className="form__files">
            {preview && (
              <img src={preview} alt="preview" className="form__img" />
            )}

            <div className="form__field">
              <label className="form__label">PICTURE:</label>
              <input
                type="file"
                name="image"
                accept="image/*"
                onChange={getFile}
                className="form__input"
              />
            </div>
          </div>

          <div className="form__inputs">
            <div className="form__field">
              <label className="form__label">SEASON:</label>
              <input
                type="text"
                name="season"
                className="form__input"
                value={item?.season || ""}
                onChange={handleChange}
              />
            </div>

            <div className="form__field">
              <label className="form__label">CATEGORY:</label>
              <input
                type="text"
                name="category"
                className="form__input"
                value={item?.category || ""}
                onChange={handleChange}
              />
            </div>

            <div className="form__field">
              <label className="form__label">COLOR:</label>
              <input
                type="text"
                name="color"
                className="form__input"
                value={item?.color}
                onChange={handleChange || ""}
              />
            </div>

            <div className="form__field">
              <label className="form__label">MATERIAL:</label>
              <input
                type="text"
                name="material"
                className="form__input"
                value={item?.material || ""}
                onChange={handleChange}
              />
            </div>

            <div className="form__field">
              <label className="form__label">PATTERN:</label>
              <input
                type="text"
                name="pattern"
                className="form__input"
                value={item?.pattern || ""}
                onChange={handleChange}
              />
            </div>

            <div className="form__field">
              <label className="form__label">TAGS:</label>
              <input
                type="text"
                name="tags"
                className="form__input"
                value={item?.tags || ""}
                onChange={handleChange}
              />
            </div>

            <div className="form__field">
              <label className="form__label">NOTES:</label>
              <input
                type="text"
                name="notes"
                className="form__input"
                value={item?.notes || ""}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
export default ItemForm;
