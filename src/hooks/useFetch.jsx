import React, { useEffect, useState } from "react";
import axios from "axios";

export const useFetch = (API) => {
  const [dataCoffe, setDataCoffe] = useState(null);

  const getDataCoffe = async () => {
    const { data } = await axios.get(`${API}`);

    setDataCoffe(data);
  };

  useEffect(() => {
    getDataCoffe();
    localStorage.setItem("coffelist created by", "dzulfikar2403");
  }, []);

  return dataCoffe;
};
