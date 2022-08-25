
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../estilos.css';
const TablaPlayer = (props) => {
    const { players, removeFromDom } = props;
    const borrar = (id) => {
        axios.delete("http://localhost:8011/api/player/"+id+"/delete")
            .then(borrado => {
                removeFromDom(id);
            })
            .catch(error => console.log(error));
    }
return (
    <div className="Tabla1">
        <table className="table table-bordered" border={10}>
            <thead>
                <tr className="table-primary">
                <th>Team Name</th>
                <th>Preferred Position</th>
                <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    players.map((player,idx)=>{
                        return (
                            <tr className="table-warning" key={idx}>
                                <td className='table-danger'>{player.nombre}</td>
                                <td className='table-danger'>{player.position}</td>
                                <td>
                                    <button  className='botonborrar' onClick={(e)=>{borrar(player._id)}}>Delete</button>
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
export default TablaPlayer;