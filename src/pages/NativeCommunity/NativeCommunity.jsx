import { useState, useEffect } from "react";
import RenderNativeCommunity from "../../components/RenderNativeCommunity/RenderNativeCommunity";
import { apiNativeCommunity } from "../../api/api";

const NativeCommunity = () => {
  const [nativeCommunity, setNativeCommunity] = useState(null);
  useEffect(() => {
    apiNativeCommunity(setNativeCommunity);
  }, []);

  return (
    <main>
      <RenderNativeCommunity nativeCommunity={nativeCommunity} />
    </main>
  );
};

export default NativeCommunity;
