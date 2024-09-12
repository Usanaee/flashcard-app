import React from "react";
import { useSelector } from "react-redux";
import Flashcard from "./FlashCard";

function FlashcardList() {
  const {flashcards} = useSelector((state) => state.flashcards);

  

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {flashcards.map((flashcard) => (
        <Flashcard key={flashcard.id} flashcard={flashcard} />
      ))}
    </div>

  );
}

export default FlashcardList;
