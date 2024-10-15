import PageLayout from "@/layout/page-layout";
import {useRootStore} from "@/providers/RootStoreProvider";
import PageInfoUi from "@/ui/page-info-ui";
import SelectUI from "@/ui/select-ui";
import {observer} from "mobx-react-lite";
import React from "react";

const Home = observer(() => {
    const [selectedCourseTitle, setSelectedCourseTitle] = React.useState<string>("");
    const {scheduleStore} = useRootStore();

    // Get the selected course's schedule
    const selectedCourse = scheduleStore.getCourseByTitle(selectedCourseTitle);

    console.log("+++selectedCourseSchedule", selectedCourse)
    return (
        <>
            <PageLayout isContainer={true} className={"bg-mina text-white"}>
                <PageInfoUi title={"Schedule"} subTitle={"Обновление списка: 23/03/24"}/>
            </PageLayout>

            <PageLayout isContainer={true}>
                <div className="col-12 py-[50px]">
                    <div className={"flex gap-3 justify-between bg-black p-[25px]"}>
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
                <div className="col-12">
                    {/* Output the schedule as a table */}
                    <table className={"w-full"}>
                        <thead>
                        <tr>
                            <th></th>
                            <th className={"border-[1px] p-3"}>Monday</th>
                            <th className={"border-[1px] p-3"}>Tuesday</th>
                            <th className={"border-[1px] p-3"}>Wednesday</th>
                            <th className={"border-[1px] p-3"}>Thursday</th>
                            <th className={"border-[1px] p-3"}>Friday</th>
                        </tr>
                        </thead>
                        <tbody>
                        {scheduleStore.data.times?.map((l, k) => {
                            return <tr key={k}>
                                <td className={"border-[1px]  p-3"}>{l}</td>
                                {selectedCourse?.schedule.map((ll, kk) => {
                                    return <td key={kk} className={"border-[1px]  p-3"}>
                                        <div>{ll[k]?.title}</div>
                                        <div>{ll[k]?.lecture}</div>
                                        <div>{ll[k]?.room}</div>
                                    </td>
                                })}
                            </tr>
                        })}
                        </tbody>
                    </table>
                </div>
            </PageLayout>
        </>
    );
});

export default Home;
