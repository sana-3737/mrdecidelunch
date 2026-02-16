"use client";

import { useState } from "react";

const lunches = [
  { name: "カレーライス", img: "/images/curry.jpg" },
  { name: "ラーメン", img: "/images/ramen.jpg" },
  { name: "ハンバーグ", img: "/images/hamburg.jpg" },
  { name: "オムライス", img: "/images/omelette.jpg" },
];

export default function Page() {
  const [lunch, setLunch] = useState(lunches[0]);

  // 同じランチが連続で出ない
  const changeLunch = () => {
    let randomIndex;
    do {
      randomIndex = Math.floor(Math.random() * lunches.length);
    } while (lunches[randomIndex].name === lunch.name);

    setLunch(lunches[randomIndex]);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        background: "#f5f5f5",
      }}
    >
      <div
        style={{
          background: "white",
          padding: "30px",
          borderRadius: "20px",
          boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
          textAlign: "center",
          width: "350px",
        }}
      >
        <h1>今日のランチ 🍱</h1>

        <h2>{lunch.name}</h2>

        <img
          src={lunch.img}
          alt={lunch.name}
          width="300"
          style={{
            display: "block",
            margin: "20px auto",
            borderRadius: "15px",
            transition: "0.3s",
          }}
        />

        <button
          onClick={changeLunch}
          style={{
            padding: "10px 20px",
            border: "none",
            borderRadius: "10px",
            background: "#ff9800",
            color: "white",
            fontSize: "16px",
            cursor: "pointer",
          }}
        >
          ランチを決める 🍚
        </button>
      </div>
    </div>
  );
}
