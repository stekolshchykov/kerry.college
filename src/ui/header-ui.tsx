import Link from "next/link";
import {useRouter} from "next/router";
import {RxHamburgerMenu} from "react-icons/rx";

const HeaderUi = () => {

    const router = useRouter()
    const path = router.pathname


    const links:{
        title: string
        link: string
        isActive: boolean
    }[] = [
        {title: "Home", link: "/", isActive: path === "/home"},
        {title: "Schedule", link: "/", isActive: path === "/"},
        {title: "Campus map", link: "/campus", isActive: path === "/campus"},
        {title: "Staff", link: "/staff", isActive: path === "/staff"},
        {title: "News", link: "/news", isActive: path === "/news"},
        {title: "Ideas", link: "/ideas", isActive: path === "/ideas"},
    ]

    return <div>
        <div className="container-full">
            <div className="row">
                <div className="col">
                    <div className="container">
                        <div className="row">
                            <div className="col py-[50px]">
                                <div className={"flex justify-between align-items-center"}>
                                    <img className={"w-[200px]"} src={"/logo.png"} alt={"Logo"}/>
                                    <ul className={"gap-4 hidden lg:flex"}>
                                        {links.map((l,k) => <li key={k} className={`text-m ${l.isActive ? "text-accent" : ""} hover:text-accent transition cursor-pointer`}>
                                            <Link href={l.link} onClick={e => e.preventDefault()}>
                                                {l.title}
                                            </Link>
                                        </li>)}
                                    </ul>
                                    <RxHamburgerMenu size={30} className={"lg:hidden flex hover:text-accent transition cursor-pointer"} />
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
