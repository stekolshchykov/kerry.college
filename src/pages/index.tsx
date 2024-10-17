import PageLayout from "@/layout/page-layout";
import {useRootStore} from "@/providers/RootStoreProvider";
import PageInfoUi from "@/ui/page-info-ui";
import SelectUI from "@/ui/select-ui";
import logger, {logLevelEnum} from "@/util/LokiLogger";
import {observer} from "mobx-react-lite";
import {GetServerSideProps} from "next";
import React from "react";
import useragent from 'useragent';

export const getServerSideProps: GetServerSideProps = async (context) => {
    const req = context.req;

    // Получаем IP-адрес
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;

    // Получаем данные о геолокации с помощью geoip-lite
    // const geo = lookup(`${ip}`);

    // Разбираем user-agent для информации о браузере и устройстве
    const agent = useragent.parse(`${req.headers['user-agent']}`);

    // Получаем текущий URL страницы
    const currentPage = context.resolvedUrl;

    // Создаем объект для логирования
    const logObject = {
        ip: ip,
        // geo: geo,
        browser: agent.toAgent(),
        os: agent.os.toString(),
        device: agent.device.toString(),
        currentPage: currentPage,
        timestamp: new Date().toISOString(),
    };

    logger.log(logObject, logLevelEnum.Info, {})

    return {props: {}};
}


const Home = observer(() => {


    const [selectedCourseTitle, setSelectedCourseTitle] = React.useState<string>("Web Development");
    const [currentDayI, setCurrentDayI] = React.useState<number | null>(null);

    const {scheduleStore} = useRootStore();
    const selectedCourse = scheduleStore.getCourseByTitle(selectedCourseTitle);

    // Получаем текущий день недели
    const currentDay = new Date().toLocaleDateString("en-US", {weekday: 'long'});

    // Проверка, является ли день сегодняшним
    const isToday = (day: string) => day === currentDay;

    // Скролл к колонке с сегодняшним днем на мобильных устройствах
    React.useEffect(() => {
        const element = document.querySelector(".today-column");
        if (element) {
            element.scrollIntoView({behavior: "smooth", block: "nearest", inline: "start"});
        }
    }, []);

    return (
        <>
            <PageLayout isContainer={true} className={"bg-mina text-white"}>
                <PageInfoUi
                    title={"Schedule"}
                    subTitle={
                        <div>
                            {currentDayI}
                            In charge of updates: <a href="mailto:o.s.dosenko@gmail.com">Oleksandr Dosenko</a>
                        </div>
                    }
                />
            </PageLayout>

            <PageLayout isContainer={true} className={"mb-[25px] mt-[50px]"}>
                <div className="col-12 py-[50px] p-0 m-0">
                    <div className={"flex max-md:flex-col gap-3 justify-between bg-black p-[25px]"}>
                        <SelectUI
                            className={"text-white"}
                            options={["Clash Road"]}
                            onSelect={e => console.log(e)}
                            label={"Choose your capsule:"}
                        />
                        <SelectUI
                            className={"text-white"}
                            options={scheduleStore.getCourseTitles()}
                            onSelect={setSelectedCourseTitle}
                            label={"Choose a course:"}
                        />
                    </div>
                </div>
            </PageLayout>

            <PageLayout isContainer={true} className={"mb-[50px] max-w-[1280px] m-auto"}>
                {selectedCourse && (
                    <div className="col-12 overflow-x-auto mb-[50px] px-0">
                        <table className={"min-w-full"}>
                            <thead>
                            <tr>
                                <th className={"border-[1px] p-3 text-[18px] min-w-[120px]"}></th>
                                {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"].map((day, index) => {
                                    if (isToday(day) && currentDayI !== index) {
                                        setCurrentDayI(index)
                                    }
                                    return <th
                                        key={index}
                                        className={`border-[1px] p-3 text-[18px] min-w-[200px] ${isToday(day) ? "bg-yellow-300 today-column" : ""}`}
                                    >
                                        {day}
                                    </th>
                                })}
                            </tr>
                            </thead>
                            <tbody>
                            {scheduleStore.data.times?.map((time, timeIndex) => {
                                return <tr
                                    key={timeIndex}
                                    className={`${timeIndex % 2 === 0 ? "bg-gray-50" : ""}`}
                                    style={{backgroundColor: scheduleStore.data.times[timeIndex]?.includes("REST") ? 'blue' : ''}}
                                >
                                    <td className={"border-[1px] p-3 w-[120px]"}>{time}</td>
                                    {selectedCourse?.schedule.map((daySchedule, dayIndex) => {
                                        const isCurrentDay = currentDayI == dayIndex
                                        return <td
                                            key={dayIndex}
                                            className={`border-[1px] p-3 text-left align-top ${isCurrentDay ? "bg-yellow-300" : ""}`}>
                                            {!daySchedule[timeIndex]?.title ? (
                                                <div style={{backgroundColor: "blue"}}>REST</div>
                                            ) : (
                                                <>
                                                    <div>{daySchedule[timeIndex]?.title}</div>
                                                    <div>{daySchedule[timeIndex]?.room}</div>
                                                </>
                                            )}
                                        </td>
                                    })}
                                </tr>
                            })}
                            </tbody>
                        </table>
                    </div>
                )}
            </PageLayout>
        </>
    );
});

export default Home;