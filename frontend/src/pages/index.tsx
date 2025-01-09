import PageLayout from "@/layout/page-layout";
import {motion} from "framer-motion";
import Head from 'next/head';
import Link from "next/link";
import React from "react";

const Index = () => {
    return (
        <>
            <Head>
                <meta name="description"
                      content="Official website of Kerry College, offering resources for students and staff. Find schedules, maps, articles, and more."/>
                <meta name="keywords"
                      content="Kerry College, education, resources, student information, academic services"/>
                <meta property="og:title" content="Kerry College - Official Site"/>
                <meta property="og:description"
                      content="Official website of Kerry College, offering resources for students and staff. Find schedules, maps, articles, and more."/>
                <meta property="og:url" content="https://www.kerry.college/"/>
                <meta property="og:type" content="website"/>
                <meta name="robots" content="index, follow"/>
            </Head>

            {/* First Section with Background Image */}
            <PageLayout isContainer={false}
                        className=" bg-cover md:h-[70vh] bg-center bg-[url('/main-promo.png')]">
                <div
                    className="col-12 py-[50px] p-5 m-0 flex items-center justify-center text-center h-full bg-black bg-opacity-75">
                    <section>
                        <motion.h1
                            className="text-xxl md:text-xxxl font-b text-white mb-4"
                            initial={{opacity: 0, y: -50}}
                            animate={{opacity: 1, y: 0}}
                            transition={{duration: 1}}
                        >
                            Welcome to Kerry College Student Portal
                        </motion.h1>
                        <motion.p
                            className="text-l text-accent mt-4"
                            initial={{opacity: 0, y: 50}}
                            animate={{opacity: 1, y: 0}}
                            transition={{duration: 1}}
                        >
                            Your one-stop destination for articles, schedules, campus maps, and support.
                        </motion.p>
                    </section>
                </div>
            </PageLayout>

            {/* Mission Statement Section */}
            <PageLayout isContainer={true} className="py-24">
                <motion.section
                    className="text-center"
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{duration: 0.8}}
                >
                    <h2 className="text-xl font-b text-mina mb-3">Our Mission</h2>
                    <p className="text-m text-mina">
                        At Kerry College, we are committed to creating an inclusive community where students can excel
                        academically and personally. We aim to inspire innovation, support achievement, and nurture
                        growth in every aspect of student life. Through collaboration and access to resources, we
                        empower students to turn their aspirations into reality. Our mission is to be a cornerstone for
                        learning, growth, and a vibrant campus culture that celebrates diversity and creativity.
                    </p>
                </motion.section>
            </PageLayout>

            {/* Resource Cards Section with Hover Effects */}
            <PageLayout isContainer={true} className="pb-24 px-4">
                <div className="col-12 py-[50px] p-0 m-0">
                    <h2 className="text-xl font-b text-center text-mina mb-3">Site Sections</h2>

                    <motion.section
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10"
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        transition={{duration: 1}}
                    >
                        <motion.div
                            className=" p-6 shadow-xl rounded-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl"
                            whileHover={{scale: 1.05}}
                            whileTap={{scale: 0.98}}
                        >
                            <h2 className="text-l font-b text-mina mb-4">Student Articles</h2>
                            <p className="text-s text-mina">
                                Explore inspiring articles written by our students, sharing their experiences and
                                knowledge.
                            </p>
                            <Link href="/articles" className="text-accent text-m mt-4 inline-block hover:underline">
                                Read Articles
                            </Link>
                        </motion.div>

                        <motion.div
                            className=" p-6 shadow-xl rounded-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl"
                            whileHover={{scale: 1.05}}
                            whileTap={{scale: 0.98}}
                        >
                            <h2 className="text-l font-b text-mina mb-4">Class Schedules</h2>
                            <p className="text-s text-mina">
                                Keep track of your classes and stay on top of your academic journey.
                            </p>
                            <Link href="/schedule" className="text-accent text-m mt-4 inline-block hover:underline">
                                View Schedules
                            </Link>
                        </motion.div>

                        <motion.div
                            className=" p-6 shadow-xl rounded-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl"
                            whileHover={{scale: 1.05}}
                            whileTap={{scale: 0.98}}
                        >
                            <h2 className="text-l font-b text-mina mb-4">Holiday Calendar</h2>
                            <p className="text-s text-mina">
                                Check the dates for holidays and plan your breaks effectively.
                            </p>
                            <Link href="/holiday"
                                  className="text-accent text-m mt-4 inline-block hover:underline">
                                View Calendar
                            </Link>
                        </motion.div>

                        <motion.div
                            className=" p-6 shadow-xl rounded-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl"
                            whileHover={{scale: 1.05}}
                            whileTap={{scale: 0.98}}
                        >
                            <h2 className="text-l font-b text-mina mb-4">Campus Maps</h2>
                            <p className="text-s text-mina">
                                Navigate the college with ease using our detailed campus maps.
                            </p>
                            <Link href="/map" className="text-accent text-m mt-4 inline-block hover:underline">
                                Explore Maps
                            </Link>
                        </motion.div>

                        <motion.div
                            className=" p-6 shadow-xl rounded-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl"
                            whileHover={{scale: 1.05}}
                            whileTap={{scale: 0.98}}
                        >
                            <h2 className="text-l font-b text-mina mb-4">Contact & Staff</h2>
                            <p className="text-s text-mina">
                                Find contact details for Kerry College&#39;s website staff and departments, along with a
                                feedback form.
                            </p>
                            <Link href="/contact" className="text-accent text-m mt-4 inline-block hover:underline">
                                Contact Us
                            </Link>
                        </motion.div>
                    </motion.section>
                </div>
            </PageLayout>

            {/* Collaboration Section with Bounce Effect */}
            <PageLayout isContainer={true} className=" pb-24">
                <motion.section
                    className="text-center"
                    initial={{opacity: 0, y: 50}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 1}}
                >
                    <h2 className="text-xl font-b text-mina mb-4">Join Us</h2>
                    <p className="text-m text-mina">
                        We invite all enthusiastic students and faculty members to collaborate with us. Whether you
                        have creative ideas, articles, or projects, we’d love to hear from you. Let’s build a thriving
                        community
                        together!
                    </p>
                    <Link href="/contact" className="text-accent text-m mt-4 inline-block hover:underline">
                        Contact Us
                    </Link>
                </motion.section>
            </PageLayout>

            {/* Founder Message Section with Fade-in Effect */}
            <PageLayout isContainer={false} className="bg-mina">
                <PageLayout isContainer={true} className="">
                    <section className="py-14">
                        <div className="text-white text-center">
                            <PageLayout isContainer={false}
                                        className="flex gap-[25px] flex-col md:flex-row justify-start items-center">
                                <div className="w-full md:max-w-[150px] flex text-center justify-center ">
                                    <img
                                        src={"members/stekolshchykov.png"}
                                        alt="avatar"
                                        width={130}
                                        height={130}
                                        className="rounded-full w-[50vw] md:w-[150px]"
                                    />
                                </div>
                                <div className="text-m">
                                    <div className={"text-left mb-3 text-s text-[#E79730] leading-[0.5]"}>
                                        Co-Founder
                                    </div>
                                    <p className="text-left">
                                        This platform was created to
                                        improve and enhance the educational experience for both students and faculty. By
                                        providing easy access to essential resources such as schedules, articles, campus
                                        maps, and more, this portal aims to support academic growth, streamline
                                        communication, and foster a collaborative learning environment. I built this
                                        site with the goal of helping everyone in our community thrive and succeed in
                                        their academic journey. Visit the contact page for feedback or assistance!
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

export default Index;
