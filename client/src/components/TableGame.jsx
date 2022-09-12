
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../estilos.css';

const TableGame = (props) => {
    const { players, cambiar } = props;
    let color1 = '';
    let color2 = '';
    let color3 = '';

const cambiarAction = (id, option) => {
    axios.put('http://localhost:8011/api/player/'+id+'/update/action/'+option)
        .then((res) => cambiar())
        .catch((err) => console.log(err));
}

return (
    <div className="Tabla1">
        <table className="table table-bordered" border={10}>
            <thead>
                <tr className="table-primary">
                <th>Team Name</th>
                <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    players.map((player,idx)=>{
                        if(player.action === 'Undecided'){
                            color1 = 'white';
                            color2 = 'white';
                            color3 = 'yellow';
                        }
                        else if(player.action === 'Not Playing'){
                            color1 = 'white';
                            color2 = 'red';
                            color3 = 'white';
                        }
                        else if(player.action === 'Playing'){
                            color1 = 'green';
                            color2 = 'white';
                            color3 = 'white';
                        }
                        return (
                            <tr className="table-warning" key={idx}>
                                <td className='table-danger'>{player.nombre}</td>
                                <td>
                                    <button style={{backgroundColor: color1}} onClick={e=>{cambiarAction(player._id, "Playing")}} className='botonborrar'>Playing</button>
                                    <button style={{backgroundColor: color2}} onClick={e=>{cambiarAction(player._id, "Not Playing")}} className='botonborrar'>Not Playing</button>
                                    <button style={{backgroundColor: color3}} onClick={e=>{cambiarAction(player._id, "Undecided")}} className='botonborrar'>Uncided</button>
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    </div>
)
}
export default TableGame;