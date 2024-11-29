interface ButtonUiProps {
    label?: string;
    onClick?: () => void;
    type?: "button" | "submit";
    additionalClasses?: string;
}

const ButtonUi = (props: ButtonUiProps) => {
    return (
        <button
            className={`w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md shadow ${props.additionalClasses}`}
            type={props?.type || "button"}>
            {props.label}
        </button>
    )
}

export default ButtonUi;
