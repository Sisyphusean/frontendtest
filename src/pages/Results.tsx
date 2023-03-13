import { initiateSearch } from "../services/apiHandlers"

export default function Results() {
    let results = initiateSearch("Yeoh")

    console.log(JSON.stringify(results))

    return(
        <div>
            Empty
        </div>
    )
}