const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

let clickCount = 0;

// This ensures the image resets properly every time
function updateImage(name) {
    // Force lowercase to match your GitHub file list
    const fileName = name.toLowerCase();
    gif.src = fileName;
}

function showSuccess() {
    question.innerHTML = "Hehehe!! I knew It";
    updateImage("love.gif");
    yesBtn.style.display = "none";
    noBtn.style.display = "none";
}

yesBtn.addEventListener("click", showSuccess);

noBtn.addEventListener("click", () => {
    clickCount++;

    if (clickCount === 1) {
        question.innerHTML = "I'm SORRY";
        updateImage("sorry.png"); 
        noBtn.innerHTML = "No";
        yesBtn.innerHTML = "Accha thik hai";
    } 
    else if (clickCount === 2) {
        question.innerHTML = "Soch lo acche se!";
        updateImage("download.gif");
        noBtn.innerHTML = "Nahi Sochna";
    } 
    else if (clickCount === 3) {
        question.innerHTML = "Ak baar aur soch lo";
        updateImage("sadlife.gif");
        noBtn.innerHTML = "Final no";
    } 
    else if (clickCount >= 4) {
        question.innerHTML = "Manja nah! kitna bhav khayegi";
        updateImage("run.gif");
        
        yesBtn.innerHTML = "No";
        noBtn.innerHTML = "Yes";
        
        // This makes the "No" button move
        yesBtn.addEventListener("mouseover", () => {
            const x = Math.random() * (window.innerWidth - yesBtn.offsetWidth);
            const y = Math.random() * (window.innerHeight - yesBtn.offsetHeight);
            yesBtn.style.position = "fixed"; 
            yesBtn.style.left = x + "px";
            yesBtn.style.top = y + "px";
        });

        // The "Yes" button now triggers the end
        noBtn.onclick = showSuccess;
    }
});
