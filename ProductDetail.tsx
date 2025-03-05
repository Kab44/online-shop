"use client";

import React from "react";
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../store/cartSlice";

interface ProductDetailProps {
  product: {
    id: number;
    name: string;
    price: number;
    image: string;
    quantity: number;
  };
}

const ProductDetail: React.FC<ProductDetailProps> = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <div className="product-detail">
      <img src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <p>Prix: {product.price} €</p>
      <div>
        <button onClick={() => dispatch(removeFromCart(product))}>-</button>
        <button onClick={() => dispatch(addToCart(product))}>+</button>
      </div>
      <style jsx>{`
        .product-detail {
          border: 1px solid #ddd;
          padding: 20px;
          max-width: 300px;
        }
        img {
          max-width: 100%;
        }
        button {
          margin: 0 5px;
        }
      `}</style>
    </div>
  );
};

export default ProductDetail;
