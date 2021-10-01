import React, { useState } from "react";
import Card from "../components/Card";
import Search from "../components/Search";
import { RESTORANTS } from "../fake/FakeData";

const Home = () => {
  const [searchDelivery, setSearchDelivery] = useState("");
  const [searchDescription, setSearchDescription] = useState("");

  const handleInputChange = (event) => {
    setSearchDelivery(event.target.value);
  };

  const handleInputChangeDescrip = (event) => {
    setSearchDescription(event.target.value);
  };

  return (
    <div>
      <Search
        handleInputChange={handleInputChange}
        searchDelivery={searchDelivery}
        handleInputChangeDescrip={handleInputChangeDescrip}
        searchDescription={searchDescription}
      />
      <Card
        RESTORANTS={RESTORANTS}
        searchDelivery={searchDelivery}
        searchDescription={searchDescription}
      />
    </div>
  );
};

export default Home;
