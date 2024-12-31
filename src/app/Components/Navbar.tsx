"use client";
import React, { useState } from "react";
import Link from "next/link";
import { TiThMenu } from "react-icons/ti";
import { IoCartSharp } from "react-icons/io5";
import "../Styles/Navbar.css"; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  return (
    <div>
      <div className="navbar">
        <div className="navbar-header">
          <Link href={"/"} className="logo">
          TRIPIII.
          </Link>
          <button className="menu-button" onClick={() => setIsOpen(!isOpen)}>
            <TiThMenu />
          </button>
        </div>

        <div className={`menu ${isOpen ? "menu-open" : ""}`}>
          <div className="menu-links">
            <Link href={"/"} className="menu-link">
              Home
            </Link>
            <Link href={"/About"} className="menu-link">
              About
            </Link>
            <Link href={"/Destinations"} className="menu-link">
             Destinations
            </Link>
            <Link href={"/Contact"} className="menu-link">
              Contact
            </Link>
            <div className="cart">
              <button
                onClick={() => setCartOpen(!cartOpen)}
                className="cart-button"
              >
                <IoCartSharp />
              </button>
              <div className={`cart-popup ${cartOpen ? "cart-popup-open" : ""}`}>
                <p>Your Cart Is Empty</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;