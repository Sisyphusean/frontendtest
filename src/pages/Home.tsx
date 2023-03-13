//Components
import SearchBar from "../components/searchBar";

export default function Home() {

    return (
        <div className='container'>
            <SearchBar />
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