import { useEffect, useState } from "react";
import MobileHeader from "./MobileHeader";
import LargeScreenHeader from "./LargeScreenHeader";

function getWindowSize() {
  const { innerWidth, innerHeight } = window;
  return { innerWidth, innerHeight };
}

function CombinedHeader() {
  const [windowSize, setWindowsize] = useState(getWindowSize());

  useEffect(() => {
    function handleWindowResize() {
      setWindowsize(getWindowSize());
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <>
      {windowSize.innerWidth < 768 ? <MobileHeader /> : <LargeScreenHeader />}
    </>
  );
}

export default CombinedHeader;
