import Quote from 'inspirational-quotes';
import {useEffect, useState} from 'react';

const FooterUi = () => {
    // State to store the quote and author
    const [quoteText, setQuoteText] = useState<string>("");
    const [quoteAuthor, setQuoteAuthor] = useState<string>("");

    // Fetch the quote only on the client side
    useEffect(() => {
        const quote = Quote.getQuote();
        setQuoteText(quote?.text);
        setQuoteAuthor(quote?.author);
    }, []); // Empty dependency array to run only once when the component mounts

    return (
        <div className="container-full border-t-[1px] border-mina max-w-[100vw] overflow-hidden">
            <div className="row">
                <div className="col py-[50px]">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className={"flex justify-between align-items-center gap-5"}>
                                    <img className={"w-[200px]  md:flex hidden"} src={"/logo.png"}
                                         alt={"Logo"}/>
                                    <div className={"w-full"}>
                                        {quoteText && (
                                            <>
                                                <div className={"text-l italic font-light leading-[0.9]"}>‟{quoteText}”
                                                </div>
                                                <div className={"text-s"}>{quoteAuthor}</div>
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
