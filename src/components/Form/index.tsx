import {Input} from '../../components';
import { initInputArr, formArgsType } from "../../tsTypes/formTypes";


export default function Form({title, inputs}: formArgsType){
    const inputsMap = inputs.map((input) => <Input {...input} />);
    const initIntputsMap = initInputArr.map((input) => <Input {...input} />);

    return (
        <form>
            <h1>{title}</h1>
            {inputs.length > 0 ? inputsMap: initIntputsMap}
            <button>Send</button>
        </form>
    )
};