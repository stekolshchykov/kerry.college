import {dataMembers} from "@/data";
import PageLayout from "@/layout/page-layout";
import ContactForm from "@/ui/contact-form";
import PageInfoUi from "@/ui/page-info-ui";
import React from "react";

const Contact: React.FC = () => {
    // const [users, setUsers] = useState<UserI[]>([]);
    const fallbackImage = "/avatar/admin.png"; // Path to fallback image
    //
    // const getMembers = async (): Promise<void> => {
    //     try {
    //         // const jwt = localStorage.getItem("jwt"); // Retrieve JWT token from local storage or any other secure place
    //         const response = await axiosApiInstance().post("/", {
    //             path: "users",
    //             method: "GET",
    //             params: {populate: "*"},
    //         }).catch((error) => {
    //             console.error("Error fetching users:", error);
    //         });
    //         const users = response?.data as UserI[] || [];
    //         setUsers(users);
    //     } catch (error: any) {
    //         console.error("Error fetching users:", error);
    //         setUsers([]);
    //     }
    // };
    //
    // useEffect(() => {
    //     getMembers();
    // }, []);

    // const getProxyImageUrl = (url: string): string => {
    //     return `/api/image-proxy?url=${encodeURIComponent(url)}`;
    // };

    console.log("+++dataMembers", dataMembers)


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

            <PageLayout isContainer={true} className="mt-5 mb-[0px]">
                <div className="col-md-8">
                    <div className={"text-l mb-3 font-b"}>Get in touch with us:</div>
                    <ContactForm/>
                </div>
                <div className="col-md-4 mt-[50px] md:mt-0">
                    <div className={"text-l mb-3 font-b"}>Student-Driven Project</div>
                    <div>
                        This website is proudly designed and developed by a team of college students and dedicated
                        volunteers as part of an exciting educational initiative aimed at gaining real-world experience
                        and enhancing our skills. We are committed to continuously improving the platform to provide you
                        with accurate and valuable information. However, as this is a learning-driven project supported
                        by limited resources, there might occasionally be delays in processing your inquiries or
                        updating certain sections of the site. We deeply appreciate your understanding, patience, and
                        encouragement as we grow and strive to create a resource that benefits everyone. Thank you for
                        supporting our journey!
                    </div>
                </div>
            </PageLayout>

            <PageLayout isContainer={true} className="mt-[50px] mb-[50px]">
                <div className="col">
                    <div className={"text-l mb-3 font-b"}>Our team:</div>
                    <div className={"file flex-initial"}>
                        <div className={"flex "}>
                            <ul className="flex gap-3 p-0">
                                {dataMembers.map((member) => (
                                    <li key={member.name} className="flex flex-col gap-1">
                                        <img
                                            // src={getProxyImageUrl(user.avatar ? user.avatar[0]?.url : fallbackImage)}
                                            src={member.img || fallbackImage}
                                            alt="avatar"
                                            width={180}
                                            height={180}
                                            className="rounded"
                                            onError={(e) => {
                                                const target = e.target as HTMLImageElement;
                                                target.src = fallbackImage;
                                            }}
                                        />
                                        <div className="text-m font-b leading-1">{member.name}</div>
                                        <div className="text-s leading-[0.2]">
                                            {member.job}
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
