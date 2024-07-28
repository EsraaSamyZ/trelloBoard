import React, { useState, useEffect } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import Column from '../components/Column';
import candidatesData from '../candidates.json';

const initialData = {
  columns: {
    'applied': { title: 'Applied', candidates: [], color: 'bg-blue-500' },
    'shortlisted': { title: 'Shortlisted', candidates: [], color: 'bg-green-500' },
    'interview': { title: 'Interview', candidates: [], color: 'bg-red-500' }
  }
};

const Board = () => {
  const [data, setData] = useState(initialData);

  useEffect(() => {


    setData({
      columns: {
        'applied': { title: 'Applied', candidates: candidatesData.candidates, color: 'bg-blue-500' },
        'shortlisted': { title: 'Shortlisted', candidates: [], color: 'bg-green-500' },
        'interview': { title: 'Interview', candidates: [], color: 'bg-red-500' }
      }
    });
  }, []);

  const onDragEnd = (result) => {
    const { destination, source } = result;

    if (!destination) return;

    console.log('source:', source);
    console.log('destination:', destination)

    const sInd = source.droppableId;
    const dInd = destination.droppableId;

    console.log('sInd:', sInd);
    console.log('dInd:', dInd)

    if (
      dInd === sInd &&
      destination.index === source.index
    ) {
      return;
    }

    console.log('Data:', data)

    const start = data.columns[sInd];
    const finish = data.columns[dInd];

    console.log('start:', start);
    console.log('finish:', finish)

    if (start === finish) {
      const newCandidates = Array.from(start.candidates);
      const [moved] = newCandidates.splice(source.index, 1);
      newCandidates.splice(destination.index, 0, moved);

      const newColumn = {
        ...start,
        candidates: newCandidates,
      };

      setData((prevState) => ({
        ...prevState,
        columns: {
          ...prevState.columns,
          [sInd]: newColumn,
        },
      }));

      return;
    }

    const startCandidates = Array.from(start.candidates);
    const [moved] = startCandidates.splice(source.index, 1);
    const newStart = {
      ...start,
      candidates: startCandidates,
    };

    const finishCandidates = Array.from(finish.candidates);
    finishCandidates.splice(destination.index, 0, moved);
    const newFinish = {
      ...finish,
      candidates: finishCandidates,
    };

    setData((prevState) => ({
      ...prevState,
      columns: {
        ...prevState.columns,
        [sInd]: newStart,
        [dInd]: newFinish,
      },
    }));

    
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="flex space-x-7">
        {Object.entries(data.columns).map(([columnId, column]) => (
          <Column
            key={columnId}
            columnId={columnId}
            title={column.title}
            candidates={column.candidates}
            columnColor={column.color}
          />
        ))}
      </div>
    </DragDropContext>
  );
};

export default Board;
