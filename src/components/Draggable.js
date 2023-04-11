import React, { useState } from "react";

const Draggable = ({ children }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);

  const handleMouseDown = (e) => {
    setDragging(true);
    e.currentTarget.style.cursor = "grabbing";
  };

  const handleMouseUp = (e) => {
    setDragging(false);
    e.currentTarget.style.cursor = "grab";
  };

  const handleMouseMove = (e) => {
    if (dragging) {
      setPosition({
        x: position.x + e.movementX,
        y: position.y + e.movementY,
      });
    }
  };

  return (
    <div
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
      style={{
        position: "absolute",
        top: position.y,
        left: position.x,
        cursor: "grab",
      }}
    >
      {children}
    </div>
  );
};

export default Draggable;
