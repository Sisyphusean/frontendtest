//Components
import SearchBar from "../components/searchBar";

//Asset Import
import largeIcon from "../assets/Icon_Large.svg"

export default function Home() {

    return (
        <div className='container'>
            <div className="container-search-image">
                <img alt="site-icon" src={largeIcon} className="logo-large" />
                <SearchBar value={null}/>
            </div>
            <div className='attribution-container'>
                <span className='attribution'>
                    <a
                        target="blank"
                        href='https://github.com/Sisyphusean'>
                        Made by Sisyphusean
                    </a>
                </span>
            </div>
        </div>
    )
}