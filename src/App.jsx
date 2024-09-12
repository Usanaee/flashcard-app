
import FlashcardList from "./components/FlashcardList";
import AddFlashcard from "./components/AddFlashcard";
function App() {
  return (
    <>
      <div className="min-h-screen bg-gray-100 p-4">
        <h1 className="text-3xl font-bold text-center mb-8 ">
          Flashcard Learning App
        </h1>
        <AddFlashcard />
        <FlashcardList />
      </div>
    </>
  );
}

export default App;
