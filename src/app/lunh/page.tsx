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

  // ランダムでランチ変更
  const changeLunch = () => {
    const randomIndex = Math.floor(Math.random() * lunches.length);
    setLunch(lunches[randomIndex]);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>今日のランチ</h1>

      <h2>{lunch.name}</h2>

      <img
        src={lunch.img}
        alt={lunch.name}
        width="300"
      />

      <br />
      <button onClick={changeLunch}>
        ランチを決める 🍚
      </button>
    </div>
  );
}
