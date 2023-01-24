import stateCityObj from "../utils/statecity.json";
import { useEffect, useState } from "react";

const UseCities = (state) => {
    const [cities,setCities]=useState([]);
    useEffect(()=>{
      setCities(stateCityObj? stateCityObj[state]:[]);
  },[state]);


return cities;
}
export default UseCities;