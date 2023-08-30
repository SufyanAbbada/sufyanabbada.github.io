"use client";
import React, { useEffect, useRef } from "react";

export default function CustomCursor() {
  const cursorRef = useRef(null);

  useEffect(() => {
    const moveCursor = (e) => {
      const { clientX: x, clientY: y } = e;

      const cursor = cursorRef.current;

      const cursorRadius = cursor.offsetWidth / 2;

      cursor.style.opacity = 1;
      cursor.style.transform = `translate3d(${x - cursorRadius}px, ${
        y - cursorRadius
      }px, 0)`;
    };

    const hideCursor = () => {
      const cursor = cursorRef.current;
      cursor.style.opacity = 0;
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseout", hideCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseout", hideCursor);
    };
  }, []);

  return <div ref={cursorRef} id="cursor"></div>;
}
