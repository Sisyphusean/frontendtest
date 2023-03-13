import { userData } from "../interfaces/componentInterfaces";

/**
 * This is a function that is used to save user data
 * 
 * @param data This is the user's data that is to be stored in the storage
 * @returns  True if the process is successful and false if it fails
 */
function saveData(data: userData): Boolean {
    try {
        const dataString = JSON.stringify(data)
        localStorage.setItem("userData", dataString)
        return true
    } catch (error) {
        console.error("Failed to SET User Data")
        return false
    }
}

/**
 * This is a function that is used to retrieve user data
 * 
 * @param data This is the user's data that is to be stored in the storage
 * @returns  String of userData if the process is successful and false if it fails
 */
function retrieveData(): Boolean | string {
    try {
        let userData = localStorage.getItem("userData")
        if (userData) {
            return userData
        } else {
            return false
        }
    } catch (error) {
        console.error("Failed to GET User Data")
        return true
    }
}

/**

This function takes a string and an array of strings as input. It checks if the string exists in the array.
If the string exists in the array, it removes the string from its current position and adds it to the beginning of the array.
Finally, it returns the modified array.
@param stringToCheck - a string to check in the array
@param arrayToSearch - an array of strings to search for the string
@returns - a modified array of strings with the checked string at the beginning
*/
function moveStringToBeginning(stringToCheck: string, arrayToSearch: userData) {
    if (arrayToSearch.keywords.includes(stringToCheck)) {
        const index = arrayToSearch.keywords.indexOf(stringToCheck);
        arrayToSearch.keywords.splice(index, 1);
        arrayToSearch.keywords.unshift(stringToCheck);
    }

    if (!arrayToSearch.keywords.includes(stringToCheck)) {
        arrayToSearch.keywords.push(stringToCheck)
    }
    return arrayToSearch;
}

export { saveData, retrieveData, moveStringToBeginning }