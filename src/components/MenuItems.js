import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'



const MenuItems = ({ selectedRest, addToProductsList }) => {
  return (
    <table className="table table-striped table-bordered">
      <thead>
        <tr>
          <th scope="col">Plato</th>
          <th scope="col">Precio</th>
          <th scope="col">Accion</th>
        </tr>
      </thead>

      <tbody>
        {selectedRest ? (
          selectedRest.menu.map((el) => (
            <tr key={el.food_plate_name}>
              <td> {el.food_plate_name} </td>
              <td>$ {el.price} </td>
              <td>
                <button
                  type="button"
                  className="btn btn-outline-success"
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  title={el.food_plate_name}
                >
                  
                  <FontAwesomeIcon icon={faSearch} /> 
                </button>
                <button
                  className="btn btn-outline-success mx-1"
                  onClick={() => addToProductsList(el)}
                >
                  <FontAwesomeIcon icon={faPlus} /> 
                </button>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="3">Seleccione un delivery</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default MenuItems;
