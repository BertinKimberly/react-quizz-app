import "./App.css";
import Quizz from "./components/Quizz";
import { QuizzProvider } from "./contexts/quizz";

function App() {
  return (
    <div className="App">
      <QuizzProvider>
        <Quizz />
      </QuizzProvider>
    </div>
  );
}

export default App;
