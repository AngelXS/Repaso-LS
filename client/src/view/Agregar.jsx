// import axios from 'axios';
import axios from 'axios';
import { useState } from 'react';
import { Form } from 'react-bootstrap';
import '../estilos.css';
const Agregar= () => {
    const [nombre, setNombre] = useState('');
    const [position, setPosition] = useState('');
    const [nombreError, setNombreError] = useState('');
    const [aviso, setAviso] = useState('');	
    const [action] = useState('Undecided');
    const handlerCreatePlayer= (e) => {
        e.preventDefault();
        axios.post('http://localhost:8011/api/player/new', { nombre, position, action })
            .then(res => {
                setNombre('');
                setNombreError('');
                setPosition('');
                setAviso(res.data.msg);
            })
            .catch(err => {
                const errorResponse = err.response.data.errors;
                if (Object.keys(errorResponse).includes('nombre')) {
                    setNombreError(errorResponse['nombre'].message);
                    setAviso("");
                } else {
                    setNombreError('');
                    setAviso("");
                }
            })
    }
    return (
        <div>
            <h1>Add Player</h1>
            <Form onSubmit={handlerCreatePlayer}>
                <div className='contenedor1'>
                    <p>Name:</p>
                    <input type="text" onChange={e => { setNombre((e.target.value).toUpperCase()) }} value={nombre} />
                    <p>{nombreError}</p>
                    <p>Preferred Position:</p>
                    <input type="text" onChange={e => { setPosition((e.target.value).toUpperCase()) }} value={position}/>
                    <div>
                        <button type='submit' className="botonsubmit">ADD</button>
                    </div>
                    <p>{aviso}</p>
                </div>
            </Form>
        </div>
    );
}
export default Agregar;