import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './view/Main';
import Agregar from './view/Agregar';
import StatusGame from './view/StatusGame';
import Home from './view/Home';
import MainStatus from './view/MainStatus';
import Lay from './view/Lay';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route exact path="/status/game" element={<MainStatus/>}>
              <Route path={'1'} element={<StatusGame></StatusGame>}></Route>
            </Route>
            <Route path={"/"} element={<Home></Home>}>
              <Route path={'players'} element={<Lay></Lay>}>
                <Route path={'list'} element={<Main></Main>}></Route>
                <Route path={'addplayer'} element={<Agregar></Agregar>}></Route>
              </Route>
            </Route>   
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
