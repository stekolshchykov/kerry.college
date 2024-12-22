import quotes from "@/data/quote";
import {Great_Vibes} from "next/font/google";
import Image from "next/image"; // Импортируем Image
import {useEffect, useState} from "react";

const greatVibes = Great_Vibes({
    subsets: ["latin"], // Укажите необходимые подмножества
    weight: "400", // Проверьте, что используемый вес поддерживается
});

const FooterUi = () => {
    // State для хранения цитаты и автора
    const [quoteText, setQuoteText] = useState<string>("");
    const [quoteAuthor, setQuoteAuthor] = useState<string>("");

    // Получаем случайную цитату при монтировании компонента
    useEffect(() => {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        const quote = quotes[randomIndex];
        setQuoteText(quote?.text || "No quote available");
        setQuoteAuthor(quote?.from || "Unknown author");
    }, []); // Пустой массив зависимостей, чтобы код выполнялся только один раз

    return (
        <div className="container-full border-t-[1px] border-mina max-w-[100vw] overflow-hidden">
            <div className="row">
                <div className="col py-24">
                    <div className="container max-w-[1200px]">
                        <div className="row">
                            <div className="col">
                                <div className="flex justify-between align-items-center gap-5">
                                    <Image
                                        className="w-[200px] md:flex hidden"
                                        src="/logo.png"
                                        alt="Logo"
                                        width={200}
                                        height={50} // Укажите точные размеры логотипа
                                    />
                                    <div className="w-full">
                                        {quoteText && (
                                            <>
                                                <div
                                                    className={`text-l font-light leading-[0.9] ${greatVibes.className}`}
                                                >
                                                    {quoteText}
                                                </div>
                                                <div className="text-s font-semibold">{quoteAuthor}</div>
                                            </>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FooterUi;
