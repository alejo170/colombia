import { useState, useEffect } from "react";
import { apiPresidents } from "../../api/api";
import RenderPresidents from "../../components/RenderPresidents/RenderPresidents";

const Presidents = () => {
  const [presidents, setPresidents] = useState(null);

  useEffect(() => {
    apiPresidents(setPresidents);
  }, []);

  return (
    <main>
      <RenderPresidents presidents={presidents} />
    </main>
  );
};

export default Presidents;
