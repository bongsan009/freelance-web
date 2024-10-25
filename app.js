const navListEl = document.querySelector(".header .flex .list");
const menuBtnEl = document.querySelector(".fa-bars");
const outlineEl = document.querySelector(".outline");
const dotEl = document.querySelector(".dot");

window.addEventListener("mousemove", (e) => {

    const posX = e.clientX;
    const posY = e.clientY;


    dotEl.style.top = `${posY}px`;
    dotEl.style.left = `${posX}px`;

    outlineEl.animate({
        left: `${posX}px`,
        top: `${posY}px`,
    }, {
        fill: "forwards",
        duration: 500,
    })

    dotEl.animate({
        left: `${posX}px`,
        top: `${posY}px`
    }, { duration: 100, fill: "forwards" })

})


menuBtnEl.addEventListener("click", () => {
    navListEl.classList.toggle("active");
})
