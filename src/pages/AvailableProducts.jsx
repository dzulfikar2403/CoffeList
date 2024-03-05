import React, { useEffect, useState } from "react";
import MenuLayouts from "../components/layout/MenuLayouts";
import CardCoffe from "../components/fragment/CardCoffe";
import axios from "axios";

const AvailableProducts = () => {
  const [availableData, setAvailableData] = useState(null);
  const [openAvailable, setOpenAvailable] = useState(true);

  const getDataCoffe = async () => {
    const fetchDataCoffe = await axios.get("https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json");
    const resultDataCoffe = await fetchDataCoffe.data;
    setAvailableData(resultDataCoffe);

    setOpenAvailable(false)
    console.log(resultDataCoffe);
  };
  
  useEffect(() => {
    getDataCoffe();
  }, []);
  
  useEffect(() => {
    if (availableData) {
      const filterAvailableData = availableData.filter((el) => el.available !== false);
      
      setAvailableData(filterAvailableData);
      console.log(filterAvailableData);
    }
  }, [openAvailable]);

  return (
    <MenuLayouts title="Available Menu">
      {availableData && availableData.map((el) => <CardCoffe key={el.id} data={el} />)}
    </MenuLayouts>
  );
};

export default AvailableProducts;
