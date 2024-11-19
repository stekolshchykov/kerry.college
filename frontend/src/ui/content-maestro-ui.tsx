import PageLayout from "@/layout/page-layout";
import Image from "next/image"; // Импортируем компонент Image
import React from "react";

const ContentMaestroUi = () => {
    return (
        <PageLayout isContainer={false} className={"bg-mina"}>
            <PageLayout isContainer={true} className={""}>
                <div className={"flex gap-[25px] py-[50px] flex-col md:flex-row"}>
                    <div className={"w-full md:max-w-[200px] h-auto"}>
                        <Image
                            src="/avatar/admin.png" // Обратите внимание на абсолютный путь
                            className={"w-full h-auto rounded-full"}
                            alt="Admin Avatar"
                            width={200} // Укажите точные размеры изображения
                            height={200} // Укажите точные размеры изображения
                        />
                    </div>
                    <div className={"flex flex-col gap-2"}>
                        <div>
                            <div className={"text-s text-[#E79730] leading-[0.5]"}>Content Maestro</div>
                            <div className={"text-white text-l"}>Oleksandr Dosenko</div>
                        </div>
                        <div className={"text-white text-m flex flex-col gap-2 "}>
                            <div className={"leading-[1] font-light"}>
                                Welcome to our student space at Kerry College in Tralee, Ireland. Whether you’re new or
                                a seasoned student, this site is your hub for student life. We’ve gathered everything
                                you
                                need, from events and news to study resources and tips.
                            </div>

                            <div className={"leading-[1] font-light"}>
                                Our mission is to enhance your college experience. This platform evolves to meet your
                                needs, so feel free to share updates or ideas. Your input keeps things fresh and
                                relevant.
                            </div>

                            <div className={"leading-[1] font-light"}>
                                If you notice outdated content or have suggestions for improvement, please contact us.
                                You can reach out via email or ask your instructor for assistance. Every voice counts!
                            </div>
                            <div className={"leading-[1]"}>
                                <a href="mailto:admin@kerry.college" className={"underline"}>
                                    admin@kerry.college
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </PageLayout>
        </PageLayout>
    );
};

export default ContentMaestroUi;
