const clickInButton = () => {
    let body = document.getElementById('body');
    let header = document.getElementById('header');
    let sobreMim = document.getElementById('sobreMim');
    let habilidades = document.getElementById('habilidades');
    let button = document.getElementById('button')
    let withMe = document.getElementById('withMe');
    let skills = document.getElementById('skills');
    let footer = document.getElementById('footer');

    let background = body.style.backgroundColor = 'black';
    let backgroundHeader = header.style.backgroundColor = 'black';
    let backgroundButton = button.style.backgroundColor = 'black';
    let backgroundWithMe = withMe.style.backgroundColor = 'black';
    let backgroundSkills = skills.style.backgroundColor = 'black';
    let backgroundFooter = footer.style.backgroundColor = 'rgb(68, 64, 64';

    let colorHeader = header.style.color = 'white'; 
    let colorSobreMim = sobreMim.style.color = 'white';   
    let colorHabilidades = habilidades.style.color = 'white';
    let colorWithMe = withMe.style.color = 'white';
    let colorSkills = skills.style.color = 'white';

    return(background, backgroundHeader, backgroundButton, backgroundWithMe, backgroundSkills, backgroundFooter, colorHeader, colorSobreMim, colorHabilidades, colorWithMe, colorSkills);
};
    
    let buttonDark = document.getElementById("darkMode");
    buttonDark.addEventListener('click', clickInButton);

    // let buttonLight = document.getElementById('lightMode');
    // buttonLight.addEventListener('click', )
    // Preciso ver exemplos de como aplicar o localStorage para minha página voltar a ficar clara quando tocar no botão Light. 

