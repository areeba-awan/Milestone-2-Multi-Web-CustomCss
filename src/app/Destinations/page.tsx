import React from "react";
import "../Styles/Destinations.css";

const Page = () => {
  const destinations = [
    {
      id: 1,
      name: "Destination 1",
      price: 399.99,
      description: "Sunset View",
      image: "/h4.jpg",
    },
    {
      id: 2,
      name: "Destination 2",
      price: 299.99,
      description: "Full Coverage Master Bedroom",
      image: "/h1.jpg",
    },
    {
      id: 3,
      name: "Destination 3",
      price: 399.99,
      description: "Maldives View",
      image: "/n4.jpg",
    },
    {
      id: 4,
      name: "Destination 4",
      price: 499.99,
      description: "Enlightning Bright Buildings",
      image: "/d4.jpg",
    },
    {
      id: 5,
      name: "Destination 5",
      price: 599.99,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "/d5.jpg",
    },
    {
      id: 6,
      name: "Destination 6",
      price: 699.99,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "/d6.jpg",
    },
    {
      id: 7,
      name: "Destination 7",
      price: 799.99,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "/d7.jpg",
    },
    {
      id: 8,
      name: "Destination 8",
      price: 899.99,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "/d8.jpg",
    },
    {
      id: 9,
      name: "Destination 9",
      price: 999.99,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "/n3.jpg",
    },
    {
      id: 10,
      name: "Destination 10",
      price: 1099.99,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "/d3.jpg",
    },
    {
      id: 11,
      name: "Destination 11",
      price: 1099.99,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "/d2.jpg",
    },
    {
      id: 12,
      name: "Destination 12",
      price: 1099.99,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "/d1.jpg",
    },
  ];

  return (
    <div className="destinations-container">
      <div className="destination-grid">
        {destinations.map((destination) => (
          <div key={destination.id} className="destination-card">
            <img
              src={destination.image}
              alt={destination.name}
              className="destination-image"
            />
            <div className="destination-info">
              <h2 className="destination-name">{destination.name}</h2>
              <p className="destination-description">{destination.description}</p>
              <div className="destination-footer">
                <span className="destination-price">${destination.price}</span>
                <button className="add-to-wishlist">Add to Wishlist</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;