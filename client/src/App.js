import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './view/Main';
import Agregar from './view/Agregar';
import StatusGame from './view/StatusGame';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route exact path="/status/game/1" element={<StatusGame/>}></Route>
            <Route exact path = '/players/addplayer' element={<Agregar></Agregar>}/>
            <Route path='/players/list' element={<Main/>}/>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
