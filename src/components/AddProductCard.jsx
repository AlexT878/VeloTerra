import { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../services/productSlice";
import "./AddProductCard.css";
import { MESSAGES } from "../constants/strings";
import { isValidProductPayload } from "../utils/productValidator";

export default function AddProductCard() {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    name: "",
    category: "",
    price: "",
    image: "",
  });

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  async function handleCreate() {
    const newProductData = {
      name: formData.name,
      category: formData.category,
      price: Number(formData.price),
      image: formData.image,
    };

    if (!isValidProductPayload(newProductData)) {
      alert(
        "Invalid data! Check the name, category, and make sure the price is a positive number.",
      );
      return;
    }

    try {
      const result = await dispatch(addProduct(newProductData)).unwrap();
      alert(`New product added successfully! ID: ${result.id}`);
      setFormData({ name: "", category: "", price: "", image: "" });
    } catch (error) {
      alert(`Add product error: ${error.message}`);
    }
  }

  return (
    <div className="product-card create-card-mode">
      <div className="card-image-placeholder">
        <input
          type="text"
          name="image"
          className="input-image-url"
          placeholder={MESSAGES.IMAGE_PLACEHOLDER}
          value={formData.image}
          onChange={handleChange}
        />
      </div>
      <div className="card-content">
        <input
          type="text"
          name="category"
          className="product-category input-category"
          placeholder={MESSAGES.CATEGORY}
          value={formData.category}
          onChange={handleChange}
        />
        <input
          autoComplete="off"
          type="text"
          name="name"
          className="product-name input-name"
          placeholder={MESSAGES.CREATE_PRODUCT_NAME}
          value={formData.name}
          onChange={handleChange}
        />

        <div className="card-footer">
          <input
            type="number"
            name="price"
            className="product-price input-price"
            placeholder={MESSAGES.CREATE_PRICE}
            value={formData.price}
            onChange={handleChange}
          />
          <button className="add-cart-btn" onClick={handleCreate}>
            {MESSAGES.CREATE_BUTTON}
          </button>
        </div>
      </div>
    </div>
  );
}
