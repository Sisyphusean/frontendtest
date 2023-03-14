//Axios
import axios from 'axios';


//DOMPurify
import * as DOMPurify from 'dompurify';

//API resources
import endpoints from "../utilities/endpoints"
import { GithubSearchResult, fetcherError } from '../interfaces/apiInterfaces';
import { moveStringToBeginning, retrieveData, saveData } from '../utilities/localData';
import { userData } from '../interfaces/componentInterfaces';
import { useEffect } from 'react';


let Auth = ""

const axiosinstance = axios.create({
    baseURL: 'https://api.github.com/search/users?q=',
    headers: Auth !== "" ? {
        //Enter the token here
        Authorization: `token ${Auth}`
    } : {}
});

/**
 * This is a custom hook that is used to get the user's Github profile data using SWR
 * 
 * @param keyword This is the user's search query that would be passed to Github
 * @returns An object with the data, isLoading and error properties
 */
async function GetGithubProfileData(keyword: string | null, page: number = 1) {
    let cleanKeyword = typeof keyword === "string" ? encodeURI(DOMPurify.sanitize(keyword)) : null;
    let fullUrl = endpoints.githubSearch + cleanKeyword + `&page=${page}&per_page=20`;

    try {
        const response = await axiosinstance.get<GithubSearchResult>(fullUrl)

        if (response !== null && keyword) {
            const stringCurrentData = retrieveData();
            if (typeof stringCurrentData === "string") {
                const oldCurrentData: userData = JSON.parse(stringCurrentData);
                const currentData: userData = moveStringToBeginning(keyword, oldCurrentData);
                saveData(currentData);
            }

            if (stringCurrentData === false) {
                const currentData: userData = { keywords: [keyword] };
                saveData(currentData);
            }
        }

        return {
            data: response.data,
            isLoading: false,
            error: null
        };
    } catch (error: any) {
        console.error(error);
        return {
            data: null,
            isLoading: false,
            error: error.message || 'An unknown error occurred'
        };
    }
}




export { GetGithubProfileData }
