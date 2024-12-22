import {dataArticles} from "@/data";
import PageLayout from "@/layout/page-layout";
import PageInfoUi from "@/ui/page-info-ui";
import Head from "next/head";
import {useRouter} from "next/router";
import React from "react";

const Info = () => {

    return <PageLayout isContainer={true} className="bg-mina text-white">
        <PageInfoUi
            title="Article by Our Author"
            subTitle={
                <div>
                    On this page, you can read an insightful article written by one of our authors. Explore
                    their perspective on the topic and gain valuable knowledge.
                </div>
            }
        />
    </PageLayout>

}
const Index = () => {

    const router = useRouter()
    const {alias} = router.query

    const article = dataArticles.find((article) => article.alias === alias)

    if (!article)
        return <>
            <Info/>
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

            <Head>
                <title>{article?.title} - Kerry College</title>
                <meta name="description"
                      content={article?.description}/>
                <meta name="keywords"
                      content={`Kerry College, article, academic success, study tips, resources, ${article?.title}`}/>
                <meta name="author" content="Vitalii Stekolshchykov"/>
            </Head>


            <Info/>

            <PageLayout isContainer={true} className={" my-16"}>
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
