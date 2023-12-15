// Import necessary modules
import React, { useState, useEffect } from "react";
import axios from "axios";

// Define the PrivateImageDisplay component
const PrivateImageDisplay = ({ defaultSrc }) => {
  const [image, setImage] = useState(null);

  // Use the default image directly without additional processing
  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await axios.get(defaultSrc, { responseType: "blob" });
        const blob = new Blob([response.data]);
        const blobUrl = URL.createObjectURL(blob);
        setImage(blobUrl);
      } catch (error) {
        console.error("Error fetching or converting the image:", error);
      }
    };

    fetchImage();
  }, [defaultSrc]);

  return (
    <div>
      <h1>Private Image Display</h1>
      {image && <img style={{ width: "100%" }} src={image} alt="private" />}
    </div>
  );
};

export default PrivateImageDisplay;
