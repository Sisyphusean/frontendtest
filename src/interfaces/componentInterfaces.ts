/**
 * This is an interface used to specify the name of the input that is used in the Search Form 
 */
interface InputProps {
  /**This is the name of the input that is used in the Form */
  name: string
}

/**
 * This is an interface that is used to structure the data that is stored in the browser's local storage
 */
interface userData {
    keywords: string[]
}

export {InputProps, userData}