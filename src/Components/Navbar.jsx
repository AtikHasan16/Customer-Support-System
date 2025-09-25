import React from "react";
import Container from "./Container";

const Navbar = () => {
  return (
    <div className="border-b-2 border-b-gray-300">
      <Container>
        <div className="flex justify-between items-center py-4 flex-col md:flex-row">
          <div className="font-bold text-2xl mb-2 md:mb-0">
            {" "}
            CS —Ticket System
          </div>
          <div className="flex items-center gap-4 flex-wrap justify-center">
            <div>
              {" "}
              <ul className="flex justify-center gap-x-4 md:gap-8 font-semibold flex-wrap">
                <li>Home</li>
                <li>FAQ</li>
                <li>Changelog</li>
                <li>Blog</li>
                <li>Download</li>
                <li>Contact</li>
              </ul>
            </div>
            <button className="bg-linear-to-l to-blue-600 from-purple-800 text-white py-3 px-4 rounded-md font-semibold">
              + New Ticket
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
