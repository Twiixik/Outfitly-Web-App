import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ref, update, remove } from "firebase/database";
import { db } from "../firebaseConfig";
import Logo from "../components/Logo"; 

const EditItem = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { item, category } = location.state;

  const [name, setName] = useState(item.name);
  const [tags, setTags] = useState(item.tags ? item.tags.join(", ") : "");
  const [image, setImage] = useState(item.image);

  const handleSave = async () => {
    try {
      const itemRef = ref(db, `wardrobes/${item.uid}/${category}/${item.id}`);
      console.log("Saving to path:", `wardrobes/${item.uid}/${category}/${item.id}`);
      await update(itemRef, {
        name,
        tags: tags.split(",").map((tag) => tag.trim()),
        image,
      });
      navigate("/wardrobe");
    } catch (error) {
      console.error("Error updating item:", error.message);
    }
  };

  const handleDelete = async () => {
    try {
      const itemRef = ref(db, `wardrobes/${item.uid}/${category}/${item.id}`);
      console.log("Deleting from path:", `wardrobes/${item.uid}/${category}/${item.id}`);
      await remove(itemRef);
      navigate("/wardrobe");
    } catch (error) {
      console.error("Error deleting item:", error.message);
    }
  };

  return (
    <div className="form-page">
      <Logo /> {/* Add the Logo component here */}
      <h1>Edit Item</h1>
      <form onSubmit={(e) => e.preventDefault()}>
        <label>
          Name
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
          />
        </label>

        <label>
          Tags (comma-separated)
          <input
            type="text"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
            placeholder="Add tags"
          />
        </label>

        <label>
          Image URL
          <input
            type="text"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            placeholder="Image URL"
          />
        </label>

        {/* Image Preview */}
        <div className="image-preview">
          {image ? <img src={image} alt="Preview" /> : <span>Image preview</span>}
        </div>

        <div className="form-buttons">
          <button type="button" onClick={handleSave}>
            Save Changes
          </button>
          <button type="button" className="delete-button" onClick={handleDelete}>
            Delete Item
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditItem;
