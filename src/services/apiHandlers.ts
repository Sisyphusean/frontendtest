//SWR
import useSWR from 'swr'

//DOMPurify
import * as DOMPurify from 'dompurify';

//API resources
import endpoints from "../utilities/endpoints"
import { GithubSearchResult, fetcherError } from '../interfaces/apiInterfaces';
import { moveStringToBeginning, retrieveData, saveData } from '../utilities/localData';
import { userData } from '../interfaces/componentInterfaces';

/**
 * A utility function to fetch data from an API endpoint and return its response as JSON.
 * @async
 * @function fetcher
 * @param {string} url - The URL of the API endpoint to fetch data from.
 * @throws Will throw an error if the HTTP response status is not ok.
 * @returns {Promise<object>} The data returned from the API endpoint as JSON.
 */
async function fetcher(url: string) {
    const res = await fetch(url);

    if (!res.ok) {
        let error: fetcherError = new Error(`HTTP error! Status: ${res.status}`)
        error.info = await res.json()
        error.status = res.status
        throw error
    }

    const data = await res.json();
    return data;
}

/**
 * This is a custom hook that is used to get the user's Github profile data using SWR
 * 
 * @param keyword This is the user's search query that would be passed to Github
 * @returns An object with the data, isLoading and error properties
 */
function GetGithubProfileData(keyword: string) {
    let cleanKeyword = encodeURI(DOMPurify.sanitize(keyword))
    let fullUrl = endpoints.githubSearch + cleanKeyword
    const { data, error } = useSWR<GithubSearchResult>(fullUrl, fetcher)
    // console.log(error)

    return {
        data,
        isLoading: !error && !data,
        error: error
    }
}

function initiateSearch(keyword: string) {

    try {
        let results = GetGithubProfileData(keyword)

        if (!results.error && !results.isLoading) {
            let stringCurrentData = retrieveData()

            if (typeof stringCurrentData === 'string') {
                let oldCurrentData: userData = JSON.parse(stringCurrentData)
                let currentData: userData = moveStringToBeginning(keyword, oldCurrentData)
                saveData(currentData)
            }

            if (stringCurrentData === false) {
                let currentData: userData = { keywords: [keyword] }
                saveData(currentData)
            }


            return results
        }

        if (results.error) {
            console.error(`There was an ${results.error}`)
            return results
        }
    } catch (error) {
        
    }
}

export { GetGithubProfileData, initiateSearch }