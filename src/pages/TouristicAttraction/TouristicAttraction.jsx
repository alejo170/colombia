import { useState, useEffect, useCallback } from "react";
import RenderTouristicsAttraction from "../../components/RenderTouristicsAttraction/RenderTouristicsAttraction";

const TouristicAttraction = () => {
  const [touristicAttraction, setTouristicAttraction] = useState();

  useEffect(() => {
    apiTouristic();
  }, []);

  const apiTouristic = useCallback(async () => {
    const response = await fetch(
      "https://api-colombia.com/api/v1/TouristicAttraction"
    );
    const data = await response.json();
    if (data.length > 0) {
      setTouristicAttraction(data);
    }
  }, [touristicAttraction]);

  return (
    <RenderTouristicsAttraction touristicAttraction={touristicAttraction} />
  );
};

export default TouristicAttraction;
