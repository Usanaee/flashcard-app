import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { flashcardsAction } from "../redux-toolkit/flashCard";
function Flashcard({flashcard}) {
  const [flipped, setFlipped] = useState(false);
  const dispatch = useDispatch();

  return (  
        <div
          className="relative w-full h-48 perspective-1000 cursor-pointer"
          onClick={() => setFlipped(!flipped)}
          key={flashcard.id}
        >
          <div
            className={`relative w-full h-full transition-transform duration-700 transform-style-3d ${
              flipped ? "rotate-y-180" : ""
            }`}
          >
            {/* Front Side */}
            <div className="absolute w-full h-full backface-hidden bg-white p-4 rounded-lg shadow-lg flex items-center justify-center">
              <h3 className="text-xl font-bold text-center">
                {flashcard.question}
              </h3>
            </div>

            {/* Back Side */}
            <div className="absolute w-full h-full backface-hidden bg-blue-100 p-4 rounded-lg shadow-lg transform rotate-y-180 flex items-center justify-center">
              <h3 className="text-xl font-bold text-center">
                {flashcard.answer}
              </h3>
            </div>
          </div>

          {/* Delete Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              dispatch(flashcardsAction.deleteFlashcard(flashcard.id));
            }}
            className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-full z-10"
          >
            Delete
          </button>
        </div>
  );
}

export default Flashcard;
