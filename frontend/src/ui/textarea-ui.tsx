import {useId} from "react";

interface InputUiProps {
    label?: string;
    value?: string;
    onChange?: (e: string) => void;
    rows?: number;
}

const TextareaUi = (props: InputUiProps) => {
    const id = useId();
    return (
        <div className={"w-full"}>
            {props?.label && <label htmlFor={id} className="block text-sm font-medium text-gray-700 w-full">
                {props?.label}:
            </label>}
            <textarea
                id={id}
                name="name"
                value={props?.value}
                onChange={(event) => {
                    if (props?.onChange) {
                        props?.onChange(event.target.value)
                    }
                }}
                rows={props?.rows || 4}
                className="border border-gray-300 rounded-[5px] p-2 flex justify-between items-center bg-white w-full"
            />
        </div>
    );
}

export default TextareaUi;
