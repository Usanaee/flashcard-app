import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { flashcardsAction } from '../redux-toolkit/flashCard';

function AddFlashcard() {
  const dispatch = useDispatch();
  const {question,answer,hint} = useSelector(state => state.flashcards);
  const handleAddFlashcard = () => {
    if (question && answer && hint) {
      dispatch(flashcardsAction.addFlashcard({ id: uuidv4(),answer: answer, hint: hint , question: question}));
    }
  };

  return (
    <div className="mb-8 ">
      <input
        type="text"
        placeholder="Enter question"
        value={question}
        onChange={(e) => dispatch(flashcardsAction.setQuestion(e.target.value))}
        className="border p-2 rounded w-full mb-2"
      />
      <input
        type="text"
        placeholder="Enter answer"
        value={answer}
        onChange={(e) => dispatch(flashcardsAction.setAnswer(e.target.value))}
        className="border p-2 rounded w-full mb-2"
      />
      <input
        type="text"
        placeholder="Enter Any Hint"
        value={hint}
        onChange={(e) => dispatch(flashcardsAction.setHint(e.target.value))}
        className="border p-2 rounded w-full mb-2"
      />
      <button
        onClick={handleAddFlashcard}
        className="bg-blue-500 text-white p-2 rounded w-full"
      >
        Add Flashcard
      </button>
    </div>
  );
}

export default AddFlashcard;
