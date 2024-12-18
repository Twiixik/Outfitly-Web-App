import React, { useState, useEffect } from "react";
import { ref, get, update } from "firebase/database";
import { db } from "../firebaseConfig";
import { useLocation, useNavigate } from "react-router-dom";
import Logo from "../components/Logo";

const EditItem = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { category, itemId, uid } = location.state || {};

  const [itemName, setItemName] = useState("");
  const [itemTags, setItemTags] = useState("");
  const [itemImage, setItemImage] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchItemDetails = async () => {
      try {
        const itemRef = ref(db, `wardrobes/${uid}/${category}/${itemId}`);
        const snapshot = await get(itemRef);
        if (snapshot.exists()) {
          const item = snapshot.val();
          setItemName(item.name || "");
          setItemTags(item.tags ? item.tags.join(", ") : "");
          setItemImage(item.image || "");
        } else {
          setError("Item not found.");
        }
      } catch (err) {
        console.error("Error fetching item:", err.message);
        setError("Failed to fetch item details.");
      }
    };

    if (uid && category && itemId) fetchItemDetails();
  }, [uid, category, itemId]);

  const handleUpdateItem = async (e) => {
    e.preventDefault();

    if (!itemName.trim()) {
      setError("Item name is required!");
      return;
    }

    try {
      const itemRef = ref(db, `wardrobes/${uid}/${category}/${itemId}`);
      await update(itemRef, {
        name: itemName,
        tags: itemTags.split(",").map((tag) => tag.trim()),
        image: itemImage || "https://via.placeholder.com/150",
      });
      navigate("/wardrobe");
    } catch (err) {
      console.error("Error updating item:", err.message);
      setError("Failed to update item. Please try again.");
    }
  };

  return (
    <div className="form-page">
      <Logo /> {/* Add reusable Logo component */}
      <h1>Edit Item</h1>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form onSubmit={handleUpdateItem}>
        <label>
          Edit URL Image
          <input
            type="text"
            value={itemImage}
            onChange={(e) => setItemImage(e.target.value)}
            placeholder="Image URL"
          />
        </label>

        {/* Image Preview */}
        <div className="image-preview">
          {itemImage ? (
            <img src={itemImage} alt="Preview" />
          ) : (
            <span>Image preview</span>
          )}
        </div>

        <label>
          Edit Name
          <input
            type="text"
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
            placeholder="Item Name"
          />
        </label>

        <label>
          Edit Tags
          <input
            type="text"
            value={itemTags}
            onChange={(e) => setItemTags(e.target.value)}
            placeholder="Tags (comma-separated)"
          />
        </label>

        <button type="submit">Update Item</button>
      </form>
    </div>
  );
};

export default EditItem;
