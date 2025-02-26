import { useState } from "react";
import { storage } from "../firebaseConfig";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

const AdminPanel = () => {
  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState("");

  const handleImageUpload = async () => {
    if (!image) return;

    const imageRef = ref(storage, `carouselImages/${image.name}`);
    await uploadBytes(imageRef, image);

    const url = await getDownloadURL(imageRef);
    setImageUrl(url);
    console.log("Uploaded Image URL:", url);
  };

  return (
    <div className="container">
      <h2 className="fw-bold">Admin Panel - Upload Image</h2>
      <input type="file" onChange={(e) => setImage(e.target.files[0])} />
      <button onClick={handleImageUpload} className="btn btn-primary mt-2">
        Upload Image
      </button>

      {imageUrl && (
        <div className="mt-3">
          <img src={imageUrl} alt="Uploaded" className="img-fluid" style={{ maxWidth: "300px" }} />
        </div>
      )}
    </div>
  );
};

export default AdminPanel;
