"use client";

import { useEffect, useState } from "react";

const lunches = [
  { name: "カレーライス", img: "/images/curry.jpg" },
];

export default function Page() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("mounted");
  }, []);

  return <div>{count}</div>;
}
