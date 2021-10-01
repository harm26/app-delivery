import React from "react";

const Search = ({ handleInputChange, handleInputChangeDescrip }) => {
  // formulario de busqueda
  return (
    <div className="container mt-2">
      <h3>Filtros:</h3>
      <div style={{ backgroundColor: "lightgray" }}>
        <form className="p-1">
          <div className="mx-2" style={{ display: "inline-block" }}>
            <div>
              <label className="form-label">Nombre:</label>
            </div>
            <input
              type="text"
              name="delivery"
              className="form-control"
              placeholder="Nombre"
              onChange={handleInputChange}
            />
          </div>
          <div className="mx-2" style={{ display: "inline-block" }}>
            <div>
              <label className="form-label">Descripcion:</label>
            </div>

            <input
              type="text"
              name="description"
              className="form-control"
              placeholder="Descripcion"
              onChange={handleInputChangeDescrip}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Search;
