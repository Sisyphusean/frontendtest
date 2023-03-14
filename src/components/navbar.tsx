import SearchBar from "./searchBar";

//Asset Import
import smallIcon from "../assets/Icon_Small.svg"
import { searchBarProps } from "../interfaces/componentInterfaces";

export default function Navbar(props: searchBarProps) {
    return (
        <nav className="navbar-container">
            <img src={smallIcon} alt="app-logo" />
            <SearchBar value={props.value}/>
        </nav>
    )
}