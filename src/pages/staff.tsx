import {dataStaff} from "@/data";
import PageLayout from "@/layout/page-layout";
import PageInfoUi from "@/ui/page-info-ui";
import React from "react";

const StaffCard = (props: { name: string, img: string, job: string }) => {

    const imgPath = (props?.img && props?.img?.length > 3) ? props?.img : "/staff/no-img.webp"

    return <li className={"flex flex-column gap-0 leading-[1.2]"}>
        <div className={`
            w-full min-h-[350px] max-h-[350px] overflow-hidden
            mb-1
        `}
             style={{
                 backgroundImage: `url(${imgPath})`,
                 backgroundSize: "cover",
                 backgroundPosition: "center center",
             }}
        ></div>
        <div className={"text-[18px] font-b"}>{props.name}</div>
        <div>{props.job}</div>
    </li>

}

const Staff = () => {


    return <>

        <PageLayout isContainer={true} className={"bg-mina text-white"}>
            <PageInfoUi title={"Staff"} subTitle={"In charge of updates: Oleksandr Dosenko"}/>
        </PageLayout>

        <PageLayout isContainer={true} className={"mb-[25px] mt-[50px]"}>
            <ul className={"grid grid-cols-2 lg:grid-cols-4 gap-4 justify-between"}>
                {dataStaff.map((s, k) => <StaffCard key={k} job={s.job} name={s.name} img={s.img}/>)}
            </ul>
        </PageLayout>

    </>

}

export default Staff;