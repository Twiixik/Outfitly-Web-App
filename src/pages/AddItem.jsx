import React, { useState } from "react";
import { ref, push } from "firebase/database";
import { db } from "../firebaseConfig";
import { useNavigate } from "react-router-dom";
import Logo from "../components/Logo";

const AddItem = ({ uid }) => {
  const [category, setCategory] = useState("layers");
  const [itemName, setItemName] = useState("");
  const [itemTags, setItemTags] = useState("");
  const [itemImage, setItemImage] = useState("");
  const [previewImage, setPreviewImage] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleAddItem = async (e) => {
    e.preventDefault();
    if (!itemName.trim()) {
      setError("Item name is required!");
      return;
    }

    try {
      const itemRef = ref(db, `wardrobes/${uid}/${category}`);
      await push(itemRef, {
        name: itemName,
        tags: itemTags.split(",").map((tag) => tag.trim()),
        image: itemImage || "https://via.placeholder.com/150",
      });
      navigate("/wardrobe");
    } catch (err) {
      console.error("Error adding item:", err.message);
      setError("Failed to add item. Please try again.");
    }
  };

  const handleImageChange = (e) => {
    const imageUrl = e.target.value;
    setItemImage(imageUrl);
    setPreviewImage(imageUrl);
  };

  return (
    <div className="form-page">
      <Logo />
      <h1>Add new item</h1>
      <form onSubmit={handleAddItem} aria-labelledby="form-heading">
        <h2 id="form-heading">Add New Wardrobe Item</h2>

        {/* Image Input */}
        <label htmlFor="item-image">Add URL Image</label>
        <input
          id="item-image"
          type="text"
          value={itemImage}
          onChange={handleImageChange}
          placeholder="Add URL Image"
          aria-describedby="image-description"
        />
        <div id="image-description">Enter a URL to display an image preview.</div>

        {/* Image Preview */}
        <div className="image-preview" aria-live="polite">
          {previewImage ? (
            <img src={previewImage} alt="Preview of the item" />
          ) : (
            <span>Image preview will appear here.</span>
          )}
        </div>

        {/* Category Dropdown */}
        <label htmlFor="item-category">Select Category</label>
        <select
          id="item-category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          aria-label="Select category for the new item"
        >
          <option value="layers">Layers</option>
          <option value="shirts">Shirts</option>
          <option value="pants">Pants</option>
          <option value="dresses">Dresses</option>
          <option value="skirts">Skirts</option>
          <option value="shoes">Shoes</option>
          <option value="accessories">Accessories</option>
        </select>

        {/* Item Name */}
        <label htmlFor="item-name">Name</label>
        <input
          id="item-name"
          type="text"
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
          placeholder="Enter item name"
          aria-required="true"
        />

        {/* Tags Input */}
        <label htmlFor="item-tags">Add Tags</label>
        <input
          id="item-tags"
          type="text"
          value={itemTags}
          onChange={(e) => setItemTags(e.target.value)}
          placeholder="Add tags separated by commas"
          aria-describedby="tags-description"
        />
        <div id="tags-description">Add tags separated by commas (e.g., casual, summer).</div>

        {/* Submit Button */}
        <button type="submit" aria-label="Add new item to your wardrobe">
          Add Item
        </button>

        {/* Error Message */}
        {error && (
          <div role="alert" style={{ color: "red" }}>
            {error}
          </div>
        )}
      </form>
    </div>
  );
};

export default AddItem;
