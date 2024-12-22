import {dataArticles} from "@/data";
import PageLayout from "@/layout/page-layout";
import PageInfoUi from "@/ui/page-info-ui";
import React from "react";

const Index = () => {
    return (
        <>
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
            <PageLayout isContainer={true} className={"mt-[50px] mb-[50px]"}>
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