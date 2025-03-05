"use client";

import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store";

const Payment: React.FC = () => {
  const { items, total } = useSelector((state: RootState) => state.cart);
  const [address, setAddress] = useState("");

  const handlePayment = () => {
    // Logique de paiement
    console.log("Paiement effectué:", { items, address, total });
  };

  return (
    <div className="payment">
      <h2>Paiement</h2>
      <div>
        {items.map((item) => (
          <div key={item.id}>
            <h3>{item.name}</h3>
            <p>Quantité: {item.quantity}</p>
            <p>Prix: {item.price * item.quantity} €</p>
          </div>
        ))}
      </div>
      <p>Total: {total} €</p>
      <input
        type="text"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        placeholder="Adresse de livraison"
      />
      <button onClick={handlePayment}>Payer</button>
      <style jsx>{`
        .payment {
          border: 1px solid #ddd;
          padding: 20px;
          max-width: 400px;
        }
        input {
          width: 100%;
          padding: 10px;
          margin: 10px 0;
        }
        button {
          padding: 10px 20px;
        }
      `}</style>
    </div>
  );
};

export default Payment;
