"use client";

import Header from "../components/Header";
import React from "react";
import { Provider } from "react-redux";
import { store } from "../store";
import "../styles/globals.css";

const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <Provider store={store}>
      <html lang="fr">
        <body>
          <Header />
          <main>{children}</main>
        </body>
      </html>
    </Provider>
  );
};

export default RootLayout;
