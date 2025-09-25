import React from "react";
import Container from "./Container";

const Progressbar = ({ dataLength, resLength }) => {
  return (
    <div className="bg-gray-100 py-20">
      <Container>
        <div className="flex justify-between gap-4 ">
          <div className="font-bold text-center bg-linear-120 from-blue-600 to-purple-800 rounded-md  flex-2/4 text-white space-y-4   shadow-lg shadow-gray-500 ">
            <div className="bg-banner-left py-10 md:py-20 h-full">
              <h1 className="text-xl ">In-Progress</h1>
              <h1 className="text-4xl md:text-6xl">{dataLength}</h1>
            </div>
          </div>
          <div className="font-bold text-4xl text-center bg-linear-120 from-[#54CF68] to-[#00827A] rounded-md flex-2/4 text-white space-y-4  shadow-lg shadow-gray-500">
            <div className="bg-banner-left py-10 md:py-20 h-full">
              <h1 className="text-xl ">Resolve</h1>
              <h1 className="text-4xl md:text-6xl">{resLength}</h1>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Progressbar;
