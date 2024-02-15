// FlareCursor.jsx
"use client";

import React, { useState, useEffect } from "react";

const FlareCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [isClickable, setIsClickable] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const handleMouseMove = (e) => {
    setPosition({ x: e.clientX, y: e.clientY });

    const target = e.target;
    const cursorStyle = window
      .getComputedStyle(target)
      .getPropertyValue("cursor");

    setIsPointer(cursorStyle === "pointer");
    setIsClickable(
      target.tagName.toLowerCase() === "a" ||
        target.tagName.toLowerCase() === "button"
    );
  };

  const handleClick = () => {
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 1000); // Reset isClicked after 1 second
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("click", handleClick);
    };
  }, []);

  const flareSize = isPointer ? (isClickable ? 50 : 30) : 0;
  const cursorColor = isPointer
    ? isClickable
      ? "#00bcd4"
      : "#ff4081"
    : "#ffffff";
  const cursorStyle = isPointer ? { left: "-25px", top: "-25px" } : {};
  const rotation = isPointer ? 45 : 0;

  return (
    <div
      className={`flare ${isPointer ? "pointer" : ""} ${
        isClicked ? "pulse" : ""
      }`}
      style={{
        ...cursorStyle,
        left: `${position.x}px`,
        top: `${position.y}px`,
        width: `${flareSize}px`,
        height: `${flareSize}px`,
        backgroundColor: cursorColor,
        transition:
          "width 0.2s ease-in-out, height 0.2s ease-in-out, background-color 0.2s ease-in-out, transform 0.2s ease-in-out",
        borderRadius: "50%",
        position: "fixed",
        pointerEvents: "none",
        zIndex: 999999,
        boxShadow: `0 0 10px ${cursorColor}`,
        transform: `rotate(${rotation}deg)`,
        opacity: isPointer ? 0.8 : 1,
      }}></div>
  );
};

export default FlareCursor;
