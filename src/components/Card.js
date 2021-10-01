import React from "react";
import ItemCard from "./ItemCard";



const Card = ({ RESTORANTS, searchDelivery, searchDescription }) => {



  return (
    <div className="container mt-1">
      <h1>Deliveries</h1>
      <ItemCard
        RESTORANTS={RESTORANTS}
        searchDelivery={searchDelivery}
        searchDescription={searchDescription}
      />
    </div>
  );
};

export default Card;
