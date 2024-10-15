import React, {useState} from 'react';
import {IoIosArrowDown, IoIosArrowUp} from "react-icons/io";

interface SelectUIProps {
    options: string[]; // List of strings to display as options
    onSelect: (selected: string) => void; // Callback to return the selected value
    label: string; // Title for the select input
    className?: string;
}

const SelectUI: React.FC<SelectUIProps> = ({options, onSelect, label, className}) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [selectedCourse, setSelectedCourse] = useState<string>('');

    const handleOptionClick = (courseTitle: string) => {
        setSelectedCourse(courseTitle); // Set the selected course
        onSelect(courseTitle); // Call the onSelect callback with the selected course
    };


    console.log({
        isOpen,
        selectedCourse
    })

    return (
        <div className={`relative w-full ${className}`}>
            <label className="block text-sm font-medium">{label}</label>
            <div
                className="mt-1 relative cursor-pointer"
                onClick={() => setIsOpen(prev => !prev)} // Toggle dropdown on click
            >
                <div
                    className="border border-gray-300 rounded-[5px] p-2 flex justify-between items-center bg-white"
                    style={{whiteSpace: 'nowrap'}} // Prevent text wrapping
                >
                    {selectedCourse && <span className={"text-black"}>
                        {selectedCourse}
                    </span>}

                    {!selectedCourse && <span className={"opacity-40 text-black"}>
                        Select one
                    </span>}

                    <span className="material-icons">
                        {isOpen ? <IoIosArrowUp className={"text-black"}/> : <IoIosArrowDown className={"text-black"}/>}
                    </span>
                </div>
                {isOpen && (
                    <div className="absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded-[5px] shadow-lg">
                        {options.map((option, index) => (
                            <div
                                key={index}
                                className="cursor-pointer p-2 hover:bg-gray-100 text-black"
                                onClick={() => handleOptionClick(option)} // Handle option click
                            >
                                {option}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default SelectUI;
