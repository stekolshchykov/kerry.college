import PageLayout from "@/layout/page-layout";
import React from "react";

const ComingSoon = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <div className="flex-grow bg-mina flex items-end justify-center">
                <PageLayout isContainer={true} className="w-full  mt-[-1.8vw]">
                    <div className="text-background text-[15vw] md:text-[8vw] leading-none pb-0 mb-0">
                        Coming
                    </div>
                </PageLayout>
            </div>
            <div className="flex-grow flex items-start justify-center mt-[-1px]">
                <PageLayout isContainer={true} className="w-full mt-[-1.8vw]">
                    <div className="text-mina text-[15vw] md:text-[8vw] leading-none pt-0 mt-0">
                        Soooon
                        <span
                            className="inline-block"
                            style={{
                                animation: "blink 1.5s infinite 0.25s",
                                opacity: 0,
                                animationTimingFunction: "ease-in-out",
                            }}
                        >
                            .
                        </span>
                        <span
                            className="inline-block"
                            style={{
                                animation: "blink 1.5s infinite 0.5s",
                                opacity: 0,
                                animationTimingFunction: "ease-in-out",
                            }}
                        >
                            .
                        </span>
                        <span
                            className="inline-block"
                            style={{
                                animation: "blink 1.5s infinite 0.75s",
                                opacity: 0,
                                animationTimingFunction: "ease-in-out",
                            }}
                        >
                            .
                        </span>
                    </div>
                </PageLayout>
            </div>
            <style jsx>{`
                @keyframes blink {
                    0%, 20% {
                        opacity: 0;
                    }
                    25%, 45% {
                        opacity: 1;
                    }
                }
            `}</style>
        </div>
    );
}

export default ComingSoon;
