import React from "react";
import { Link } from "react-router-dom";

;

const style = {
  decoration: {
    textDecoration: "none",
  },
  cardHeader: {
    backgroundColor: "blue",
    color: "white",
  },
  cardBody: {
    backgroundColor: "lightgrey",
    color: "black",
  },
};

const ItemCard = ({ RESTORANTS, searchDelivery, searchDescription, }) => {



  // buscador por nombre del delivery y por descripción
  const search = RESTORANTS.filter((restaurant) => {
    if (searchDelivery === "" && searchDescription === "") {
      return restaurant;
    } else if (
      restaurant.name.toLowerCase().includes(searchDelivery.toLowerCase()) &&
      restaurant.description
        .toLowerCase()
        .includes(searchDescription.toLowerCase())
    ) {
      return restaurant;
    }
  });

  return (
    <div className="row m-2">
      {search.map((restaurant) => (
        <div className="col-lg-3 col-md-6 col-sm-12" key={restaurant.id}>
          <Link to={`order/${restaurant.id}`} style={style.decoration} >
            <div className="card m-2">
              <div className="card-header" style={style.cardHeader}>
                {restaurant.name}
              </div>
              <div className="card-body" style={style.cardBody}>
                <p className="card-text">{restaurant.description}</p>
                <Link to={`order/${restaurant.id}`} 
                style={style.decoration}
                 >Realizar pedido</Link>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ItemCard;
