import {dataMembers} from "@/data";
import PageLayout from "@/layout/page-layout";
import ContactForm from "@/ui/contact-form";
import PageInfoUi from "@/ui/page-info-ui";
import Head from "next/head";
import React from "react";

const Contact: React.FC = () => {

    const fallbackImage = "/avatar/admin.png"; // Path to fallback image

    return (
        <>

            <Head>
                <title>Kerry College Contacts</title>
                <meta name="description"
                      content="Find the official contact information for Kerry College, including departments, staff, and support services."/>
                <meta name="keywords"
                      content="Kerry College, contacts, staff directory, support services, department contacts"/>
                <meta name="author" content="Vitalii Stekolshchykov"/>
            </Head>

            <PageLayout isContainer={true} className="bg-mina text-white">
                <PageInfoUi
                    title="Contact"
                    subTitle={
                        <div>
                            On this page, you can send us a message and learn more about our team.
                        </div>
                    }
                />
            </PageLayout>

            <PageLayout isContainer={true} className="pt-16">
                <div className="col-md-8 mb-10">
                    <div className={"text-l mb-3 font-b"}>Get in touch with us:</div>
                    <ContactForm/>
                </div>
                <div className="col-md-4 ">
                    <div className={"text-l mb-3 font-b  mt-[0px] "}>Student-Driven Project</div>
                    <div>
                        This website is proudly designed and developed by a team of college students and dedicated
                        volunteers as part of an exciting educational initiative aimed at gaining real-world experience
                        and enhancing our skills. We are committed to continuously improving the platform to provide you
                        with accurate and valuable information. However, as this is a learning-driven project supported
                        by limited resources, there might occasionally be delays in processing your inquiries or
                        updating certain sections of the site. We deeply appreciate your understanding, patience, and
                        encouragement as we grow and strive to create a resource that benefits everyone. Thank you for
                        supporting our journey!
                    </div>
                </div>
            </PageLayout>

            <PageLayout isContainer={true} className=" pb-5 mb-10">
                <div className="col">
                    <div className={"text-l mb-3 font-b"}>Our team:</div>
                    <div className="file flex-initial">
                        <div className="flex justify-start">
                            <ul className="flex flex-wrap gap-3 p-0 justify-center sm:justify-start">
                                {dataMembers.map((member) => (
                                    <li key={member.name} className="flex flex-col items-center gap-3 w-[180px]">
                                        <div className="w-[180px] h-[180px]">
                                            <img
                                                src={member.img || fallbackImage}
                                                alt="avatar"
                                                width={180}
                                                height={180}
                                                className="rounded-full"
                                                onError={(e) => {
                                                    const target = e.target as HTMLImageElement;
                                                    target.src = fallbackImage;
                                                }}
                                            />
                                        </div>
                                        <div>
                                            <div className="text-m font-b text-center">{member.name}</div>
                                            <div className="text-s text-center">{member.job}</div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                </div>
            </PageLayout>
        </>
    );
};

export default Contact;
