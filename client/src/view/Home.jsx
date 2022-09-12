import { Outlet, Link } from "react-router-dom";

const Home = (props) => {
    return(
        <div className="hom">
            <Link to={'/players/list'}>Manage Players</Link>
            <Link to={'/status/game/1'}>Manage Player Status</Link>
            <Outlet/>
        </div>   
    );
}
export default Home;