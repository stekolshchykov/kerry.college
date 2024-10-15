
import PageLayout from "@/layout/page-layout";
import PageInfoUi from "@/ui/page-info-ui";
import {observer} from "mobx-react-lite";
import React from "react";


export default observer(function Home() {

    return <>
        <PageLayout isContainer={true} className={"bg-mina text-white"}>
            <PageInfoUi title={"Schedule"} subTitle={"List update: 23/03/24"}/>
        </PageLayout>

        <PageLayout isContainer={true}>
            <div className="col py-[50px]">
                11
            </div>
        </PageLayout>
    </>

})

