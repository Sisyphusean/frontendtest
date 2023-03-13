import { userData } from "../interfaces/componentInterfaces";

/**
 * This is a function that is used to save user data
 * 
 * @param data This is the user's data that is to be stored in the storage
 * @returns  True if the process is successful and false if it fails
 */
function saveData(data: userData): Boolean {
    try {
        const dataString = data.toString()
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
 * @returns  True if the process is successful and false if it fails
 */
function retrieveData(data: userData): Boolean {
    try {
        localStorage.getItem("userData")
        return true
    } catch (error) {
        console.error("Failed to GET User Data")
        return true
    }
}

export { saveData, retrieveData }