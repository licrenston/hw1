import logo from './logo.svg';
import './App.css';
import Char from "./Components/Char/Chars";
import Up from "./Components/Up/Up"

import {getCaracters} from "./Serv/CharSer";

function App() {
  return (
      <div className="App">
        <Up text={'The Rick and Morty'}/>
        <Char dateFunction={getCaracters}/>
      </div>
  );
}

export default App;
