import React from "react";

const DownloadImageButton = ({ imageUrl }) => {
  const handleDownload = async () => {
    try {
      const response = await fetch(imageUrl);
      const blob = await response.blob();

      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = "downloaded_image.jpg";

      // Append the link to the document and trigger a click
      document.body.appendChild(link);
      link.click();

      // Remove the link from the document
      document.body.removeChild(link);
    } catch (error) {
      console.error("Error downloading image:", error);
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h1>Download Image Button</h1>
      <button
        onClick={handleDownload}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          cursor: "pointer",
          backgroundColor: "#007bff",
          color: "#fff",
          border: "none",
          borderRadius: "4px",
        }}
      >
        Download Image
      </button>
    </div>
  );
};

// Your main component
const YourComponent = () => {
  const imageUrl =
    "https://2022.creativesocialintranet.com/images/bigproduct/shutterstock_3185962342_20220603_092312.jpg";

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Your Component</h1>
      <DownloadImageButton imageUrl={imageUrl} />
    </div>
  );
};

export default YourComponent;
