const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

let clickCount = 0;

// Function to handle the final "Success" state
function showSuccess() {
    question.innerHTML = "Hehehe!! I knew It";
    gif.src = "love.gif";
    yesBtn.style.display = "none";
    noBtn.style.display = "none";
}

// Function to make the button move (for the final stage)
function moveButton() {
    const margin = 50;
    const maxX = window.innerWidth - yesBtn.offsetWidth - margin;
    const maxY = window.innerHeight - yesBtn.offsetHeight - margin;

    const randomX = Math.max(margin, Math.floor(Math.random() * maxX));
    const randomY = Math.max(margin, Math.floor(Math.random() * maxY));

    yesBtn.style.position = "fixed"; // Changed to fixed to ensure it moves on screen
    yesBtn.style.left = randomX + "px";
    yesBtn.style.top = randomY + "px";
}

yesBtn.addEventListener("click", () => {
    // If the button is currently the "No" button (at clickCount 4)
    if (clickCount >= 4) {
        // Do nothing or let it move. If they manage to click it, they win!
        showSuccess();
    } else {
        showSuccess();
    }
});

noBtn.addEventListener("click", () => {
    clickCount++;

    if (clickCount === 1) {
        question.innerHTML = "I'm SORRY";
        gif.src = "sorry.png";
        gif.style.width = "300px"; // Adjusting size as per your previous code
        noBtn.innerHTML = "No";
        yesBtn.innerHTML = "Accha thik hai";
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
    else if (clickCount === 4) {
        question.innerHTML = "Manja nah! kitna bhav khayegi";
        gif.src = "run.gif";
        yesBtn.innerHTML = "No"; // Swapping roles
        noBtn.innerHTML = "Yes";
        
        // Start the running away effect on the "No" button
        yesBtn.addEventListener("mouseover", moveButton);
    } 
    else if (clickCount >= 5) {
        // This is now the "Yes" button
        showSuccess();
    }
});
