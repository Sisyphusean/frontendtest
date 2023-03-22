import { GithubSearchResult } from "./apiInterfaces"

/**
 * This is an interface used to specify the name of the input that is used in the Search Form 
 */
interface InputProps {
  /**This is the name of the input that is used in the Form */
  name: string
}

interface searchBarProps {
  value: string | null
}

interface cardGroupProps {
  rawData: { data: GithubSearchResult },
  keyword: string
}

/**
 * This is an interface that is used to structure the data that is stored in the browser's local storage
 */
interface userData {
  //This is an array of strings that contains the user's search history
  keywords: string[],
  //This is a boolean that is used to determine if the user has dismissed the rate limit warning
  rateLimitDismiss: boolean
}

export { InputProps, userData, searchBarProps, cardGroupProps }