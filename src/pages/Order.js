import React from "react";
import MenuItems from "../components/MenuItems";

import ProductItems from "../components/ProductItems";

import { useParams } from "react-router-dom";
import { RESTORANTS } from "../fake/FakeData";

const Order = ({
  productsList,
  total,
  addToProductsList,
  removeOneToProductsList,
  deleteProduct,
}) => {
  const { id } = useParams();
  const selectedRest = RESTORANTS.find((rest) => rest.id === id);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 col-sm-12">
          <h3 className="text-center">Completa tu orden </h3>
          {selectedRest ? (
            <h5 className="text-center"> Restaurante: {selectedRest.name}</h5>
          ) : (
            <div></div>
          )}

          <MenuItems
            selectedRest={selectedRest}
            addToProductsList={addToProductsList}
          />
        </div>
        <div className="col-md-6 col-sm-12">
          <h3 className="text-center">Productos</h3>

          <ProductItems
            productsList={productsList}
            deleteProduct={deleteProduct}
            total={total}
            addToProductsList={addToProductsList}
            removeOneToProductsList={removeOneToProductsList}
          />
        </div>
      </div>
    </div>
  );
};

export default Order;
