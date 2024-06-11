"use client"
import React, { useState, useRef } from 'react';

const SelectLevel: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [selectedLevel, setSelectedLevel] = useState<number>(0);
  const panelRef = useRef<HTMLDivElement>(null);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
    if (!isVisible) {
      document.addEventListener('mousedown', handleClickOutside);
    }
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (panelRef.current && !panelRef.current.contains(event.target as Node)) {
      setIsVisible(false);
      document.removeEventListener('mousedown', handleClickOutside);
    }
  };

  const handleSave = () => {
    setIsVisible(false);
    document.removeEventListener('mousedown', handleClickOutside);
    setSelectedLevel(selectedLevel);
  };

  const incrementLevel = () => {
    if (selectedLevel < 10) {
      setSelectedLevel(selectedLevel + 1);
    }
  };

  const decrementLevel = () => {
    if (selectedLevel > 0) {
      setSelectedLevel(selectedLevel - 1);
    }
  };

  return (
      <div className="relative p-4">
        <button
            onClick={toggleVisibility}
            className="bg-accent text-white px-4 py-2 rounded"
        >
          {selectedLevel > 0 ? `Selected Level: ${selectedLevel} (${selectedLevel * 10}g)` : 'Select Level'}
        </button>
        <div
            ref={panelRef}
            className={`fixed inset-x-0 bottom-0 transition-transform transform ${
                isVisible ? 'translate-y-0' : 'translate-y-full'
            } bg-white border-t border-gray-300 rounded-t-lg shadow-lg`}
            style={{ transitionDuration: '500ms', zIndex: 50 }}
        >
          <div className="p-4 space-y-2 h-48 overflow-y-auto bg-primary text-white">
            {/*Text*/}
            <h2 className="text-lg font-semibold text-center">Select Level</h2>
            <div className="py-2 px-3 flex justify-center items-center bg-white border border-gray-200 rounded-lg dark:bg-neutral-900 dark:border-neutral-700">
              <button
                  type="button"
                  className="size-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-md border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800"
                  onClick={decrementLevel}
                  disabled={selectedLevel === 0}
              >
                <svg className="flex-shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14"></path>
                </svg>
              </button>
              <input
                  className="p-0 w-12 bg-transparent border-0 text-gray-800 text-center focus:ring-0 dark:text-white"
                  type="text"
                  value={selectedLevel}
                  readOnly
              />
              <button
                  type="button"
                  className="size-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-md border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800"
                  onClick={incrementLevel}
                  disabled={selectedLevel === 10}
              >
                <svg className="flex-shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5v14"></path>
                </svg>
              </button>
            </div>
            <button
                onClick={handleSave}
                className="mt-4 bg-accent text-white px-4 py-2 rounded-lg w-full hover:bg-accent-dark"
            >
              Save
            </button>
          </div>
        </div>
      </div>
  );
}

export default SelectLevel;
