import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

import { NavLink } from "react-router-dom";

const ProductItems = ({
  productsList,
  deleteProduct,
  total,
  addToProductsList,
  removeOneToProductsList,
}) => {
  return (
    <div>
      <table className="table  table-striped table-bordered">
        <thead>
          <tr className=" table-primary ">
            <th scope="col">Producto</th>
            <th scope="col">Cantidad</th>
            <th scope="col">Precio</th>
            <th scope="col">Sub-Total</th>
          </tr>
        </thead>
        <tbody>
          {productsList.length === 0 ? (
            <tr>
              <td colSpan="4">Esperando sus productos</td>
            </tr>
          ) : (
            productsList.map((product) => (
              <tr key={product.food_plate_name}>
                <td>
                  <button
                    className="btn btn-outline-danger mx-1"
                    onClick={() => deleteProduct(product)}
                  >
                    <FontAwesomeIcon icon={faTrash} /> 
                  </button>
                  {product.food_plate_name}
                </td>
                <td>
                  {product.quantity}
                  <div className="btn-group mx-3">
                    <button
                      type="button"
                      className="btn btn-outline-success"
                      onClick={() => addToProductsList(product)}
                    >
                      +
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-danger"
                      onClick={() => removeOneToProductsList(product)}
                    >
                      -
                    </button>
                  </div>
                </td>

                <td>$ {product.price} </td>
                <td>$ {product.price * product.quantity}</td>
              </tr>
            ))
          )}
          <tr>
            <td colSpan="3">Total a cancelar</td>
            <td>$ {total}</td>
          </tr>
        </tbody>
      </table>
      <div className="d-flex justify-content-end">
        <NavLink to="" className="btn btn-secondary me-2">
          Atras
        </NavLink>
        <NavLink
          to="/complete-data"
          className={
            productsList.length !== 0
              ? "btn btn-secondary"
              : "btn btn-secondary disabled"
          }
        >
          Continuar
        </NavLink>
      </div>
    </div>
  );
};

export default ProductItems;
