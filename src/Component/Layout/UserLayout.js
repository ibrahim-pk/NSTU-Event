import React from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

export default function UserLayout({ children }) {
  return (
    <div>
      <Navbar></Navbar>
      {children}
      <Footer />
    </div>
  );
}
