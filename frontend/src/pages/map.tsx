import PageLayout from "@/layout/page-layout";
import PageInfoUi from "@/ui/page-info-ui";
import SelectUI from "@/ui/select-ui";
import Head from "next/head";
import React from "react";

const Map = () => {

    return <>
        <Head>
            <title>Kerry College Campus Maps</title>
            <meta name="description"
                  content="Explore the official campus maps of Kerry College, find building locations, directions, and campus facilities."/>
            <meta name="keywords"
                  content="Kerry College, campus maps, building locations, directions, campus facilities"/>
            <meta name="author" content="Vitalii Stekolshchykov"/>
        </Head>

        <PageLayout isContainer={true} className={"bg-mina text-white"}>
            <PageInfoUi
                title={"Map"}
                subTitle={
                    <div>
                        Explore the campus maps, providing detailed layouts and locations for all facilities across our
                        campuses.
                    </div>
                }/>
        </PageLayout>

        <PageLayout isContainer={true} className={"mb-[0px] mt-16 mx-3"}>
            <div className="col-12 py-[50px] p-0 m-0">
                <div className={"flex max-md:flex-col gap-3 justify-between bg-black p-[25px] "}>
                    <SelectUI
                        className={"text-white"}
                        options={["Clash Road"]}
                        onSelect={e => console.log(e)}
                        label={"Choose your campus:"}
                        initValue={"Clash Road"}
                    />
                </div>
            </div>
        </PageLayout>

        <PageLayout isContainer={true} className={" mt-5 mb-3 mx-3"}>
            <div className="col overflow-x-auto mb-[50px] px-0">
                <div className={"flex flex-col gap-1"}>
                    <div className={"p-[25px] bg-white border-1"}>
                        <img
                            src={"./map/first_floor.png"}
                            alt={"First floor"}
                            className={"w-100"}
                        />
                    </div>
                    <div className={"p-[25px] bg-white border-1 "}>
                        <img
                            src={"./map/ground_floor.png"}
                            alt={"First floor"}
                            className={"w-100"}
                        />
                    </div>
                </div>
            </div>
        </PageLayout>

    </>

}

export default Map;
