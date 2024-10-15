import PageLayout from "@/layout/page-layout";
import {useRootStore} from "@/providers/RootStoreProvider";
import PageInfoUi from "@/ui/page-info-ui";
import SelectUI from "@/ui/select-ui";
import {observer} from "mobx-react-lite";
import React from "react";


export default observer(function Home() {

    const {scheduleStore} = useRootStore()

    return <>
        <PageLayout isContainer={true} className={"bg-mina text-white"}>
            <PageInfoUi title={"Schedule"} subTitle={"List update: 23/03/24"}/>
        </PageLayout>

        <PageLayout isContainer={true}>
            <div className="col py-[50px]">
                <div className={"flex gap-3 justify-between bg-black p-[25px]"}>
                    <SelectUI
                        className={"text-white"}
                        options={["Clash Road"]}
                        onSelect={e => console.log(e)}
                        label={"Choose your capsule:"}/>
                    <SelectUI
                        className={"text-white"}
                        options={scheduleStore.getCourseTitle()}
                        onSelect={e => console.log(e)}
                        label={"Select courses:"}/>
                </div>
            </div>
        </PageLayout>
    </>

})

