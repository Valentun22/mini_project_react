import {Outlet} from "react-router-dom";
import {Genres} from "../components/GenresInfoComponent/Genres/Genres";


const GenresPage = () => {
    return (
        <div>
            <Genres/>
        <Outlet/>
        </div>
    );
};

export {GenresPage};