//Components
import SearchBar from "../components/searchBar";

//Asset Import
import largeIcon from "../assets/Icon_Large.svg"

//Import Auth variable
import { Auth } from "../services/apiHandlers";

//Import Xmark Icon
import { ReactComponent as Xmark } from "../assets/font_awesome_icons/xmark.svg";

//Import React
import { useEffect, useState } from "react";

//Import Local Storage Utils
import { retrieveData, saveData } from "../utilities/localData";
import { userData } from "../interfaces/componentInterfaces";

export default function Home() {

    const [rateLimitDismissed, setRateLimitModalState] = useState(false)

    /**
     * This function retrieves the user data from local storage and returns it as an object
     * @returns userData | false
     */
    const getuserData = () => {
        const rawUserData: string | Boolean = retrieveData()
        if (typeof rawUserData === "string") {
            const userData: userData = JSON.parse(rawUserData)
            return userData
        }
        return false
    }

    const hideModal = () => {
        setRateLimitModalState(true)

        const userData = getuserData()
        if (typeof userData === "object") {
            userData.rateLimitDismiss = true
            saveData(userData)
        }
    }

    useEffect(() => {
        const userData = getuserData()
        if (typeof userData === "object") {
            if (userData.rateLimitDismiss) {
                setRateLimitModalState(userData.rateLimitDismiss)
            }
        }
    }, [])

    return (
        <div className='container'>
            <div className="container-search-image">
                <img alt="site-icon" src={largeIcon} className="logo-large" />
                <SearchBar value={null} />
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
            {Auth === "" && !rateLimitDismissed ?
                <div className="response-card warning">
                    <p>A GitHub API key is missing from the application. You will experience rate-limiting errors
                        while performing searches.

                    </p>
                    <Xmark className="xmark-large" onClick={hideModal} />
                </div>
                : ""}
        </div>
    )
}