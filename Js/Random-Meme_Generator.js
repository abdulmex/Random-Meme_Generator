const generateMemeBtn = document.querySelector(".meme-genarator .generate-meme-btn");
const memeImage = document.querySelector(".meme-generator img");
const memeAuthor = document.querySelector(".meme-generator .meme-author");

const generateMeme = () => {
    fetch("https://meme-api.com/gimme/wholesomememes")
     .then((response) => response.json()
     .then(data => {
            updateDetails(data.url, data.title, data.author)
        })
    );
}
generateMemeBtn.addEventListener("click", generateMeme);