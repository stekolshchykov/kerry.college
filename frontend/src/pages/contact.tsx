import PageLayout from "@/layout/page-layout";
import {UserI} from "@/type";
import ContactForm from "@/ui/contact-form";
import PageInfoUi from "@/ui/page-info-ui";
import axiosApiInstance from "@/util/axios-api-instance";
import React, {useEffect, useState} from "react";

const Contact: React.FC = () => {
    const [users, setUsers] = useState<UserI[]>([]);
    const fallbackImage = "/avatar/admin.png"; // Path to fallback image

    const getMembers = async (): Promise<void> => {
        try {
            // const jwt = localStorage.getItem("jwt"); // Retrieve JWT token from local storage or any other secure place
            const response = await axiosApiInstance().post("/", {
                path: "users",
                method: "GET",
                params: {populate: "*"},
            }).catch((error) => {
                console.error("Error fetching users:", error);
            });
            const users = response?.data as UserI[] || [];
            setUsers(users);
        } catch (error: any) {
            console.error("Error fetching users:", error);
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
                            On this page, you can send us a message and learn more about our team.
                        </div>
                    }
                />
            </PageLayout>

            <PageLayout isContainer={true} className="mt-[0px] mb-[0px]">
                <div className="col">
                    <ContactForm/>
                </div>
            </PageLayout>

            <PageLayout isContainer={true} className="mt-[50px] mb-[50px]">
                <div className="col">
                    <div className={"text-l mb-3 font-b"}>Our team:</div>
                    <div className={"file flex-initial"}>
                        <div className={"flex "}>
                            {/*<ContactForm/>*/}
                        </div>
                        <div className={"flex "}>
                            <ul className="flex gap-3">
                                {users.map((user) => (
                                    <li key={user.id} className="flex flex-col gap-1">
                                        <img
                                            src={getProxyImageUrl(user.avatar ? user.avatar[0]?.url : fallbackImage)}
                                            alt="avatar"
                                            width={180}
                                            height={180}
                                            className="rounded"
                                            onError={(e) => {
                                                const target = e.target as HTMLImageElement;
                                                target.src = fallbackImage;
                                            }}
                                        />
                                        <div className="text-m font-b leading-1">{user.username}</div>
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
                </div>
            </PageLayout>
        </>
    );
};

export default Contact;
