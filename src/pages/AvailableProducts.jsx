import React, { useEffect, useState } from "react";
import MenuLayouts from "../components/layout/MenuLayouts";
import CardCoffe from "../components/fragment/CardCoffe";
import { useFetch } from "../hooks/useFetch";

const AvailableProducts = () => {
  const dataCoffe = useFetch("https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json") 
  const [availableData, setAvailableData] = useState(null)
  
  useEffect(() => {
    if (dataCoffe) {
      const filterAvailableData = dataCoffe.filter((el) => el.available !== false);
      
      setAvailableData(filterAvailableData);
    }
  }, [dataCoffe]);

  return (
    <MenuLayouts title="Available Menu">
      {availableData && availableData.map((el) => <CardCoffe key={el.id} data={el} />)}
    </MenuLayouts>
  );
};

export default AvailableProducts;
