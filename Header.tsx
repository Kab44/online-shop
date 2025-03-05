"use client";

import React from "react";
import Link from "next/link";
import { useSelector } from "react-redux";
import { RootState } from "../store";

const Header: React.FC = () => {
  const { total } = useSelector((state: RootState) => state.cart);
  const isAuthenticated = false; // Remplacez par votre logique d'authentification
  const isAdmin = false; // Remplacez par votre logique d'administration

  return (
    <header className="header">
      <nav>
        <Link href="/">Accueil</Link>
        <Link href="/products">Produits</Link>
        <Link href="/cart">Panier (Total: {total} €)</Link>
        {isAuthenticated ? (
          <>
            <Link href="/payment">Paiement</Link>
            {isAdmin && <Link href="/admin">Admin</Link>}
            <Link href="/users/logout">Déconnexion</Link>
          </>
        ) : (
          <>
            <Link href="/users/login">Connexion</Link>
            <Link href="/users/signup">Inscription</Link>
          </>
        )}
      </nav>
      <style jsx>{`
        .header {
          background-color: #f8f9fa;
          padding: 20px;
          border-bottom: 1px solid #ddd;
        }
        nav {
          display: flex;
          gap: 15px;
        }
        a {
          text-decoration: none;
          color: #007bff;
        }
        a:hover {
          text-decoration: underline;
        }
      `}</style>
    </header>
  );
};

export default Header;
