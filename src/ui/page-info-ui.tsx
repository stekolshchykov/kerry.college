interface PropsI {
    title: string,
    subTitle?: string,
    color?: string
}

const PageInfoUi = (props: PropsI) => {

    return <div className={"py-[50px] px-[25px]"}>
        <div className={"text-xxl"}>{props.title}</div>
        {props.subTitle && <div className={"text-m"}>{props.subTitle}</div>}
    </div>

}

export default PageInfoUi
