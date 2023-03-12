
//Components
import CustomInput from "./input";

//React Hook
import { useForm, FormProvider } from "react-hook-form"

//Asset Import
import largeIcon from "../assets/Icon_Large.svg"
import searchIcon from "../assets/font_awesome_icons/Search-Icon.svg"
import { InputProps } from "../interfaces/componentInterfaces";

function SearchBar() {
    const methods = useForm();

    //Handler for initiating search
    const searchKeyword = (data: any) => {
        console.log(data)
    }

    //Create Props to pass to Input Component
    const customInputProps: InputProps = {
        name: "searchTerms"
    }

    return (
        <div className="container-search-image">
            <img alt="site-icon" src={largeIcon} className="logo-large" />

            <FormProvider {...methods}>
                <form onSubmit={methods.handleSubmit(searchKeyword)}>

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