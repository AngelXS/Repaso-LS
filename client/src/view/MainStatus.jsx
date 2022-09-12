import { Outlet, Link } from "react-router-dom";

const MainStatus = (props) => {
    return(
        <div className="hom">
            <Link to={'/players/list'}>Manage Players</Link>
            <Link to={'/'}>Manage Players</Link>
            <Outlet/>
        </div>   
    );
}
export default MainStatus;