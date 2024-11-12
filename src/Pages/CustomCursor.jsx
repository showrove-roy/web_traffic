import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", updatePosition);

    return () => {
      window.removeEventListener("mousemove", updatePosition);
    };
  }, []);
  return (
    <div
      className="fixed z-50 pointer-events-none w-10 h-10 bg-transparent border border-yellow rounded-full transform -translate-x-1/2 -translate-y-1/2"
      style={{ left: position.x, top: position.y }}
    />
  );
}