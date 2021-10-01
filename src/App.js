import { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Order from "./pages/Order";
import CompleteUserData from "./pages/CompleteUserData";

function App() {
  const [productsList, setProductsList] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    totalValue();
  }, [productsList]);

  //funcion para calcular el total de la lista de producto (realizar orden)
  const totalValue = () => {
    let subTotalVavue = 0;
    productsList.map((X) => (subTotalVavue += X.price * X.quantity));
    setTotal(subTotalVavue);
  };
  // agrega los productos a ordenar con un atributo cantidad que:
  // si el producto ya existe en la lista que le sume 1 a la cantidad

  const addToProductsList = (el) => {
    const exist = productsList.find(
      (product) => product.food_plate_name === el.food_plate_name
    );
    if (exist) {
      setProductsList(
        productsList.map((element) =>
          element.food_plate_name === el.food_plate_name
            ? { ...exist, quantity: exist.quantity + 1 }
            : element
        )
      );
    } else {
      setProductsList([...productsList, { ...el, quantity: 1 }]);
    }
  };

  // disminuye en uno la cantidad del producto,y si la cantidad del producto es uno
  // la deja igual
  const removeOneToProductsList = (el) => {
    const exist = productsList.find(
      (product) => product.food_plate_name === el.food_plate_name
    );
    if (exist.quantity === 1) {
      return;
    } else {
      setProductsList(
        productsList.map((element) =>
          element.food_plate_name === el.food_plate_name
            ? { ...exist, quantity: exist.quantity - 1 }
            : element
        )
      );
    }
  };

  const deleteProduct = (product) => {

    let result = window.confirm("Esta seguro de eliminar?")
    if(result){
      let newProductsList = productsList.filter(
        (item) => item.food_plate_name !== product.food_plate_name
      );
      setProductsList(newProductsList);
    }else{
      return
    }

    
  };

  return (
    <Router>
      <div className="App">
        <Navbar
         setProductsList={setProductsList}
         productsList={productsList}/>
        <Switch>
          <Route path="/complete-data">
            <CompleteUserData
              productsList={productsList}
              total={total}
              totalValue={totalValue}
              addToProductsList={addToProductsList}
              removeOneToProductsList={removeOneToProductsList}
              deleteProduct={deleteProduct}
            />
          </Route>
          <Route path="/order/:id">
            <Order
              productsList={productsList}
              total={total}
              totalValue={totalValue}
              addToProductsList={addToProductsList}
              removeOneToProductsList={removeOneToProductsList}
              deleteProduct={deleteProduct}
            />
          </Route>
          <Route path="/order">
            <Order
              productsList={productsList}
              total={total}
              totalValue={totalValue}
              addToProductsList={addToProductsList}
              removeOneToProductsList={removeOneToProductsList}
              deleteProduct={deleteProduct}
            />
          </Route>

          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
