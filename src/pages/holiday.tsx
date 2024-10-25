import {markedDates} from "@/data";
import PageLayout from "@/layout/page-layout";
import PageInfoUi from "@/ui/page-info-ui";
import React, {useEffect, useState} from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];


const Holiday: React.FC = () => {
    const [value, setValue] = useState<Value>(null); // Инициализируем значение как null
    const [isClient, setIsClient] = useState(false); // Флаг для определения клиента

    // Пример дат для закрашивания

    useEffect(() => {
        setValue(new Date()); // Устанавливаем текущее время на клиенте
        setIsClient(true); // Устанавливаем флаг клиента
    }, []);

    // Типизация параметра date
    const tileClassName = ({date}: { date: Date }): string | null => {
        if (!value) return null; // Проверяем, установлено ли значение

        // Получаем день недели (0 = воскресенье, 6 = суббота)
        const dayOfWeek = date.getDay();

        // Если выходной, возвращаем null
        if (dayOfWeek === 0 || dayOfWeek === 6) {
            return null; // Для выходных не устанавливаем фон
        }

        // Форматируем дату в "YYYY-MM-DD"
        const formattedDate = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;


        // Проверяем, отмечена ли дата, и возвращаем соответствующий класс
        const markedClass = markedDates[formattedDate];
        if (markedClass) {
            return markedClass; // Возвращаем класс, если дата отмечена
        }

        return 'working-day'; // Возвращаем класс для рабочих дней
    };

    // Метод форматирования месяца и года
    const formatMonthYear = (locale: string | undefined, date: Date): string => {
        if (!date) return ''; // Проверяем на undefined
        return `${date.getFullYear()} ${date.toLocaleString(locale || 'en-EN', {month: 'long'})}`; // Указываем локаль
    };

    return (
        <>
            <PageLayout isContainer={true} className={"bg-mina text-white"}>
                <PageInfoUi
                    title={"Holiday"}
                    subTitle={
                        <div>
                            If you notice outdated or missing information, please send updates to one of our staff
                            members,
                            or ask your teacher to assist.
                        </div>
                    }/>
            </PageLayout>

            <PageLayout isContainer={true} className={" mt-[50px] mb-[50px]"}>
                <div className="col">
                    <div className={"flex max-md:flex-col max-md:gap-3 gap-5"}>
                        <div className={""}>
                            {isClient && ( // Убедитесь, что компонент рендерится только на клиенте
                                <Calendar
                                    className={"max-w-[100vw] min-w-full md:min-w-[600px] }"}
                                    onChange={setValue} // Обновляем состояние с типами
                                    value={value}
                                    tileClassName={tileClassName}
                                    // Убираем отображение заголовка
                                    formatMonthYear={formatMonthYear} // Передаем функцию с правильными параметрами
                                />
                            )}
                        </div>
                        <div className={"flex flex-col gap-1"}>
                            <div className={"flex gap-3 align-items-center"}>
                                <div className={"w-[35px] h-[35px] holiday"}></div>
                                <div>Back holiday</div>
                            </div>

                            <div className={"flex gap-3 align-items-center"}>
                                <div className={"w-[35px] h-[35px] christmas"}></div>
                                <div>Christmas</div>
                            </div>

                            <div className={"flex gap-3 align-items-center"}>
                                <div className={"w-[35px] h-[35px] mid-terms"}></div>
                                <div>Mid-Terms</div>
                            </div>

                            <div className={"flex gap-3 align-items-center"}>
                                <div className={"w-[35px] h-[35px] eater-break"}></div>
                                <div>Eater Break</div>
                            </div>


                        </div>
                    </div>
                </div>
            </PageLayout>
        </>
    );
}

export default Holiday;
