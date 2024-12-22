import PageLayout from "@/layout/page-layout";
import Image from "next/image";
import React from "react";

const Home = () => {
    return (
        <>
            <PageLayout isContainer={true} className="mb-[25px] mt-[50px]">
                <div className="col-12 py-[50px] p-0 m-0">
                    <section className="text-center mb-10">
                        <h1 className="text-xxl font-b text-mina">Welcome to Kerry College Student Portal</h1>
                        <p className="text-m text-accent mt-4">
                            Your one-stop destination for articles, schedules, campus maps, and contacts.
                        </p>
                    </section>
                </div>
            </PageLayout>


            <PageLayout isContainer={true} className="bg-background py-[50px]">
                <section className="text-center mb-10">
                    <h2 className="text-xl font-b text-mina mb-4">Our Mission</h2>
                    <p className="text-m text-mina">
                        At Kerry College, we are committed to creating an inclusive community where students can excel
                        academically and personally. We aim to inspire innovation, support achievement, and nurture
                        growth in every aspect of student life. Through collaboration and access to resources, we
                        empower students to turn their aspirations into reality. Our mission is to be a cornerstone for
                        learning, growth, and a vibrant campus culture that celebrates diversity and creativity.

                    </p>
                </section>
            </PageLayout>

            <PageLayout isContainer={true} className="mb-[25px] mt-[50px]">
                <div className="col-12 py-[50px] p-0 m-0">
                    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
                        <div className="bg-background p-6 shadow-md rounded-lg">
                            <h2 className="text-l font-b text-mina mb-4">Student Articles</h2>
                            <p className="text-s text-mina">
                                Explore inspiring articles written by our students, sharing their experiences and
                                knowledge.
                            </p>
                            <a href="/articles" className="text-accent text-m mt-4 inline-block hover:underline">
                                Read Articles
                            </a>
                        </div>

                        <div className="bg-background p-6 shadow-md rounded-lg">
                            <h2 className="text-l font-b text-mina mb-4">Class Schedules</h2>
                            <p className="text-s text-mina">
                                Keep track of your classes and stay on top of your academic journey.
                            </p>
                            <a href="/class-schedules" className="text-accent text-m mt-4 inline-block hover:underline">
                                View Schedules
                            </a>
                        </div>

                        <div className="bg-background p-6 shadow-md rounded-lg">
                            <h2 className="text-l font-b text-mina mb-4">Holiday Calendar</h2>
                            <p className="text-s text-mina">
                                Check the dates for holidays and plan your breaks effectively.
                            </p>
                            <a href="/holiday-calendar"
                               className="text-accent text-m mt-4 inline-block hover:underline">
                                View Calendar
                            </a>
                        </div>

                        <div className="bg-background p-6 shadow-md rounded-lg">
                            <h2 className="text-l font-b text-mina mb-4">Campus Maps</h2>
                            <p className="text-s text-mina">
                                Navigate the college with ease using our detailed campus maps.
                            </p>
                            <a href="/campus-maps" className="text-accent text-m mt-4 inline-block hover:underline">
                                Explore Maps
                            </a>
                        </div>

                        <div className="bg-background p-6 shadow-md rounded-lg">
                            <h2 className="text-l font-b text-mina mb-4">Contact Directory</h2>
                            <p className="text-s text-mina">
                                Find contact information for college departments and staff.
                            </p>
                            <a href="/contacts" className="text-accent text-m mt-4 inline-block hover:underline">
                                View Contacts
                            </a>
                        </div>
                    </section>
                </div>
            </PageLayout>

            <PageLayout isContainer={true} className="bg-background py-[50px]">
                <section className="text-center">
                    <h2 className="text-xl font-b text-mina mb-4">Join Us in Collaboration</h2>
                    <p className="text-m text-mina">
                        We invite all enthusiastic students and faculty members to collaborate with us. Whether you
                        have creative
                        ideas, articles, or projects, we’d love to hear from you. Let’s build a thriving community
                        together!
                    </p>
                    <a
                        href="/contacts"
                        className="text-accent text-m mt-4 inline-block hover:underline"
                    >
                        Contact Us
                    </a>
                </section>
            </PageLayout>


            <PageLayout isContainer={false} className="bg-mina">
                <PageLayout isContainer={true} className="">
                    <section className="py-[50px]">
                        <div className="text-white text-center">
                            <h2 className="text-xl font-b mb-4">A Message from Our Founder</h2>
                            <PageLayout isContainer={false}
                                        className="flex gap-[25px] flex-col md:flex-row justify-center items-center">
                                <div className="w-full md:max-w-[150px]">
                                    <Image
                                        src="/avatar/admin.png"
                                        className="w-full h-auto rounded-full"
                                        alt="Admin Avatar"
                                        width={150}
                                        height={150}
                                    />
                                </div>
                                <div className="text-m">
                                    <p className="mb-4">
                                        Welcome to the Kerry College Student Portal. This platform was created to
                                        support your journey and
                                        connect our community. Visit the contact page for feedback or assistance!
                                    </p>
                                </div>
                            </PageLayout>
                        </div>
                    </section>
                </PageLayout>

            </PageLayout>
        </>
    );
};

export default Home;
