import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import TablaPlayer from '../components/TablaPlayer';
import '../estilos.css';
const Main = () => {
    const [players, setPlayers] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:8011/api/players/list')
            .then(res => setPlayers(res.data))
            .catch(err => console.log(err));
    }, []);
    const removeFromDom = (playerId) => {
        setPlayers(players.filter(player => player._id !== playerId));
    }
    return (
        <div >
            <TablaPlayer players={players} removeFromDom={removeFromDom}></TablaPlayer>
        </div>
    );
}
export default Main;



