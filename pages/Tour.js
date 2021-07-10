import React from "react";

function Tour() {
  return (
    <div className=" w-full text-gray-900 my-24" id="tour">
      <hr className="border-2 border-gray-900 sm:mx-24" />
      <div className="mt-6 text-5xl uppercase text-center font-semibold text-shadow">
        TOUR
      </div>
      <div className="bg-black text-white font-bold bg-opacity-40 rounded-md w-full h-56 my-8 p-8">
        <div>There are no upcoming events.</div>
        <div className="text-center mt-8">
          <div className="text-center">
            {" "}
            Get notified when new events are announced in your area
          </div>
          <button className="uppercase bg-white text-gray-900 my-4 py-2 px-4 border-2 border-gray-900 font-semibold">
            Follow Dust Biters
          </button>
        </div>
      </div>
    </div>
  );
}

export default Tour;
