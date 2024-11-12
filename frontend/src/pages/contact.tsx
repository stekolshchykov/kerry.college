import PageLayout from "@/layout/page-layout";
import {UserI} from "@/type";
import PageInfoUi from "@/ui/page-info-ui";
import axiosApiInstance from "@/util/axios-api-instance";
import React, {useEffect} from "react";

const Contact = () => {

    const [users, setUsers] = React.useState<UserI[]>([])

    const getMembers = async () => {
        const users: UserI[] = await axiosApiInstance()
            .get("/users?populate=*")
            .then(e => e.data as UserI[])
            .catch(e => {
                console.log("* * getMembers error", e)
                return []
            })
        setUsers(users)
    }

    useEffect(() => {
        getMembers()
    }, [])


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
        <PageLayout isContainer={true} className={" mt-[50px] mb-[50px]"}>
            <div className="col">
                <div className={"flex max-md:flex-col max-md:gap-3 gap-5"}>
                    <ul className={"flex gap-3"}>
                        {users.map((e) => <li key={e.id}>
                            <img src={e.avatar ? e.avatar[0]?.url : ""} alt="avatar" className={"w-[180px]"}/>
                            {e.name} {e.lastName}
                            {e.isVolunteer && <span>Volunteer</span>}
                            {e.isAuthor && <span>Author</span>}
                            {e.isTeacher && <span>Teacher</span>}
                            {e.isStudent && <span>Student</span>}
                        </li>)}
                    </ul>
                </div>
            </div>
        </PageLayout>

    </>

}

export default Contact;
