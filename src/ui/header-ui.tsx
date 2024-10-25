import Link from "next/link";
import {useRouter} from "next/router";
import {useState} from "react";
import {RxHamburgerMenu} from "react-icons/rx";

const HeaderUi = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const router = useRouter();
    const path = router.pathname;

    const links = [
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
    ];

    return (
        <div>
            <div className="container-full max-w-[100vw] max-auto overflow-hidden">
                <div className="row overflow-hidden max-w-[100vw]">
                    <div className="col">
                        <div className="container max-w-[1200px]">
                            <div className="row">
                                <div className="col py-[50px] px-[25px]">
                                    <div className="flex justify-between items-center">
                                        <img className="w-[200px]" src="/logo.png" alt="Logo"/>
                                        <ul className="gap-4 hidden lg:flex">
                                            {links.map((l, k) => (
                                                <li key={k}
                                                    className={`text-m ${l.isActive ? "text-accent" : ""} hover:text-accent transition cursor-pointer ${l.isComingSoon && "opacity-40"}`}>
                                                    <Link href={l.link}>
                                                        {l.title}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                        <RxHamburgerMenu
                                            size={30}
                                            className={`lg:hidden flex transition cursor-pointer ${isMenuOpen ? "rotate-90" : ""}`}
                                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Мобильное меню */}
            <div
                className={`fixed top-0 right-0 h-full w-3/4 bg-background transition-transform transform ${isMenuOpen ? "translate-x-0" : "translate-x-full"} z-50`}>
                <div className={"pl-8 pt-5 pb-4 bg-background border-b"}>
                    <img className="w-[200px]" src="/logo.png" alt="Logo"/>
                </div>
                <div className="flex flex-col items-start pt-4 pl-8 space-y-2">
                    {links.map((l, k) => (
                        <Link href={l.link} key={k} onClick={() => setIsMenuOpen(false)}>
                            <span
                                className={`text-m ${l.isActive ? "text-accent" : ""} hover:text-accent transition cursor-pointer ${l.isComingSoon && "opacity-40"}`}>
                                {l.title}
                            </span>
                        </Link>
                    ))}
                </div>
            </div>

            {/* Затемненный фон при открытии меню */}
            {isMenuOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity"
                    onClick={() => setIsMenuOpen(false)}
                ></div>
            )}
        </div>
    );
};

export default HeaderUi;
