const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

let clickCount = 0;

// Function for when she finally says yes
function handleYesClick() {
    question.innerHTML = "Hehehe!! I knew It";
    gif.src = "love.gif";
    yesBtn.style.display = "none";
    noBtn.style.display = "none";
}

yesBtn.addEventListener("click", handleYesClick);

noBtn.addEventListener("click", () => {
    clickCount++;

    if (clickCount === 1) {
        question.innerHTML = "I'm SORRY";
        gif.src = "sorry.png";
        yesBtn.innerHTML = "Accha thik hai";
        noBtn.innerHTML = "No";
    } 
    else if (clickCount === 2) {
        question.innerHTML = "Soch lo acche se!";
        gif.src = "download.gif";
        noBtn.innerHTML = "Nahi Sochna";
    } 
    else if (clickCount === 3) {
        question.innerHTML = "Ak baar aur soch lo";
        gif.src = "sadlife.gif";
        noBtn.innerHTML = "Final no";
        yesBtn.innerHTML = "Chalo maan gai";
    } 
    else if (clickCount >= 4) {
        question.innerHTML = "Manja nah! kitna bhav khayegi";
        gif.src = "run.gif";
        
        // Swapping button text to trick her
        yesBtn.innerHTML = "No";
        noBtn.innerHTML = "Yes";
        
        // Make the "No" button (which is now the yesBtn) move away
        yesBtn.addEventListener("mouseover", () => {
            const x = Math.random() * (window.innerWidth - yesBtn.offsetWidth);
            const y = Math.random() * (window.innerHeight - yesBtn.offsetHeight);
            yesBtn.style.position = "absolute";
            yesBtn.style.left = x + "px";
            yesBtn.style.top = y + "px";
        });
        
        // If she clicks the swapped "Yes" button (which is the noBtn)
        noBtn.addEventListener("click", handleYesClick);
    }
});
