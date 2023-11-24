import { useState, useEffect } from "react";
import { apiInvasiveSpecie } from "../../api/api";
import RenderInvasiveSpecie from "../../components/RenderInvasiveSpecie/RenderInvasiveSpecie";

const InvasiveSpecie = () => {
  const [invasive, setInvasive] = useState(null);

  useEffect(() => {
    apiInvasiveSpecie(setInvasive);
  }, []);

  return (
    <main>
      <RenderInvasiveSpecie invasive={invasive} />
    </main>
  );
};

export default InvasiveSpecie;
