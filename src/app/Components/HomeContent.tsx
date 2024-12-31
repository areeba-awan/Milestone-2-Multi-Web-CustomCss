import React from "react";
import Image from "next/image";
import Link from "next/link";
import "../Styles/HomeContent.css";

const HomeContent = () => {
  return (
    <div className="home-content">
      <Image
        src={"/h3.jpg"}
        layout="fill"
        objectFit="cover"
        alt="Background Image"
        className="background-image"
      />

      <div className="content-overlay">
        <h1 className="title">Welcome to TRIPI World</h1>
        <h2 className="subtitle"> Chase sunsets in lands unknown, where the sky kisses the horizon in shades of fiery gold.</h2>
        <Link href={"/Destinations"}
           className="shop-now-button">Explore Now
        </Link>
      </div>
    </div>
  );
};

export default HomeContent;