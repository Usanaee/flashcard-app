import flashCard from "./flashCard";
import { configureStore } from "@reduxjs/toolkit";

const cardStore = configureStore({
  reducer: {
    flashcards: flashCard.reducer,
  },
});

export default cardStore;
