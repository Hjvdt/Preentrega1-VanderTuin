import React from "react";

const Button = ({ text, cb, color }) => {
    return (
        <button style={{ backgroundColor: color }}>
            {text}
        </button>
    );
};

export default Button; 
