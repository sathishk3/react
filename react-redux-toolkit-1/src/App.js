import "./styles.css";
import { useDispatch } from "react-redux";
import MoviePlaylist from "./components/MoviesPlaylist";
import SongPlaylist from "./components/SongsPlaylist";
import { resetAction } from "./store";

export default function App() {
  const dispatch = useDispatch();

  const handleResetClick = () => {
    dispatch(resetAction());
  };

  return (
    <div className="container is-fluid">
      <button onClick={() => handleResetClick()} className="button is-danger">
        Reset Both Playlists
      </button>
      <hr />
      <MoviePlaylist />
      <hr />
      <SongPlaylist />
    </div>
  );
}
