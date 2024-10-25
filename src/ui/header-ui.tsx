import Link from "next/link";
import {useRouter} from "next/router";
import {RxHamburgerMenu} from "react-icons/rx";

const HeaderUi = () => {

    const router = useRouter()
    const path = router.pathname

    const links: {
        title: string
        link: string
        isActive: boolean
        isComingSoon: boolean
    }[] = [
        {title: "Home", link: "/home", isActive: path === "/home", isComingSoon: true},
        {title: "News", link: "/news", isActive: path === "/news", isComingSoon: true},
        {title: "Schedule", link: "/", isActive: path === "/", isComingSoon: false},
        {title: "Holiday", link: "/holiday", isActive: path === "/holiday", isComingSoon: true},
        {title: "Map", link: "/map", isActive: path === "/map", isComingSoon: false},
        {title: "Staff", link: "/staff", isActive: path === "/staff", isComingSoon: true},
        {title: "Ideas", link: "/ideas", isActive: path === "/ideas", isComingSoon: true},
        {title: "Articles", link: "/articles", isActive: path === "/articles", isComingSoon: true},
        {title: "Forum", link: "/forum", isActive: path === "/forum", isComingSoon: true},
        {title: "Contact", link: "/contact", isActive: path === "/contact", isComingSoon: true},
    ]

    return <div>
        <div className="container-full max-w-[100vw] max-auto overflow-hidden">
            <div className="row overflow-hidden max-w-[100vw]">
                <div className="col ">
                    <div className="container max-w-[1200px]">
                        <div className="row">
                            <div className="col py-[50px] px-[25px]">
                                <div className={"flex justify-between align-items-center"}>
                                    <img className={"w-[200px]"} src={"/logo.png"} alt={"Logo"}/>
                                    <ul className={"gap-4 hidden lg:flex"}>
                                        {links.map((l, k) =>
                                            <li key={k}
                                                className={`text-m ${l.isActive ? "text-accent" : ""} hover:text-accent transition cursor-pointer ${l.isComingSoon && "opacity-40"}`}>
                                                <Link href={l.link}>
                                                    {l.title}
                                                </Link>
                                            </li>)}
                                    </ul>
                                    <RxHamburgerMenu size={30}
                                                     className={"lg:hidden flex hover:text-accent transition cursor-pointer"}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

}

export default HeaderUi
