const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

let clickCount = 0;

function updateImage(name) {
    // Adding ?v= plus a random number forces the browser to refresh the image
    gif.src = name.toLowerCase() + "?v=" + Math.random();
}

function showSuccess() {
    question.innerHTML = "Hehehe!! I knew It";
    updateImage("love.gif");
    // Removed the display = "none" lines so buttons stay
    yesBtn.innerHTML = "Yay!";
    noBtn.innerHTML = "Restart?";
    
    // Optional: Make the "Restart" button reload the page
    noBtn.onclick = () => { location.reload(); };
}

yesBtn.addEventListener("click", () => {
    if (clickCount >= 4) {
        // If they click the moving "No" button (which is yesBtn)
        showSuccess();
    } else {
        showSuccess();
    }
});

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
        
        yesBtn.style.position = "fixed";
        yesBtn.addEventListener("mouseover", () => {
            const x = Math.random() * (window.innerWidth - yesBtn.offsetWidth);
            const y = Math.random() * (window.innerHeight - yesBtn.offsetHeight);
            yesBtn.style.left = x + "px";
            yesBtn.style.top = y + "px";
        });

        // The "Yes" button (noBtn) now finishes the project
        noBtn.onclick = showSuccess;
    }
});
