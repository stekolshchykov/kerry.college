interface PropsI {
    children?: React.ReactNode
    className?: string,
    isContainer?: boolean
}

export default function PageLayout(props: PropsI) {
    return (
        <>
            {props.children &&
                <div
                    className={`
                        max-w-[100vw]
                        ${props.className && props.className}
                    `}>
                    {props.isContainer && <div className={"container max-w-[1200px]"}>
                        <div className="row">
                            {props.children}
                        </div>
                    </div>}
                    {!props.isContainer && props.children && <>{props.children}</>}
                </div>
            }
        </>
    );
}
