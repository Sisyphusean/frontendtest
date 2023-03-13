//SWR
import useSWR from 'swr'

//DOMPurify
import * as DOMPurify from 'dompurify';

//API resources
import endpoints from "../utilities/endpoints"

/**
 * This is a placeholder fetch function that will be passed into the SWR function
 * 
 * @param url URL for the GitHub Endpoint
 * @returns A promise that resolves into a JSON
 */
function fetcher(url: string): Promise<any> {
    return fetch(url).then((res) => res.json())
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
    const { data, error } = useSWR(fullUrl, fetcher)

    return {
        data,
        isLoading: !error && !data,
        error
    }
}

export { GetGithubProfileData }
