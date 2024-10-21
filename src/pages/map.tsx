import PageLayout from "@/layout/page-layout";
import ContentMaestroUi from "@/ui/content-maestro-ui";
import PageInfoUi from "@/ui/page-info-ui";
import SelectUI from "@/ui/select-ui";
import React from "react";

const Map = () => {

    return <>

        <PageLayout isContainer={true} className={"bg-mina text-white"}>
            <PageInfoUi
                title={"Map"}
                subTitle={
                    <div>
                        In charge of updates: <a href="mailto:o.s.dosenko@gmail.com">Oleksandr Dosenko</a>
                    </div>
                }/>
        </PageLayout>

        <PageLayout isContainer={true} className={"mb-[25px] mt-[50px]"}>
            <div className="col-12 py-[50px] p-0 m-0">
                <div className={"flex max-md:flex-col gap-3 justify-between bg-black p-[25px] "}>
                    <SelectUI
                        className={"text-white"}
                        options={["Clash Road"]}
                        onSelect={e => console.log(e)}
                        label={"Choose your capsule:"}
                        initValue={"Clash Road"}
                    />
                </div>
            </div>
        </PageLayout>

        <PageLayout isContainer={true} className={" mt-[50px]"}>
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

        <ContentMaestroUi/>

    </>

}

export default Map;
