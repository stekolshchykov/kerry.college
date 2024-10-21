import PageLayout from "@/layout/page-layout";
import React from "react";

const ContentMaestroUi = () => {

    return <PageLayout isContainer={false} className={"bg-mina"}>
        <PageLayout isContainer={true} className={""}>
            <div className={"flex gap-[25px] py-[50px] flex-col md:flex-row"}>
                <div className={"w-full md:max-w-[200px] h-auto"}>
                    <img
                        src={"./avatar/admin.webp"}
                        className={"w-full h-auto rounded-full"} // Full width on mobile
                        alt="Admin Avatar"
                    />
                </div>
                <div className={"flex flex-col gap-2"}>
                    <div>
                        <div className={"text-s text-[#E79730] leading-[0.5]"}>Content Maestro</div>
                        <div className={"text-white text-l"}>Oleksandr Dosenko</div>
                    </div>
                    <div className={"text-white text-m flex flex-col gap-2 "}>
                        <div className={"leading-[1]"}>
                            Welcome to our student space at Kerry College in Tralee, Ireland. Whether you're new or
                            a seasoned student, this site is your hub for student life. We’ve gathered everything you
                            need, from events and news to study resources and tips.
                        </div>

                        <div className={"leading-[1]"}>
                            Our mission is to enhance your college experience. This platform evolves to meet your
                            needs, so feel free to share updates or ideas. Your input keeps things fresh and relevant.
                        </div>

                        <div className={"leading-[1]"}>
                            Have a suggestion or see something we missed? Contact us! We’re here to listen and
                            improve, so every voice counts!
                        </div>
                        <div className={"leading-[1]"}>
                            <a href="mailto:o.s.dosenko@gmail.com" className={"underline"}>
                                o.s.dosenko@gmail.com
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </PageLayout>
    </PageLayout>
}

export default ContentMaestroUi;
