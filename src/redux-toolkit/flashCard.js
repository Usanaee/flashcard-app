import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  flashcards: [
    {
      id: "1",
      question: "What is React?",
      answer: "A JavaScript library for building user interfaces",
    },
    {
      id: "2",
      question: "What is Redux?",
      answer: "A predictable state container for JavaScript apps",
    },
    {
      id: "3",
      question: "What is JSX?",
      answer:
        "A syntax extension for JavaScript that looks similar to XML or HTML",
    },
  ],
  question: "",
  answer: "",
  hint: "",
};

const flashCard = createSlice({
  name: "flashcard",
  initialState: initialState,
  reducers: {
    setQuestion: (state, action) => {
      state.question = action.payload;
    },
    setAnswer: (state, action) => {
      state.answer = action.payload;
    },
    setHint: (state, action) => {
      state.hint = action.payload;
    },
    addFlashcard: (state, action) => {
      state.flashcards.push(action.payload);
      state.question = "";
      state.answer = "";
      state.hint = "";
    },
    deleteFlashcard: (state, action) => {
      return {
       ...state,
        flashcards: state.flashcards.filter(
          (flashcard) => flashcard.id!== action.payload
        ),
      };
    }
  },
});

export const flashcardsAction = flashCard.actions
export default flashCard;



// const flashcardReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case SET_QUESTION:
//       return {
//         ...state,
//         question: action.payload,
//       };
//     case SET_ANSWER:
//       return {
//         ...state,
//         answer: action.payload,
//       };
//     case SET_HINT:
//       return {
//         ...state,
//         hint: action.payload,
//       };
//     case ADD_FLASHCARD:
//       return {
//         ...state,
//         flashcards: [
//           ...state.flashcards,
//           {
//             id: action.payload.id,
//             question: state.question,
//             answer: state.answer,
//             hint: state.hint,
//           },
//         ],
//         question: "",
//         answer: "",
//         hint: "",
//       };
//     case DELETE_FLASHCARD:
//       return {
//         ...state,
//         flashcards: state.flashcards.filter(
//           (flashcard) => flashcard.id !== action.payload
//         ),
//       };
//     default:
//       return state;
//   }
// };
