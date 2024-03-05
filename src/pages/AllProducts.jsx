import React, { useEffect, useState } from "react";
import MenuLayouts from "../components/layout/MenuLayouts";
import CardCoffe from "../components/fragment/CardCoffe";
import axios from "axios";

const AllProducts = () => {
  const [dataCoffe, setDataCoffe] = useState(null);

  const getDataCoffe = async () => {
    const fetchDataCoffe = await axios.get("https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json");
    const resultDataCoffe = await fetchDataCoffe.data;

    setDataCoffe(resultDataCoffe);
    console.log(resultDataCoffe);
  };

  useEffect(()=>{
    getDataCoffe();
    localStorage.setItem('coffelist created by', 'dzulfikar2403')
  }, []);
  
  return (
    <>
      <MenuLayouts title="Our Collection">
        {dataCoffe && dataCoffe.map(el => 
          <CardCoffe key={el.id} data={el}/>
        )}
      </MenuLayouts>
    </>
  );
};

export default AllProducts;
