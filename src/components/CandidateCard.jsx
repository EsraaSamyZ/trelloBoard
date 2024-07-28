import React from "react";
import { getSignalColor } from "../utils/getSignalColor";
import { ReactComponent as SignalIcon } from "../assets/signal-icon.svg";
import { ReactComponent as StarIcon } from "../assets/star-icon.svg";

const CandidateCard = ({ candidate }) => {
  const signalColorClass = getSignalColor(candidate.internetSignal);

  return (
    <div className='bg-white rounded-2xl shadow-md flex space-x-3 p-4'>

      <div className="flex-col space-y-3">
        <img
          src={candidate.avatar}
          alt={candidate.name}
          className="w-16 h-16 rounded-xl"
        />
        <div className="flex items-center place-content-center rounded-xl space-x-1 bg-gray-100 font-medium text-lg px-2">
          <p className="text-gray-700">{candidate.rating}.0</p>
          <StarIcon className="text-yellow-500 w-5 " />
        </div>
      </div>

      <div className="flex-col space-y-2 w-full">
        <div className="flex items-center justify-between">
          <div className="flex space-x-1 items-center justify-between">
            <SignalIcon className={`w-6 ${signalColorClass}`} />

            <h3 className="text-lg font-bold">{candidate.name}</h3>
          </div>
          {candidate.status === "New" && (
          <div className="rounded-xl space-x-1 bg-gray-200 font-medium text-base text-blue-600 px-3 py-1">
            <p>{candidate.status}</p>
          </div>
        )}
        </div>

        <p className="font-medium text-lg text-gray-400">{candidate.location}</p>


        <div className="flex items-center justify-between">
        <p className="font-medium text-lg text-gray-400">{candidate.contact}</p>
        {candidate.status === "Followed" && (
          <div className="rounded-xl space-x-1 bg-blue-600 font-medium text-base text-gray-200 px-3 py-1">
            <p>{candidate.status}</p>
          </div>)}
        </div>


      </div>
    </div>
  );
};

export default CandidateCard;
