import SearchBar from "./searchBar";

//Asset Import
import smallIcon from "../assets/Icon_Small.svg"
import { searchBarProps } from "../interfaces/componentInterfaces";

//React Router
import { useNavigate } from 'react-router-dom';

export default function Navbar(props: searchBarProps) {

    const navigate = useNavigate()

    const goHome = () => {
        navigate("/")
    }

    return (
        <nav className="navbar-container">
            <img src={smallIcon} alt="app-logo" onClick={goHome} style={{cursor:"pointer"}} />
            <SearchBar value={props.value} />
        </nav>
    )
}