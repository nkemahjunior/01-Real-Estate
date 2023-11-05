
import { useEffect, useState } from "react";
import Button from "./Button";
import Title from "./Title";
import { useRentProperties } from "../../../features/Rent/useRentProperties";
import Spinner from "../../Spinner";
import CardMobile from "./CardMobile";
import CardLarge from "./CardLarge";
import { Link } from "react-router-dom";


function getWindowSize() {


  const { innerWidth, innerHeight } = window;
  return { innerWidth, innerHeight };
}

function CardParent() {
 
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

  const { isLoading, rentData } = useRentProperties();

  if (isLoading) return <Spinner />;

  const mobileHomeData = rentData.filter((el) => el.id === 1);
  const largeScreenHomeData = rentData.filter((el) => el.id < 9);
  

  return (
    <>
      {windowSize.innerWidth < 768 ? (
        <>
          <Title />
          <Link to ={`/home/rent/details/${mobileHomeData[0].id} `} >
          <CardMobile isLoading={isLoading} mobileData={mobileHomeData} /></Link>
          <div className="mb-4 mx-4" >
            <Button />
          </div>
        </>

      ) : (
        <div className="max-w-[100%] mt-16 ">
          <h1 className="font-inter font-bold text-2xl px-4 2xl:p-6 mb-4 2xl:mx-6">
            Available Properties
          </h1>

          <div className="grid grid-cols-3 gap-8    xlplus:grid-cols-4 px-5 2xl:pt-2 2xl:px-12  ">
            {largeScreenHomeData.map((el) => (
              <Link to ={`/home/rent/details/${el.id} `}  key={el.id} >
              <CardLarge  LargeScreenData={el} isLoading={isLoading} /></Link>
            ))}
          </div>
          <div className="mb-4 mx-12">
            <Button />
          </div>
        </div>
      )}
    </>
  );
}

export default CardParent;
