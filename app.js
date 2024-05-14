const twitter = document.querySelector(".twitter");
console.log(twitter);
const twitterCyan = document.querySelector(".twitter-cyan");
console.log(twitterCyan);
const twitterContainer = document.querySelector(".twitter-container");

twitterContainer.addEventListener("mouseover", () => {
  twitter.classList.add("hide");
  twitterCyan.classList.add("show");
});
twitterContainer.addEventListener("mouseout", () => {
  twitter.classList.remove("hide");
  twitterCyan.classList.remove("show");
});
