// Import necessary modules
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Image } from "image-js";
import dynamic from "next/dynamic";


// Define the default image source
const defaultSrc =
  "https://2022.creativesocialintranet.com/images/bigproduct/shutterstock_3185962342_20220603_092312.jpg";

// Create a dynamic import for the PrivateImageDisplay component
const PrivateImageDisplay = dynamic(() => import("../components/Getimage"), { ssr: false });

// Create your main component (in a page or another component)
const YourComponent = () => (
  <div>
    <h1>Your Component</h1>
    <PrivateImageDisplay defaultSrc={defaultSrc} />
  </div>
);

export default YourComponent;
