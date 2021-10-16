import React from "react";
// import "./Slider.css";
import {useInView} from 'react-intersection-observer';


export const Slider = ({ imageSrc, title, subtitle, flipped }) => {

  const {ref, inView } = useInView({
    threshold:0.4,
  });

  const renderContent = () => {
    if (!flipped) {
      return (
        <>
          <img src={imageSrc} alt="Gym" className="w-3/5" />
          <div className="flex-1 flex flex-col justify-center items-center p-5 text-center">
            <h1 className="text-center">{title}</h1>
            <p>{subtitle}</p>
          </div>
        </>
      );
    } else {
      return (
        <>
          <div className="flex-1 flex flex-col justify-center items-center p-5 text-center">
            <h1 className="text-center">{title}</h1>
            <p>{subtitle}</p>
          </div>
          <img src={imageSrc} alt="Travel" className="w-3/5" />
        </>
      );
    }
  };

  return (
    <div  ref={ref}  className={inView ? "flex items-center m-5 opacity-0 transform scale-90 transition duration-1000 opacity-100 transform scale-100 transition duration-1000" : "flex items-center m-5 opacity-0 transform scale-90 transition duration-1000"} >
      {renderContent()}
    </div>
  )
};
