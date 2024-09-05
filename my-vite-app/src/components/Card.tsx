import  { useState } from "react";
import img1 from "../assets/wide-angle-shot-single-tree-grow.jpg";
import img2 from "../assets/react.svg";

const Card = () => {
  const [state1, setState1] = useState(false);
  const [state2, setState2] = useState(false);
  const [state3, setState3] = useState(false);

  const handleCommit = () => {
    setState1(!state1);
    setState2(false);
    setState3(false);
  };

  const handleAnalytics = () => {
    setState2(!state2);
    setState3(false);
    setState1(false);
  };
  const handleUpgrade = () => {
    setState3(!state3);
    setState2(false);
    setState1(false);
  };

  return (
    <div className="h-screen outline w-full flex items-center justify-center ">
      <div className="h-[600px] w-[500px] outline flex items-center justify-start flex-col">
        <img
          src={img1}
          alt=""
          className="relative inset-0 h-[90%] w-full object cover p-8 "
        />
        <div className="flex items-center justify-between gap-32">
          <p>#IxDChallenge</p>
          <p>Day-5</p>
          <img src={img2} alt="" />
        </div>
      </div>
      <div className="absolute -top-16 -inset-6 flex items-center justify-center outline">
        <div className="p-4 rounded-xl bg-white">
          <div className=" h-[370px] w-[350px] p-5 flex flex-col items-end justify-between gap-4">
            {!state1 && !state2 && !state3 ? (
              <div className="h-full w-full rounded-md shadow-md shadow-gray-300 flex items-end pb-5 justify-center">
                <div className="w-fit bg-pink-300 rounded-md h-fit shadow p-1 shadow-gray-500">
                  Hello from Commit
                </div>
              </div>
            ) : null}
            {state1 ? (
              <div className="h-full w-full rounded-md shadow-md shadow-gray-300 flex items-end pb-5 justify-center">
                <div className="w-fit bg-pink-300 rounded-md p-1 h-fit shadow shadow-gray-500">
                  Hello from Commit
                </div>
              </div>
            ) : null}
            {state2 ? (
              <div className="h-full w-full rounded-md shadow-md shadow-gray-300 flex items-end pb-5 justify-center">
                <div className="w-fit bg-pink-300 rounded-md h-fit p-1 shadow shadow-gray-500">
                  Hello from Analytics
                </div>
              </div>
            ) : null}
            {state3 ? (
              <div className="h-full w-full rounded-md shadow-md shadow-gray-300 flex items-end pb-5 justify-center">
                <div className="w-fit bg-pink-300 rounded-md h-fit p-1 shadow shadow-gray-500">
                  Hello from Upgrade
                </div>
              </div>
            ) : null}
            <div className="flex gap-12">
              <button
                onClick={handleCommit}
                className="font-bold h-fit p-1 hover:bg-black hover:text-white rounded-md"
              >
                Commit
              </button>
              <button
                onClick={handleAnalytics}
                className="font-bold h-fit p-1 hover:bg-black hover:text-white rounded-md"
              >
                Analytics
              </button>
              <button
                onClick={handleUpgrade}
                className="h-fit p-1 hover:bg-black font-bold hover:text-white rounded-md"
              >
                Upgrade
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
