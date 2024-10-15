import {ScheduleLineI} from "@/data";
import PageLayout from "@/layout/page-layout";
import {useRootStore} from "@/providers/RootStoreProvider";
import PageInfoUi from "@/ui/page-info-ui";
import SelectUI from "@/ui/select-ui";
import {observer} from "mobx-react-lite";
import React from "react";


export default observer(function Home() {

    const [selectedCourseTitle, setSelectedCourseTitle] = React.useState<string>("");

    const {scheduleStore} = useRootStore()

    const schedule: ScheduleLineI[] = scheduleStore.getCourseByTitle(selectedCourseTitle)?.schedule || []

    return <>
        <PageLayout isContainer={true} className={"bg-mina text-white"}>
            <PageInfoUi title={"Schedule"} subTitle={"List update: 23/03/24"}/>
        </PageLayout>

        <PageLayout isContainer={true}>
            <div className="col-12 py-[50px]">
                <div className={"flex gap-3 justify-between bg-black p-[25px]"}>
                    <SelectUI
                        className={"text-white"}
                        options={["Clash Road"]}
                        onSelect={e => console.log(e)}
                        label={"Choose your capsule:"}/>
                    <SelectUI
                        className={"text-white"}
                        options={scheduleStore.getCourseTitle()}
                        onSelect={e => setSelectedCourseTitle(e)}
                        label={"Select courses:"}/>
                </div>
            </div>
            <div className="col-12">
                {JSON.stringify(scheduleStore.getCourseByTitle(selectedCourseTitle))}

                <table className={"w-full"}>
                    <thead>
                    <tr>
                        <th></th>
                        <th>Monday</th>
                        <th>Tuesday</th>
                        <th>Wednesday</th>
                        <th>Thursday</th>
                        <th>Saturday</th>
                    </tr>
                    </thead>
                    <tbody>
                    {schedule.map((l, k) => {
                        return <tr key={k}>
                            <td>{l.time}</td>
                            <td>$100</td>
                        </tr>
                    })}
                    <tr>
                        <td>January</td>
                        <td>$100</td>
                    </tr>
                    <tr>
                        <td>February</td>
                        <td>$80</td>
                    </tr>
                    </tbody>
                    <tfoot>
                    <tr>
                        <td>Sum</td>
                        <td>$180</td>
                    </tr>
                    </tfoot>
                </table>

            </div>
        </PageLayout>
    </>

})

