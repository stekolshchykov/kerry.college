import PageLayout from "@/layout/page-layout";
import {useRootStore} from "@/providers/RootStoreProvider";
import PageInfoUi from "@/ui/page-info-ui";
import SelectUI from "@/ui/select-ui";
import {observer} from "mobx-react-lite";
import Head from "next/head";
import React from "react";

// export async function getStaticProps() {
//     return {
//         props: {
//             posts: 112211,
//         },
//     };
// }

const Home = observer(() => {
    const [selectedCourseTitle, setSelectedCourseTitle] = React.useState<string>("Software Development");
    const [currentDayI, setCurrentDayI] = React.useState<number | null>(null);

    const {scheduleStore} = useRootStore();
    const selectedCourse = scheduleStore.getCourseByTitle(selectedCourseTitle);

    // Обновляем текущий день недели при монтировании
    React.useEffect(() => {
        const currentDay = new Date().toLocaleDateString("en-US", {weekday: 'long'});
        const dayIndex = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"].indexOf(currentDay);
        if (dayIndex !== -1) {
            setCurrentDayI(dayIndex);
        }
    }, []);

    // Проверка, является ли день сегодняшним
    const isToday = (day: string, index: number) => index === currentDayI;

    React.useEffect(() => {
        const element = document.querySelector(".today-column");
        if (element) {
            element.scrollIntoView({behavior: "smooth", block: "nearest", inline: "start"});
        }
    }, [currentDayI]);

    return (
        <>
            <Head>
                <meta name="description"
                      content="View the academic schedule at Kerry College. Stay updated on classes, deadlines, and events."/>
                <meta name="keywords" content="Kerry College schedule, academic calendar, class schedule, events"/>
                <meta property="og:title" content="Kerry College - Schedule"/>
                <meta property="og:description"
                      content="View the academic schedule at Kerry College. Stay updated on classes, deadlines, and events."/>
                <meta property="og:url" content="https://www.kerry.college/schedule"/>
                <meta property="og:type" content="website"/>
                <meta name="robots" content="index, follow"/>
            </Head>

            <PageLayout isContainer={true} className={"bg-mina text-white"}>
                <PageInfoUi
                    title={"Schedule"}
                    subTitle={
                        <div>
                            Access the class schedule for all campuses and courses, providing essential details on
                            timings and locations.
                        </div>
                    }
                />
            </PageLayout>

            <PageLayout isContainer={true} className={"mt-16 mx-3"}>
                <div className="col-12 py-[50px] p-0 m-0">
                    <div className={"flex max-md:flex-col gap-3 justify-between bg-black p-[25px]"}>
                        <SelectUI
                            className={"text-white"}
                            options={["Clash Road"]}
                            onSelect={e => console.log(e)}
                            label={"Choose your campus:"}
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

            <PageLayout isContainer={true} className={"mb-16 mt-5 max-w-[1280px] m-auto"}>
                {selectedCourse && (
                    <div className="col-12 overflow-x-auto mb-[50px] px-0">
                        <table className={"min-w-full"}>
                            <thead>
                            <tr>
                                <th className={"border-[1px] p-3 text-[18px] min-w-[120px]"}></th>
                                {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"].map((day, index) => (
                                    <th
                                        key={index}
                                        className={`border-[1px] p-3 text-[18px] min-w-[200px] ${
                                            isToday(day, index) ? "bg-yellow-300 today-column" : ""
                                        }`}
                                    >
                                        {day}
                                    </th>
                                ))}
                            </tr>
                            </thead>
                            <tbody>
                            {scheduleStore.data.times?.map((time, timeIndex) => {
                                const isOddRow = timeIndex % 2 === 0;
                                const isRestRow = timeIndex === 2 || timeIndex === 5;
                                return (
                                    <tr
                                        key={timeIndex}
                                        className={`${
                                            isOddRow && !isRestRow ? "bg-gray-50" : ""
                                        } ${isRestRow ? "bg-[#8888ff]" : ""} text-left align-top`}
                                    >
                                        <td className={"border-[1px] p-3 w-[120px]"}>{time}</td>
                                        {selectedCourse?.schedule.map((daySchedule, dayIndex) => {
                                            const isCurrentDay = currentDayI === dayIndex;
                                            return (
                                                <td
                                                    key={dayIndex}
                                                    className={`border-[1px] p-3 text-left align-top ${
                                                        isCurrentDay && !isRestRow ? "bg-yellow-300" : ""
                                                    }`}
                                                >
                                                    {!daySchedule[timeIndex]?.title ? (
                                                        <div style={{backgroundColor: "blue"}}></div>
                                                    ) : (
                                                        <>
                                                            <div>{daySchedule[timeIndex]?.title}</div>
                                                            {daySchedule[timeIndex]?.room && (
                                                                <div>R{daySchedule[timeIndex]?.room}</div>
                                                            )}
                                                        </>
                                                    )}
                                                </td>
                                            );
                                        })}
                                    </tr>
                                );
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
