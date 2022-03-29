const love = document.querySelector(".love");
const times = document.querySelector("#times");

love.addEventListener("dblclick", (e) =>{
  creatHeart(e)
})

timesClick = 0;

const creatHeart = (e) => {
  const heart = document.createElement("i");
  heart.classList.add("fas");
  heart.classList.add("fa-heart");

  const x = e.clientX;
  const y = e.clientY;
  
  const offsetLeft = e.target.offsetLeft;
  const offsetTop = e.target.offsetTop;

  const insideX = x - offsetLeft;
  const insideY = y - offsetTop;

  heart.style.left = `${insideX}px`;
  heart.style.top = `${insideY}px`;

  love.appendChild(heart);

  times.innerHTML = ++timesClick;

  setTimeout(() => heart.remove(), 1000);
}