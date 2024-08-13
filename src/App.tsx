import Favorites from "../components/Favorites";
import Movies from "../components/Movies";
import "./App.css";

function App() {
  return (
    <div>
      <h1>MOVIES APP</h1>
      <div className="app-card">
        <Favorites />
        <Movies />
      </div>
    </div>
  );
}

export default App;
