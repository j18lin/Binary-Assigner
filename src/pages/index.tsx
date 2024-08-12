import { useState, useEffect } from 'react';
import Head from 'next/head';

const MultiStateAssigner = () => {
  const [rows, setRows] = useState(1);
  const [cols, setCols] = useState(1);
  const [notes, setNotes] = useState('');
  const [numStates, setNumStates] = useState(3); // Default to 3 states
  const [stateColors, setStateColors] = useState(['#ff0000', '#ffff00', '#00ff00']); // Default colors for states
  const [circleStates, setCircleStates] = useState(Array(rows * cols).fill(0));
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedIndex, rows, cols, numStates]);

  useEffect(() => {
    // Update circleStates when numStates changes
    setCircleStates(Array(rows * cols).fill(0));
  }, [numStates, rows, cols]);

  const handleRowsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.max(1, parseInt(e.target.value) || 1);
    setRows(value);
    setCircleStates(Array(value * cols).fill(0));
  };

  const handleColsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.max(1, parseInt(e.target.value) || 1);
    setCols(value);
    setCircleStates(Array(rows * value).fill(0));
  };

  const handleNumStatesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.max(1, parseInt(e.target.value) || 1);
    setNumStates(value);
    // Update colors to match the number of states
    const newColors = [...stateColors];
    while (newColors.length < value) {
      newColors.push('#' + Math.floor(Math.random()*16777215).toString(16)); // Generate random color
    }
    setStateColors(newColors.slice(0, value));
  };

  const handleCircleClick = (index: number) => {
    const newStates = [...circleStates];
    newStates[index] = (newStates[index] + 1) % numStates; // Cycle through available states
    setCircleStates(newStates);
    setSelectedIndex(index);
  };

  const handleExport = () => {
    // Export logic
  };

  const handleImport = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Import logic
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    // Handle keyboard events if needed
  };

  return (
    <>
      <Head>
        <title>Multi-State Assigner</title>
      </Head>
      <main className="flex flex-col min-h-screen bg-gray-100">
        <header className="bg-white shadow-md py-4 px-8 text-center">
          <h1 className="text-2xl font-bold">Multi-State Assigner</h1>
        </header>
        <div className="flex flex-col items-center py-4 space-y-4">
          <div className="flex space-x-4">
            <label className="flex flex-col">
              Rows
              <input
                type="number"
                value={rows}
                min={1}
                onChange={handleRowsChange}
                className="border p-2 rounded w-20"
              />
            </label>
            <label className="flex flex-col">
              Columns
              <input
                type="number"
                value={cols}
                min={1}
                onChange={handleColsChange}
                className="border p-2 rounded w-20"
              />
            </label>
            <label className="flex flex-col">
              Number of States
              <input
                type="number"
                value={numStates}
                min={1}
                onChange={handleNumStatesChange}
                className="border p-2 rounded w-20"
              />
            </label>
          </div>
          <label className="flex flex-col w-44 sm:w-48 md:w-64 lg:w-72">
            Notes
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="border p-2 rounded h-24"
            />
          </label>
          <button
            onClick={handleExport}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Export
          </button>
          <input
            type="file"
            accept=".json"
            onChange={handleImport}
            className="border p-2 rounded mt-4"
          />
        </div>
        <hr className="border-t border-gray-300" />
        <div className="flex-grow flex justify-center items-center py-4">
          <div className={`grid grid-cols-${cols} gap-2 sm:gap-3 md:gap-4 lg:gap-5`}>
            {Array.from({ length: rows * cols }).map((_, index) => (
              <div
                key={index}
                onClick={() => handleCircleClick(index)}
                className={`w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-10 lg:h-10 xl:w-12 xl:h-12 rounded-full flex justify-center items-center cursor-pointer
                  ${selectedIndex === index ? "border-4 border-blue-500" : ""}
                  `}
                style={{
                  backgroundColor: stateColors[circleStates[index]] || '#fff',
                }}
              >
                <span className="text-white text-xs sm:text-sm md:text-base lg:text-sm xl:text-base">
                  {index + 1}
                </span>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default MultiStateAssigner;
