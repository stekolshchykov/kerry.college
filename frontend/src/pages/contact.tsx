import PageLayout from "@/layout/page-layout";
import {UserI} from "@/type";
import PageInfoUi from "@/ui/page-info-ui";
import axiosApiInstance from "@/util/axios-api-instance";
import React, {useEffect, useState} from "react";

const Contact: React.FC = () => {
    const [users, setUsers] = useState<UserI[]>([]);

    const getMembers = async (): Promise<void> => {
        try {
            const response = await axiosApiInstance().get("/users?populate=*");
            const users = response.data as UserI[];
            setUsers(users);
        } catch (error) {
            console.error("Ошибка при получении пользователей:", error);
            setUsers([]);
        }
    };

    useEffect(() => {
        getMembers();
    }, []);

    const getProxyImageUrl = (url: string): string => {
        return `/api/image-proxy?url=${encodeURIComponent(url)}`;
    };

    return (
        <>
            <PageLayout isContainer={true} className="bg-mina text-white">
                <PageInfoUi
                    title="Contact"
                    subTitle={
                        <div>
                            View the staff list, send an email, or become a website volunteer.
                        </div>
                    }
                />
            </PageLayout>
            <PageLayout isContainer={true} className="mt-[50px] mb-[50px]">
                <div className="col">
                    <div className={"flex max-md:flex-col max-md:gap-3 gap-5"}>
                        <ul className="flex gap-3">
                            {users.map((user) => (
                                <li key={user.id} className="flex flex-col gap-1">
                                    <img
                                        src={getProxyImageUrl(user.avatar ? user.avatar[0]?.url : "/default-avatar.png")}
                                        alt="avatar"
                                        width={180}
                                        height={180}
                                        className="rounded"
                                    />
                                    <div className="text-m font-b leading-1">
                                        {user.name} {user.lastName}
                                    </div>
                                    <div className="text-s leading-[0.2]">
                                        {[
                                            user.isVolunteer && "Volunteer",
                                            user.isAuthor && "Author",
                                            user.isTeacher && "Teacher",
                                            user.isStudent && "Student",
                                        ]
                                            .filter(Boolean)
                                            .join(", ")}
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </PageLayout>
        </>
    );
};

export default Contact;
