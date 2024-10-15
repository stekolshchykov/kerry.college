import React, {useState} from 'react';
import {createPortal} from 'react-dom';
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
    const [dropdownPosition, setDropdownPosition] = useState<{ top: number; left: number }>({top: 0, left: 0});

    const handleOptionClick = (option: string) => {
        setSelectedOption(option); // Сохранение выбранной опции в состояние
        onSelect(option); // Вызов callback для передачи выбранного значения
        setIsOpen(false); // Закрытие списка после выбора
    };

    const toggleDropdown = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect(); // Получаем положение компонента
        setDropdownPosition({top: rect.bottom, left: rect.left}); // Задаем положение для списка
        setIsOpen((prev) => !prev); // Открываем/закрываем список
    };

    return (
        <div className={`relative w-full ${className}`}>
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

                {/* Выпадающий список с использованием портала */}
                {isOpen &&
                    createPortal(
                        <div
                            className="absolute z-50 bg-white border border-gray-300 rounded-[5px] shadow-lg overflow-auto max-h-60"
                            style={{
                                top: `${dropdownPosition.top}px`,
                                left: `${dropdownPosition.left}px`,
                                width: '100%'
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
                        </div>,
                        document.body // Рендерим элемент в body, чтобы избежать обрезания
                    )}
            </div>
        </div>
    );
};

export default SelectUI;
