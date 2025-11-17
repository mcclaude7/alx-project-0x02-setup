import React from "react";
import { type ButtonProps } from "@/interfaces";

const Button: React.FC<ButtonProps> = ({
    label,
    size="medium",
    shape='rounded-md',
    onclick,
    className = "",
}) => {
    const sizeClasses = {
        small: "px-3 py-1 text-sm",
        medium: "px-2 py-2 text-md",
        large: "px-6 py-3 text-lg",
    };
    const shapeClasses = {
        "rounded-sm": "rounded-sm",
        "rounded-md": "rounded-md",
        "rounded-full": "rounded-full"
    }
    return(
        <button 
           onClick={onclick}
           className={`bg-blue-600 text-white 
           ${sizeClasses[size]}
           ${shapeClasses[shape]}
           ${className}
           `}>
            {label}
        </button>
    );
};

export default Button;