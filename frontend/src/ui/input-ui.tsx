interface InputUiProps {
    label?: string;
    value?: string;
    onChange?: (e: string) => void;
}

const InputUi = (props: InputUiProps) => {
    return (
        <div className={"w-full"}>
            {props?.label && <label htmlFor="name" className="block text-sm font-medium text-gray-700 w-full">
                {props?.label}:
            </label>}
            <input
                type="text"
                id="name"
                name="name"
                value={props?.value}
                onChange={(event) => {
                    if (props?.onChange) {
                        console.log("name", event.target.value)

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
