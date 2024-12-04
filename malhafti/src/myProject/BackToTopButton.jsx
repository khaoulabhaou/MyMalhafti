import React, { useState, useEffect } from "react";

export default function BackToTopButton(){
  const [visible, setVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <button
      onClick={scrollToTop}
      id="backToTopBtn"
      className={`back-to-top-btn ${visible ? "visible" : ""}`}
      aria-label="Back to top"
    >
      ↑
    </button>
  );
};