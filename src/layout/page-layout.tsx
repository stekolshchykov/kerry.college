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
                        ${props.className && props.className}
                        bg-mina text-white
                    `}>
                    { props.isContainer && <div className={"container"}>
                        <div className="row">
                            {props.children}
                        </div>
                    </div> }
                    { !props.isContainer && props.children && <>{props.children}</> }
                </div>
            }
        </>
    );
}
