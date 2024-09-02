// CustomButton.js
import React from "react";
import "./CustomButton.css"; // Import CSS for styling (optional)

// Define the CustomButton component
const CustomButton = ({ text, onClick, style, disabled }) => {
  return (
    <button
      className="custom-button" // Apply custom styles
      onClick={onClick} // Handle the button click event
      style={style} // Allow custom inline styles
      disabled={disabled} // Handle disabled state
    >
      {text}
    </button>
  );
};

export default CustomButton;
