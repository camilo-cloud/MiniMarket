import React from "react";
import "./Button.css";

/* 
  Button component
  Props:
    - variant: 'primary' | 'secondary' | 'icon' (defines colors and style)
    - children: button text or icon
    - onClick: function to handle clicks
*/
export default function Button({ variant = "primary", children, onClick, className = "" }) {
    return (
        <button className={`btn btn--${variant} ${className}`} onClick={onClick}>
            {children}
        </button>
    );
}


