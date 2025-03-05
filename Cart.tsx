"use client";

import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store";

const Cart: React.FC = () => {
  const { items, total } = useSelector((state: RootState) => state.cart);

  return (
    <div className="cart">
      <h2>Panier</h2>
      {items.map((item) => (
        <div key={item.id} className="cart-item">
          <h3>{item.name}</h3>
          <p>Quantité: {item.quantity}</p>
          <p>Prix: {item.price * item.quantity} €</p>
        </div>
      ))}
      <p>Total: {total} €</p>
      <style jsx>{`
        .cart {
          border: 1px solid #ddd;
          padding: 20px;
          max-width: 400px;
        }
        .cart-item {
          margin-bottom: 10px;
        }
      `}</style>
    </div>
  );
};

export default Cart;
