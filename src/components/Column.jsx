import React from "react";
import { Droppable, Draggable } from "react-beautiful-dnd";
import CandidateCard from "./CandidateCard";

const Column = ({ columnId, title, candidates, columnColor }) => {

  return (
    <div className="w-full p-8 bg-gray-100 rounded-3xl space-y-5">
      <div className="flex items-center space-x-2">
        <div className="w-6 h-6 border-2 border-gray-400 rounded-md"></div>
        <h2 className="text-2xl font-semibold">{title}</h2>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <p className="text-3xl font-semibold">8</p>
          <p className="text-lg font-semibold text-gray-400">REJECTED</p>
        </div>
        <div className="flex items-center space-x-2">
          <p className="text-3xl font-semibold">{candidates.length}</p>
          <p className="text-lg font-semibold text-gray-400">TOTAL</p>
        </div>
      </div>

      <div className={`w-full ${columnColor} h-2 rounded-full`}></div>

      <div>
        <Droppable droppableId={columnId}>
          {(provided, snapshot) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              className="rounded-lg min-h-screen min-h-52 space-y-4"
            >
              {candidates.map((candidate, index) => (
                <Draggable key={`key-${candidate.id}`} draggableId={`draggable-${candidate.id}`} index={index}>
                  {(provided, snapshot) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <CandidateCard candidate={candidate} />
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </div>
    </div>
  );
};

export default Column;
