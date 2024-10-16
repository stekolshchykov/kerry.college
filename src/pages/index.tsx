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
    const {scheduleStore} = useRootStore();

    // Get the selected course's schedule
    const selectedCourse = scheduleStore.getCourseByTitle(selectedCourseTitle);

    return (
        <>
            <PageLayout isContainer={true} className={"bg-mina text-white"}>
                <PageInfoUi title={"Schedule"} subTitle={"In charge of updates: Oleksandr Dosenko"}/>
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
                            options={scheduleStore.getCourseTitles()} // Use the updated method
                            onSelect={setSelectedCourseTitle} // Directly set the selected title
                            label={"Choose a course:"}
                        />
                    </div>
                </div>
            </PageLayout>
            <PageLayout isContainer={false}
                        className={"mb-[50px] sm:max-w-[1280px] md:max-w-[1280px] lg:max-w-[1280px] xl:max-w-[1536px] 2xl:max-w-[1536px] m-auto"}>

                {selectedCourse &&
                    <div
                        className="col-12  overflow-x-auto mb-[50px]"> {/* Add overflow-x-auto for horizontal scroll */}
                        {/* Output the schedule as a table */}
                        <table className={"min-w-full "}>
                            <thead>
                            <tr>
                                <th className={"border-[1px] p-3 text-[18px] min-w-[120px]"}></th>
                                <th className={"border-[1px] p-3 text-[18px] min-w-[200px]"}>Monday</th>
                                <th className={"border-[1px] p-3 text-[18px] min-w-[200px]"}>Tuesday</th>
                                <th className={"border-[1px] p-3 text-[18px] min-w-[200px]"}>Wednesday</th>
                                <th className={"border-[1px] p-3 text-[18px] min-w-[200px]"}>Thursday</th>
                                <th className={"border-[1px] p-3 text-[18px] min-w-[200px]"}>Friday</th>
                            </tr>
                            </thead>
                            <tbody>
                            {scheduleStore.data.times?.map((l, k) => {
                                return (
                                    <tr key={k} className={k % 2 === 0 ? "bg-gray-50" : ""}>
                                        <td className={"border-[1px] p-3 w-[120px]"}>{l}</td>
                                        {selectedCourse?.schedule.map((ll, kk) => {
                                            return (
                                                <td key={kk} className={"border-[1px] p-3"}>
                                                    {!ll[k]?.title && "REST"}
                                                    <div>{ll[k]?.title}</div>
                                                    <div>{ll[k]?.lecture}</div>
                                                    <div>{ll[k]?.room}</div>
                                                </td>
                                            );
                                        })}
                                    </tr>
                                );
                            })}
                            </tbody>
                        </table>
                    </div>
                }
            </PageLayout>
        </>
    );
});

export default Home;
