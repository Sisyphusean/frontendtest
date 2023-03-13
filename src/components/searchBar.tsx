
//Components
import CustomInput from "./input";

//React Hook
import { useForm, FormProvider } from "react-hook-form"

//Asset Import
import largeIcon from "../assets/Icon_Large.svg"
import searchIcon from "../assets/font_awesome_icons/Search-Icon.svg"
import { InputProps } from "../interfaces/componentInterfaces";

//API resources
import { useGithubSearchHook } from "../services/apiHandlers";
import { useEffect, useState } from "react";

function SearchBar() {
    //Create Props to pass to Input Component.
    const customInputProps: InputProps = {
        name: "searchTerms"
    }

    //This state is used as a blocker to prevent unending re-renders triggered by changes in the input's value
    const [formSubmitted, setSubmitted] = useState(false)

    //Destructure all RHF methods into a methods variable
    const methods = useForm();

    //Use the watch method from the RHF library to constantly retrieve the value of the keyword
    var keyword = methods.watch(customInputProps.name);

    //Use dynamic user input to make API call.
    let result = useGithubSearchHook(formSubmitted ? keyword : null)

    /**Due to the nature of the useEffect Hook, this hook will run at the end of all subsequent re-renders
    In effect, no pun intended, this ensures that the useEffect Hook, the last hook to run, will aways re-block
    the useGithubSearchHook to prevent unecessary calls to the Hook and in effect Github's API
    */
    useEffect(() => {
        setSubmitted(false)
        console.log(`Form submitted is set from ${formSubmitted} to false`)

    }, [formSubmitted])

    /**  This hook sets the value of the submitted flag to true, effectively allowing the SWR library
    * that powers the useGithubSearchHook to run once. 
    */
    function fetchGithubResults(event: any) {
        setSubmitted(true)
    }

    return (
        <div className="container-search-image">
            <img alt="site-icon" src={largeIcon} className="logo-large" />

            <FormProvider {...methods}>
                <form onSubmit={methods.handleSubmit(fetchGithubResults)}>

                    <div className="container-input-button ">

                        <CustomInput name={customInputProps.name} />
                        <button
                            className="button"
                            type="submit">
                            Search
                            <img src={searchIcon}
                                alt="search-icon"
                                className="button-image"
                            />
                        </button>

                    </div>
                </form>
            </FormProvider>
        </div>
    )
}

export default SearchBar