const ham = document.querySelector(".ham");
const topNav = document.querySelector(".top-nav");
const cross = document.querySelector(".cross");
ham.addEventListener('click', () => {
    topNav.classList.toggle('active');
});

cross.addEventListener('click', () => {
    topNav.classList.toggle('active');
});
// const heading = document.querySelector(".virtual h1");
// function changeColor () {
//     const blueColor = '#0000' + Math.floor(Math.random() * 256).toString(16).padStart(2, '0'); //generating color code
//     heading.style.color = blueColor;
    
// }

// //for automatic change
// setInterval(changeColor, 500);