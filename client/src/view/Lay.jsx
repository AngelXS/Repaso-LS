import { Outlet, Link } from "react-router-dom";

const Lay = (props) => {
    return(
        <div className="hom">
            <Link to={'/players/list'}>List</Link>
            <Link to={'/players/addplayer'}>Add Player</Link>
            <Outlet/>
        </div>   
    );
}
export default Lay;