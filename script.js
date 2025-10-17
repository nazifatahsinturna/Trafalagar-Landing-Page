const ham = document.querySelector(".ham");
const topNav = document.querySelector(".top-nav");
const cross = document.querySelector(".cross");
ham.addEventListener('click', () => {
    topNav.classList.toggle('active');
});

cross.addEventListener('click', () => {
    topNav.classList.toggle('active');
});
