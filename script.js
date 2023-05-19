const gold_btn = document.getElementById("gold-button");
const black_btn = document.getElementById("black-button");
const white_btn = document.getElementById("white-button");

const gold_img = document.getElementById("gold");
const black_img = document.getElementById("black");
const white_img = document.getElementById("white");

gold_btn.addEventListener("click", function() {
    gold_img.classList.remove("hidden");
    black_img.classList.add("hidden");
    white_img.classList.add("hidden");
    document.documentElement.style.setProperty("--hover-color", "#D4AF37");
});

black_btn.addEventListener("click", function() {
    black_img.classList.remove("hidden");
    gold_img.classList.add("hidden");
    white_img.classList.add("hidden");
    document.documentElement.style.setProperty("--hover-color", "#777777");
});

white_btn.addEventListener("click", function() {
    white_img.classList.remove("hidden");
    black_img.classList.add("hidden");
    gold_img.classList.add("hidden");
    document.documentElement.style.setProperty("--hover-color", "#ededed");
});