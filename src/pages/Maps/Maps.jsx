import { useState, useEffect } from "react";
import { apiMap } from "../../api/api";
import RenderMaps from "../../components/RenderMaps/RenderMaps";

const Maps = () => {
  const [maps, setMaps] = useState(null);

  useEffect(() => {
    apiMap(setMaps);
  }, []);

  return (
    <main>
      <RenderMaps maps={maps} />
    </main>
  );
};

export default Maps;
