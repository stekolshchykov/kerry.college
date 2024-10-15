// @types/inspirational-quotes.d.ts
declare module 'inspirational-quotes' {
    interface Quote {
        text: string;
        author: string;
    }

    function getQuote(): Quote;

    function getRandomQuote(): string;

    export {getQuote, getRandomQuote};
}
