import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = ({ setProductsList }) => {

  const deleteAndReturn = () => {    
      setProductsList([])    
  }

  return (
    <nav className=" container  navbar navbar-dark bg-dark">
      <div className="container-fluid">
        <NavLink to="/" className="navbar-brand mx-5"
        onClick={deleteAndReturn}>
          <h1>Delivery Online</h1>
        </NavLink>
        <div className="d-flex">
          <div className="btn-group">
            <NavLink
              to="/"
              className="btn btn-success active "
              onClick={deleteAndReturn}
            >
              1.- Elige tu delivery
            </NavLink>
            <NavLink to="/order" className="btn btn-success active ">
              2.- Realiza tu pedido
            </NavLink>
            <NavLink to="/complete-data" className="btn btn-success active ">
              3.- Completa tus datos
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
