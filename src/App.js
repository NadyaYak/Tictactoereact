import './App.css';
import Header from './components/Header';
import Player from './components/Player';
import Board from './components/Board';
import Square from './components/Square';
import "./styles.css";
function App() {
  return (
     <>
  <Header/>
  <Player whichPlayer ="x" score="100"/>
  <Player whichPlayer ="o" score="102"/>
  <Board/>
  <Square/>
  </>
  );
}

export default App;
