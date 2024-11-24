"use client";
import React, { useState } from "react";
import "./App.css";

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [hearts, setHearts] = useState([]);
  const [showText, setShowText] = useState(false);

  const handleClick = () => {
    if (isAnimating) return;

    setIsAnimating(true);

    if (isOpen) {
      return;
    } else {
      setIsOpen(true);
      setTimeout(() => {
        setIsAnimating(false);
        addHearts();
      }, 500);
    }
  };

  const addHearts = () => {
    const newHearts = Array.from({ length: 75 }, (_, id) => ({
      id,
      left: Math.random() * 100,
    }));
    setHearts(newHearts);

    setTimeout(() => {
      setHearts([]);
      setShowText(true);
    }, 7000);
  };

  return (
    <div className="main-container" onClick={handleClick}>
      <div
        className="text"
        style={{
          opacity: showText ? 1 : 0,
          transform: showText ? "translateY(-50%)" : "translateY(-100%)",
          transition: "opacity 2s ease, transform 2s ease",
        }}
      >
        Her ay yanımda bile olsan, gözümü kırptığımda güzelliğini görmediğimde
        yanarım. Hep yanımda ol nice yıllara bir tanem.
      </div>
      <div className="letter">
        <div className={`letter-top ${isOpen ? "open" : ""}`}></div>
        <div className={`letter-back`}></div>
        <div className="letter-left"></div>
        <div className="letter-right"></div>
        <div className="letter-bottom"></div>
        {isOpen && (
          <div className="photo">
            <img src="/photo.png" alt="seri4lize" />
          </div>
        )}
      </div>
      <div className="hearts-container">
        {hearts.map((heart) => (
          <div
            key={heart.id}
            className="heart"
            style={{
              left: `${heart.left}%`,
              top: `${Math.random() * 100}%`,
              fontSize: `${Math.random() * (3 - 1) + 1}rem`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          >
            ❤️
          </div>
        ))}
      </div>
      <div className="footer">
        Made by{" "}
        <a
          href="https://github.com/seri4lize"
          target="_blank"
          rel="noopener noreferrer"
        >
          seri4lize
        </a>
      </div>
    </div>
  );
}
