//React Hook Form
import { useFormContext } from "react-hook-form"

//Interfaces
import { InputProps } from "../interfaces/componentInterfaces";

//Asset import
import {ReactComponent as Xmark} from "../assets/font_awesome_icons/xmark.svg"

export default function CustomInput(props: InputProps) {
    const { register, formState: { errors, dirtyFields }, watch, reset } = useFormContext();

    //Watch Input Value to be accessed dynamicly
    const inputValue: string = watch(props.name)

    //Function for resetting the input
    const emptySearch = () => {
        reset()
    }
   
    return (
        <span className="input-wrapper">
            <span className="input-internals">
                <input
                    className={errors[props.name] ? "input-text input-text-search-long input-text-error" : "input-text input-text-search-long"}
                    type="text"
                    placeholder="Search for a Github profile"
                    spellCheck={false}
                    {...register(props.name, { required: true })}
                />
                {dirtyFields[props.name] && inputValue.length > 0 && <Xmark className="xmark" onClick={emptySearch}/>}
            </span>
            {errors[props.name] && errors[props.name]?.type === "required" && <span className="error">Please enter a search term before trying to search</span>}
        </span>
    )
}