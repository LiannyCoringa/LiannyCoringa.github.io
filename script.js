const clickInButton = () => {
    let header = document.getElementById('header');
    let sobreMim = document.getElementById('sobreMim');
    let habilidades = document.getElementById('habilidades');
    let background = header.style.backgroundColor = 'black';
    let colorHeader = header.style.color = 'white'; 
    let colorSobreMim = sobreMim.style.color = 'white';   
    let colorHabilidades = habilidades.style.color = 'white';
    return(background, colorHeader, colorSobreMim, colorHabilidades);
};
    
    let buttonDark = document.getElementById("darkMode");
    buttonDark.addEventListener('click', clickInButton);

