const jokes = [
  "Why don’t skeletons fight each other? They don’t have the guts.",
  "What’s orange and sounds like a parrot? A carrot.",
  "Why don’t eggs tell jokes? They might crack up.",
  "I told my wife she was drawing her eyebrows too high. She looked surprised.",
  "Why don’t oysters donate to charity? Because they are shellfish.",
  "I told my computer I needed a break, and now it won’t stop sending me ads for vacation resorts.",
  "What do you get when you cross a snowman and a vampire? Frostbite.",
  "I used to play piano by ear, but now I use my hands.",
  "Why did the bicycle fall over? Because it was two-tired.",
  "I’m reading a book on anti-gravity. It’s impossible to put down.",
  "Why can’t you hear a pterodactyl go to the bathroom? Because the ‘P’ is silent.",
  "What did one ocean say to the other ocean? Nothing, they just waved.",
  "Why did the scarecrow win an award? Because he was outstanding in his field.",
  "I would tell you a joke about a pencil, but it’s pointless.",
  "What do you call fake spaghetti? An impasta.",
  "I’m on a whiskey diet. I’ve lost three days already.",
  "Why did the tomato turn red? Because it saw the salad dressing.",
  "I used to be a baker, but I couldn’t make enough dough.",
  "Why was the math book sad? Because it had too many problems.",
  "I told my computer I wanted a break, and now it won’t stop sending me ads for vacation resorts."
];

function generateJoke() {
  const randomIndex = Math.floor(Math.random() * jokes.length);
  document.getElementById("joke").textContent = jokes[randomIndex];
}
