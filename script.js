window.onload = () => {
const clickInButton = (color) => {
    let header = document.getElementById('header');
    header.style.backgroundColor = color;};

let buttonDark = document.getElementById("darkMode");

buttonDark.addEventListener(click, clickInButton);
//     header.style.color = 'white';
//     withMe.style.backgroundColor = 'black';
//     withMe.style.color = 'white';
//     skills.style.backgroundColor = 'black';
//     skills.style.color = 'white';
//     footer.style.backgroundColor = 'black';
//     footer.style.color = 'white';
 clickInButton('black');
};
