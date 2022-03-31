const quotes = [
    {
        quote: "Much learning does not teach understanding.",
        author: "Heraclitus"
    },
    {
        quote: "Love has taught us that love does not consist in gazing at each other but in looking outward together in the same direction.",
        author: "Antoine de Saint-Exupery"
    },
    {
        quote: "Travel is only glamorous in retrospect.",
        author: "Paul Theroux"
    },
    {
        quote: "In the absence of clearly-defined goals, we become strangely loyal to performing daily trivia until ultimately we become enslaved by it.",
        author: "Robert Heinlein"
    },
    {
        quote: "In prosperity our friends know us; in adversity we know our friends.",
        author: "John Churton Collins"
    },
    {
        quote: "Avoiding danger is no safer in the long run than outright exposure. The fearful are caught as often as the bold.",
        author: "Helen Keller"
    },
    {
        quote: "With regard to excellence, it is not enough to know, but we must try to have and use it.",
        author: "Aristotle"
    },
    {
        quote: "Whoever ceases to be a student has never been a student.",
        author: "George Iles"
    },
    {
        quote: "Life's greatest happiness is to be convinced we are loved.",
        author: "Victor Hugo"
    },
    {
        quote: "It's not that I'm so smart , it's just that I stay with problems longer.",
        author: "Albert Einstein"
    }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;

