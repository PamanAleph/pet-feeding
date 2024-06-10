"use client"
import React, { useState, useRef } from 'react';

const SelectLevel: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [selectedLevel, setSelectedLevel] = useState<string | null>(null);
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
  };

  return (
    <div className="relative p-4">
      <button
        onClick={toggleVisibility}
        className="bg-accent text-white px-4 py-2 rounded"
      >
        {selectedLevel ? `Selected Level: ${selectedLevel}` : 'Select Level'}
      </button>
      <div
        ref={panelRef}
        className={`fixed inset-x-0 bottom-0 transition-transform transform ${
          isVisible ? 'translate-y-0' : 'translate-y-full'
        } bg-white border-t border-gray-300 rounded-t-lg shadow-lg`}
        style={{ transitionDuration: '500ms', zIndex: 50 }}
      >
        <div className="p-4 space-y-2 h-96 overflow-y-auto">
          <div className="grid grid-cols-5 gap-2">
            {Array.from({ length: 10 }, (_, index) => (
              <label key={index} className="flex">
                <input
                  type="radio"
                  name="level"
                  className="mr-2"
                  value={String(index + 1)}
                  onChange={(e) => setSelectedLevel(e.target.value)}
                />
                Level {index + 1}
              </label>
            ))}
          </div>
          <button
            onClick={handleSave}
            className="mt-4 bg-green-500 text-white px-4 py-2 rounded"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

export default SelectLevel;




