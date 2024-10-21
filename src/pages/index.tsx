import PageLayout from "@/layout/page-layout";
import {useRootStore} from "@/providers/RootStoreProvider";
import PageInfoUi from "@/ui/page-info-ui";
import SelectUI from "@/ui/select-ui";
import gsspl from "@/util/GSSPL";
import {observer} from "mobx-react-lite";
import {GetServerSideProps} from "next";
import React from "react";

export const getServerSideProps: GetServerSideProps = async (context) => {
    gsspl.log(context.req, context)
    return {props: {}};
}

const Home = observer(() => {


    const [selectedCourseTitle, setSelectedCourseTitle] = React.useState<string>("Software Development");
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
                            initValue={"Clash Road"}
                        />
                        <SelectUI
                            className={"text-white"}
                            options={scheduleStore.getCourseTitles()}
                            onSelect={setSelectedCourseTitle}
                            label={"Choose a course:"}
                            initValue={"Software Development"}
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
                                        className={`border-[1px] p-3 text-[18px] min-w-[200px] ${isToday(day) ? "bg-yellow-300 today-column" : ""} `}
                                    >
                                        {day}
                                    </th>
                                })}
                            </tr>
                            </thead>
                            <tbody>
                            {scheduleStore.data.times?.map((time, timeIndex) => {
                                const isOddRow = timeIndex % 2 === 0
                                const isRestRow = (timeIndex === 2 || timeIndex === 5) ? true : false
                                return <tr
                                    key={timeIndex}
                                    className={`${(isOddRow && !isRestRow) ? "bg-gray-50" : ""} ${isRestRow ? "bg-[#8888ff]" : ""} text-left align-top`}
                                    style={{}}
                                >
                                    <td className={"border-[1px] p-3 w-[120px]"}>{time}</td>
                                    {selectedCourse?.schedule.map((daySchedule, dayIndex) => {
                                        const isCurrentDay = currentDayI == dayIndex
                                        return <td
                                            key={dayIndex}
                                            className={`border-[1px] p-3 text-left align-top ${(isCurrentDay && !isRestRow) ? "bg-yellow-300" : ""}`}>
                                            {!daySchedule[timeIndex]?.title ? (
                                                <div style={{backgroundColor: "blue"}}></div>
                                            ) : (
                                                <>
                                                    <div>{daySchedule[timeIndex]?.title}</div>
                                                    {daySchedule[timeIndex]?.room &&
                                                        <div>R{daySchedule[timeIndex]?.room}</div>}
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
