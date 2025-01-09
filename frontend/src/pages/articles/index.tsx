import {dataArticles} from "@/data";
import PageLayout from "@/layout/page-layout";
import PageInfoUi from "@/ui/page-info-ui";
import Head from 'next/head';
import React from "react";

const Index = () => {
    return (
        <>
            <Head>
                <meta name="description"
                      content="Explore informative articles and resources from Kerry College. Topics include education, productivity, and student life."/>
                <meta name="keywords"
                      content="Kerry College articles, student resources, education, productivity, student life"/>
                <meta property="og:title" content="Kerry College - Articles"/>
                <meta property="og:description"
                      content="Explore informative articles and resources from Kerry College. Topics include education, productivity, and student life."/>
                <meta property="og:url" content="https://www.kerry.college/articles"/>
                <meta property="og:type" content="website"/>
                <meta name="robots" content="index, follow"/>
            </Head>

            <PageLayout isContainer={true} className="bg-mina text-white">
                <PageInfoUi
                    title="Articles"
                    subTitle={
                        <div>
                            On this page, you will find articles written by our students. Explore their insights,
                            research,
                            and experiences across a wide range of topics.
                        </div>
                    }
                />
            </PageLayout>
            <PageLayout isContainer={true} className={"my-16"}>
                <div className="col">
                    {dataArticles.map((article, index) => {
                        return (
                            <div key={index} className={""}>
                                <div className={"text-xl mb-0 font-b"}>{article.title}</div>
                                <div className={"text-s mb-3"}>{article.author}</div>
                                <div className={"mb-3"}>{article.description}</div>
                                <a className={"text-m text-accent"} href={`/articles/${article.alias}`}>
                                    Start Reading
                                </a>
                                {index < dataArticles.length - 1 && <hr className="border-t border-gray-300 my-10"/>}
                            </div>
                        );
                    })}
                </div>
            </PageLayout>
        </>
    );
};

export default Index;
