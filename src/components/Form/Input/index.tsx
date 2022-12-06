import { inputType, initInput } from "../../../tsTypes/formTypes";

/* 
    Common Input Types:
    text,
    email,
    number
*/

export default function Input(args:inputType = initInput){
    const {label, type, name, ...rest} = args;
    let placeholder = rest.placeholder? rest.placeholder: "";
    return (
        <div>
            <label>{label}</label>
            <input name={name} type={type} placeholder={placeholder} />
        </div>
    )
};