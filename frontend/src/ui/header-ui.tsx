import Image from "next/image";
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
        {title: "Holiday", link: "/holiday", isActive: path === "/holiday", isComingSoon: false},
        {title: "Map", link: "/map", isActive: path === "/map", isComingSoon: false},
        {title: "Staff", link: "/staff", isActive: path === "/staff", isComingSoon: false},
        {title: "Ideas", link: "/ideas", isActive: path === "/ideas", isComingSoon: true},
        {title: "Articles", link: "/articles", isActive: path === "/articles", isComingSoon: true},
        {title: "Forum", link: "/forum", isActive: path === "/forum", isComingSoon: true},
        {title: "Contact", link: "/contact", isActive: path === "/contact", isComingSoon: true},
    ];

    return (
        <header>
            <div className="container mx-auto px-4 py-6">
                <div className="flex justify-between items-center">
                    {/* Логотип */}
                    <Link href="/">
                        <Image src="/logo.png" alt="Logo" width={200} height={60}/>
                    </Link>

                    {/* Навигация для десктопа */}
                    <nav className="hidden lg:flex gap-4">
                        {links.map((l, k) => (
                            <Link key={k} href={l.link} className="no-underline">
                <span
                    className={`text-base cursor-pointer transition-opacity ${
                        l.isActive ? "text-accent" : "text-black"
                    } ${l.isComingSoon ? "opacity-40" : "hover:text-accent"}`}
                >
                  {l.title}
                </span>
                            </Link>
                        ))}
                    </nav>

                    {/* Иконка гамбургера */}
                    <RxHamburgerMenu
                        size={30}
                        className="lg:hidden cursor-pointer"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    />
                </div>
            </div>

            {/* Мобильное меню */}
            <div
                className={`fixed top-0 right-0 h-full w-3/4 bg-white shadow-lg transition-transform transform ${
                    isMenuOpen ? "translate-x-0" : "translate-x-full"
                } z-50`}
            >
                <div className="p-6 border-b">
                    <Image src="/logo.png" alt="Logo" width={150} height={50}/>
                </div>
                <nav className="flex flex-col p-6 space-y-4">
                    {links.map((l, k) => (
                        <Link key={k} href={l.link} className="no-underline" onClick={() => setIsMenuOpen(false)}>
              <span
                  className={`text-lg cursor-pointer transition-opacity ${
                      l.isActive ? "text-accent" : "text-black"
                  } ${l.isComingSoon ? "opacity-40" : "hover:text-accent"}`}
              >
                {l.title}
              </span>
                        </Link>
                    ))}
                </nav>
            </div>

            {/* Фон-затемнение при открытом меню */}
            {isMenuOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-40"
                    onClick={() => setIsMenuOpen(false)}
                ></div>
            )}
        </header>
    );
};

export default HeaderUi;
