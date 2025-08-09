import React, { useState } from "react";
export default function StickerStore() {
  const [stickers] = useState([
    { id: 1, name: "Cool Cat", price: 1.99 },
    { id: 2, name: "Funny Mask", price: 2.99 }
  ]);
  return (
    <div>
      <h4>Sticker Store</h4>
      <ul>
        {stickers.map(s => (
          <li key={s.id}>{s.name} - ${s.price} <button>Buy</button></li>
        ))}
      </ul>
    </div>
  );
}