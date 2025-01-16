const quotes = [
  "The only way to do great work is to love what you do.",
  "Life is what happens when you're busy making other plans.",
  "The future belongs to those who believe in the beauty of their dreams.",
  "It does not matter how slowly you go as long as you do not stop.",
  "In the end, it's not the years in your life that count. It's the life in your years.",
  "The purpose of our lives is to be happy.",
  "Get busy living or get busy dying.",
  "You only live once, but if you do it right, once is enough.",
  "Many of life's failures are people who did not realize how close they were to success when they gave up.",
  "If you want to live a happy life, tie it to a goal, not to people or things.",
  "Don't allow negative words, comments and experience to haunt and stymie your progress. None of these things can change your potential on the inside",
  "Other people's opinions do not determine your potential, What they said or what they think about you does not change what God has placed on the inside",
  "Out of your greatest rejection comes your greatest direction",
  "What happened in your past is not nearly as important as what is in your future",
  "Your destiny is not tied to people who walk away from you",
  "You cannot hang out with negative people and expect to live a positive life",
];

const usedIndexes = new Set();
const quoteElement = document.getElementById("quote");
const generateQuote = () => {
  //   quoteElement.innerHTML = `${quotes}`;
  const randomIndex = Math.floor(Math.random() * quotes.length);
};
