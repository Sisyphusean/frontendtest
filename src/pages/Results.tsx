import Navbar from "../components/navbar";

//React Router
import { useParams } from 'react-router-dom';
import CardGroup from "../components/cardGroup";

//Redux
import { useSelector } from 'react-redux'
import { RootState } from "../redux/store";

export default function Results() {

    const userData = useSelector((state: RootState) => state.userData)

    let rawParams = useParams()
    let keyword = rawParams.keyword ? rawParams.keyword : ""
    //HANDLE WHEN EMPT!!
    let rawData = userData.userData
    // console.log(rawData)

    return (
        <div className="results-page">
            <div className="results-container">
                <Navbar value={keyword} />
                <CardGroup keyword={keyword} rawData={{rawData}} />
            </div>
        </div>
    )
}