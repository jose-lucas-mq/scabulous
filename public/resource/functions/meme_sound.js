const audios = [
    "aaa",
    "dab-distortion",
    "deja-vu",
    "french-meme-song",
    "klonk",
    "ladrao",
    "lightskin",
    "loud",
    "meme-okay-lets-go",
    "spiderman-meme-song",
    "vine-boom",
    "skrillex"
]

const img_meme = document.querySelectorAll(".meme_sound");

img_meme.forEach(button => {
  button.addEventListener("click", () => {
    const randomMemePath = audios[Math.floor(Math.random() * audios.length)];
    const audio = new Audio(`https://resources-telasvity.s3.amazonaws.com/mp3/${randomMemePath}.mp3`);
    audio.play();
  });
});