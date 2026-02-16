"use client";

import { useEffect, useState } from "react";

const lunches = [
  { name: "カレーライス", img: "/images/curry.jpg" },
  { name: "ラーメン", img: "/images/ramen.jpg" },
  { name: "ハンバーグ", img: "/images/hamburg.jpg" },
  { name: "オムライス", img: "/images/omelette.jpg" },
];

export default function LunchResult() {
  const [lunch, setLunch] = useState(null);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * lunches.length);
    setLunch(lunches[randomIndex]);
  }, []);

  if (!lunch) return null;

  return (
    <div style={{ textAlign: "center" }}>
      <h1>今日のランチ</h1>
      <h2>{lunch.name}</h2>
      <img src={lunch.img} alt={lunch.name} width="300" />
    </div>
  );
}
