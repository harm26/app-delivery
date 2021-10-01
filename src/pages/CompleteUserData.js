import React, { useState } from "react";
import FormContact from "../components/FormContact";
import ProductsItemsClon from "../components/ProductsItemsClon";
import { useForm } from "react-hook-form";

const CompleteUserData = ({
  productsList,
  total,
  addToProductsList,
  removeOneToProductsList,
  deleteProduct,
}) => {
  const { reset } = useForm();

  const [getAndSendData, setGetAndSendData] = useState([]);

  const getOrder = (data, e) => {
    // e.preventDefault()
    setGetAndSendData([data, productsList, { "total a cancelar": total }]);
    // resetea el formulario de contacto
    e.target.reset();
  };
  return (
    <div className="container mt-2">
      <div className="row">
        <div className="col-md-6 col-sm-12">
          <h1>Completar datos</h1>
          <FormContact getOrder={getOrder} getAndSendData={getAndSendData} />
        </div>
        <div className="col-md-6 col-sm-12 mt-5">
          <ProductsItemsClon
            productsList={productsList}
            deleteProduct={deleteProduct}
            total={total}
            addToProductsList={addToProductsList}
            removeOneToProductsList={removeOneToProductsList}
            getOrder={getOrder}
          />
        </div>
      </div>
    </div>
  );
};

export default CompleteUserData;
