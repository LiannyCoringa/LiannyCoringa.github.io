if (localStorage.getItem('darkMode') !== null) {
    header.style.backgroundColor = 'black';
    button.style.backgroundColor = 'black';
    withMe.style.backgroundColor = 'black';
    skills.style.backgroundColor = 'black';
    footer.style.backgroundColor = 'rgb(68, 64, 64)';

    header.style.color = 'white';
    sobreMim.style.color = 'white';
    habilidades.style.color = 'white';
    withMe.style.color = 'white';
    skills.style.color = 'white';
} else {
    header.style.backgroundColor = 'rgb(226, 217, 217)';
    withMe.style.backgroundColor = 'rgb(241, 233, 233)';
    button.style.backgroundColor = 'white';
    skills.style.backgroundColor = 'rgb(241, 233, 233)';
    footer.style.backgroundColor = 'rgb(226, 217, 217)';
    header.style.color = 'black';
    sobreMim.style.color = 'black';
    habilidades.style.color = 'black';
    withMe.style.color = 'black';
    skills.style.color = 'black';
}


let header = document.getElementById('header');
let sobreMim = document.getElementById('sobreMim');
let habilidades = document.getElementById('habilidades');
let button = document.getElementById('button')
let withMe = document.getElementById('withMe');
let skills = document.getElementById('skills');
let footer = document.getElementById('footer');

    let buttonDark = document.getElementById("darkMode");
    buttonDark.addEventListener('click', () => {
        header.style.backgroundColor = 'black';
        button.style.backgroundColor = 'black';
        withMe.style.backgroundColor = 'black';
        skills.style.backgroundColor = 'black';
        footer.style.backgroundColor = 'rgb(68, 64, 64)';

        header.style.color = 'white';
        sobreMim.style.color = 'white';
        habilidades.style.color = 'white';
        withMe.style.color = 'white';
        skills.style.color = 'white';
        localStorage.setItem('darkMode', 'true');
    });

    let buttonLight = document.getElementById('lightMode');
    buttonLight.addEventListener('click', () => {
        localStorage.removeItem('darkMode');
        header.style.backgroundColor = 'rgb(226, 217, 217)';
        withMe.style.backgroundColor = 'rgb(241, 233, 233)';
        button.style.backgroundColor = 'white';
        skills.style.backgroundColor = 'rgb(241, 233, 233)';
        footer.style.backgroundColor = 'rgb(226, 217, 217)';
        header.style.color = 'black';
        sobreMim.style.color = 'black';
        habilidades.style.color = 'black';
        withMe.style.color = 'black';
        skills.style.color = 'black';
        location.reload();
    })


