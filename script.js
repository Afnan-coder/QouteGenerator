

let qouteBox = document.querySelector(".qoute");
const quotes = [
    "Believe you can and you're halfway there. – Theodore Roosevelt",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. – Winston Churchill",
    "Don't watch the clock; do what it does. Keep going. – Sam Levenson",
    "The only way to do great work is to love what you do. – Steve Jobs",
    "Dream big and dare to fail. – Norman Vaughan",
    "Hardships often prepare ordinary people for an extraordinary destiny. – C.S. Lewis",
    "It always seems impossible until it's done. – Nelson Mandela",
    "Start where you are. Use what you have. Do what you can. – Arthur Ashe",
    "Push yourself, because no one else is going to do it for you.",
    "You don’t have to be great to start, but you have to start to be great. – Zig Ziglar"
];

function showQoute() {
    let qoute = quotes[Math.floor(Math.random() * quotes.length)];
    qouteBox.innerHTML = qoute;
}
document.querySelector("button").addEventListener("click", () => {
    showQoute()
})