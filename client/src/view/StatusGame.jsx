import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import TableGame from '../components/TableGame';
import '../estilos.css';
const StatusGame = () => {
    const [players, setPlayers] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:8011/api/players/list')
            .then(res => {setPlayers(res.data);})
            .catch(err => console.log(err));
    }, []);

    const cambiar = () => {
        axios.get('http://localhost:8011/api/players/list')
            .then(res => {setPlayers(res.data);})
            .catch(err => console.log(err));
    }
    return (
        <div >
            {
                <TableGame players={players} cambiar={cambiar}></TableGame>
            }
        </div>
    );
}
export default StatusGame;



