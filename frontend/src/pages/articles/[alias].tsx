import {dataArticles} from "@/data";
import PageLayout from "@/layout/page-layout";
import {useRouter} from "next/router";
import React from "react";

const Index = () => {

    const router = useRouter()
    const {alias} = router.query

    const article = dataArticles.find((article) => article.alias === alias)

    if (!article)
        return <>
            <PageLayout isContainer={true} className={" mt-[50px] mb-[50px]"}>
                <div className="col">
                    <div>Sorry, the article you are looking for could not be found.</div>
                    <div>It seems that the article you&#39;re trying to access is either unavailable or doesn&#39;t
                        exist. Please
                        check the URL or go back to the homepage to explore other content.
                    </div>
                </div>
            </PageLayout>
        </>

    else
        return <>
            <PageLayout isContainer={true} className={" mt-[50px] mb-[50px]"}>
                <div className="col">
                    <div className={"text-xl mb-0 font-b"}>{article?.title}</div>
                    <div className={"text-s"}>{article?.author}</div>
                    <div className={"mb-3"} dangerouslySetInnerHTML={{
                        __html: article?.text.replace(/\n/g, "<br/>"), // заменяем символы новой строки на <br/>
                    }}/>
                </div>
            </PageLayout>
        </>

}

export default Index;
