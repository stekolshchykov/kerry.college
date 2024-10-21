import PageLayout from "@/layout/page-layout";
import {useRootStore} from "@/providers/RootStoreProvider";
import ContentMaestroUi from "@/ui/content-maestro-ui";
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

            <ContentMaestroUi/>
        </>
    );
});

export default Home;
