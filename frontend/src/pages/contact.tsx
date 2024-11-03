import PageLayout from "@/layout/page-layout";
import PageInfoUi from "@/ui/page-info-ui";
import React from "react";

const Contact = () => {

    return <>

        <PageLayout isContainer={true} className={"bg-mina text-white"}>
            <PageInfoUi
                title={"Contact"}
                subTitle={
                    <div>
                        View the staff list, send an email, or become a website volunteer.
                    </div>
                }/>
        </PageLayout>


    </>

}

export default Contact;
