"use client";

import React from "react";

const Admin: React.FC = () => {
  const orders = [
    { id: 1, status: "En cours", address: "123 Rue Exemple" },
    { id: 2, status: "Livrée", address: "456 Avenue Test" },
  ];

  const markAsDelivered = (id: number) => {
    console.log("Commande marquée comme livrée:", id);
  };

  return (
    <div className="admin">
      <h2>Gestion des Commandes</h2>
      {orders.map((order) => (
        <div key={order.id} className="order">
          <p>ID: {order.id}</p>
          <p>Statut: {order.status}</p>
          <p>Adresse: {order.address}</p>
          <button onClick={() => markAsDelivered(order.id)}>
            Marquer comme livrée
          </button>
        </div>
      ))}
      <style jsx>{`
        .admin {
          border: 1px solid #ddd;
          padding: 20px;
          max-width: 400px;
        }
        .order {
          margin-bottom: 20px;
        }
        button {
          padding: 10px 20px;
        }
      `}</style>
    </div>
  );
};

export default Admin;
