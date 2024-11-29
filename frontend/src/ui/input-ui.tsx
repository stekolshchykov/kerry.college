import {useId} from "react";

interface InputUiProps {
    label?: string;
    value?: string;
    onChange?: (e: string) => void;
    additionalClasses?: string;
}

const InputUi = (props: InputUiProps) => {
    const id = useId();
    return (
        <div className={`w-full ${props.additionalClasses}`}>
            {props?.label && <label htmlFor={id} className="block text-sm font-medium text-gray-700 w-full mb-1">
                {props?.label}:
            </label>}
            <input
                type="text"
                id={id}
                name="name"
                value={props?.value}
                onChange={(event) => {
                    if (props?.onChange) {
                        props?.onChange(event.target.value)
                    }
                }}
                required
                className="border border-gray-300 rounded-[5px] p-2 flex justify-between items-center bg-white w-full"
            />
        </div>
    );
}

export default InputUi;
