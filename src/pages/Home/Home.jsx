import { useState, useEffect } from "react";
import { apiInfoColombia } from "../../api/api";
import RenderHome from "../../components/RenderHome/RenderHome";

const Home = () => {
  const [information, setInformation] = useState(null);

  useEffect(() => {
    apiInfoColombia(setInformation);
  }, []);

  return (
    <main>
      <RenderHome information={information} />
    </main>
  );
};

export default Home;
