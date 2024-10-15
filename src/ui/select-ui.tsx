import React, {useEffect, useRef, useState} from 'react';
import {IoIosArrowDown, IoIosArrowUp} from 'react-icons/io';

interface SelectUIProps {
    options: string[]; // Список строк для отображения в качестве опций
    onSelect: (selected: string) => void; // Callback для возврата выбранного значения
    label: string; // Заголовок для select input
    className?: string; // Дополнительные классы для стилизации
}

const SelectUI: React.FC<SelectUIProps> = ({options, onSelect, label, className}) => {
    const [isOpen, setIsOpen] = useState<boolean>(false); // Состояние для управления открытием/закрытием списка
    const [selectedOption, setSelectedOption] = useState<string>(''); // Состояние для выбранной опции
    const ref = useRef<HTMLDivElement>(null);

    const handleOptionClick = (option: string) => {
        setSelectedOption(option); // Сохранение выбранной опции в состояние
        onSelect(option); // Вызов callback для передачи выбранного значения
        setIsOpen(false); // Закрытие списка после выбора
    };

    const toggleDropdown = () => {
        setIsOpen((prev) => !prev); // Открываем/закрываем список
    };

    // Закрытие при клике вне компонента
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (ref.current && !ref.current.contains(event.target as Node)) {
                setIsOpen(false); // Закрываем список при клике вне компонента
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className={`relative w-full ${className}`} ref={ref}>
            {/* Заголовок */}
            <label className="block text-sm font-medium">{label}</label>

            {/* Область выбора */}
            <div className="mt-1 relative cursor-pointer" onClick={toggleDropdown}>
                <div
                    className="border border-gray-300 rounded-[5px] p-2 flex justify-between items-center bg-white"
                    style={{whiteSpace: 'nowrap'}}
                >
                    {/* Отображение выбранной опции или placeholder */}
                    {selectedOption ? (
                        <span className="text-black">{selectedOption}</span>
                    ) : (
                        <span className="opacity-40 text-black">Select one</span>
                    )}

                    {/* Иконка стрелки */}
                    <span className="material-icons">
                        {isOpen ? <IoIosArrowUp className="text-black"/> : <IoIosArrowDown className="text-black"/>}
                    </span>
                </div>

                {/* Выпадающий список */}
                {isOpen && (
                    <div
                        className="absolute z-50 bg-white border border-gray-300 rounded-[5px] shadow-lg max-h-60 overflow-auto"
                        style={{
                            top: '100%', // Позиционируем список под областью выбора
                            left: 0,
                            width: '100%', // Ширина списка совпадает с шириной области выбора
                        }}
                    >
                        {options.map((option, index) => (
                            <div
                                key={index}
                                className="cursor-pointer p-2 hover:bg-gray-100 text-black"
                                onClick={() => handleOptionClick(option)} // Выбор опции
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
