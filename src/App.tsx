import Favorites from "../components/Favorites";
import Movies from "../components/Movies";
import { useMovies } from "../stores/moviesStore";
import { useQuery } from "@tanstack/react-query";
import { getMovies } from "../utils/api";
import "./App.css";

function App() {
  const setMovies = useMovies((state) => state.setMovies);

  useQuery({
    queryKey: ["movies"],
    queryFn: async (queryContext) => {
      const data = await getMovies(queryContext);
      setMovies(data.Search);
      return data;
    },
  });

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
