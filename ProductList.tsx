"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../store/cartSlice";
import { RootState } from "../store";

interface Product {
  id: number;
  name: string;
  price: number;
  image?: string;
  quantity?: number;
}

const ProductList: React.FC = () => {
  const dispatch = useDispatch();
  const { items } = useSelector((state: RootState) => state.cart);
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:4000/products");
        setProducts(
          response.data.map((product: any) => ({
            ...product,
            id: product.id,
          }))
        );
      } catch (err) {
        setError("Erreur lors du chargement des produits");
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  if (loading) return <p>Chargement des produits...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      {products.map((product) => (
        <div key={product.id} className="product">
          <img
            src={product.image || "/images/default.jpg"}
            alt={product.name}
          />
          <h3>{product.name}</h3>
          <p>Prix: {product.price} €</p>
          <div>
            <button
              onClick={() =>
                dispatch(
                  removeFromCart({
                    ...product,
                    id: product.id,
                    quantity: product.quantity || 0,
                  })
                )
              }
            >
              -
            </button>
            <span>
              {items.find((item) => item.id === product.id)?.quantity || 0}
            </span>
            <button
              onClick={() =>
                dispatch(
                  addToCart({
                    ...product,
                    id: product.id,
                    quantity: product.quantity || 0,
                  })
                )
              }
            >
              +
            </button>
          </div>
        </div>
      ))}
      <style jsx>{`
        .product {
          border: 1px solid #ddd;
          padding: 10px;
          margin: 10px 0;
        }
        img {
          max-width: 100px;
        }
        button {
          margin: 0 5px;
        }
      `}</style>
    </div>
  );
};

export default ProductList;
