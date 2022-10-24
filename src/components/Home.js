import React from "react";
import { arrow, frame1, frame2, phone } from "../assets/index";

const Home = () => {
  return (
    <div className="flex flex-wrap md:m-auto ">
      <section className=" w-full md:w-full md:flex md:justify-between md:flex-row-reverse">
        <div className="p-10 md:w-1/2">
          <div className="w-80 m-auto md:mx-2">
            <h1 className="inter w-full   max-w-xl text-4xl md:text-5xl text-center md:text-left font-extrabold">
              Digital products lovingly made with a human touch.
            </h1>
          </div>
        </div>
        <div className="md:min-w-1/2 ">
          <img  src={phone} className="md:w-1/2 w-full md:min-w-[500px] hover:"  alt="" />
        </div>
        
      </section>
      <section className="w-full md:w-full md:flex md:justify-between ">
        <div className=" md:w-1/2 md:max-w-[500px]  p-3 gap-3 flex flex-col">
          <div className=" items-center h-1/3 w-full flex justify-between">
            <p className=" hover:text-gray-twitter inter font-extrabold text-xl">
              Dribbble
            </p>
            <img src={arrow} className="w-4" alt="" />
          </div>
          <div className=" h-1 w-full bg-black"></div>
          <div className=" h-1/3 items-center w-full flex justify-between">
            <p className=" hover:text-gray-twitter font-extrabold inter text-xl ">
              Twitter
            </p>
            <img className=" w-4" src={arrow} alt="" />
          </div>
        </div>
        <div className="w-full md:text-center md:flex md:w-1/2">
          <img className=" w-full  md:w-1/2 md:invisible " src={frame1} alt="" />
          <img className=" w-full md:max-h-[400px]  md:w-1/2 " src={frame2} alt="" />
        </div>
      </section>
    </div>
  );
};

export default Home;
