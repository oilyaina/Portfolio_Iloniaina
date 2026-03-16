const langues = {
    "français" : {
    "titrePage" : "Iloniaina Ratsimbazafy",
    "accroche" : "Bienvenue sur mon portfolio",
    "presentation" : "Je m'appelle Iloniaina et je suis actuellement étudiante en Master Cultures et métiers du web. Curieuse de nature, j'aime apprendre de nouvelles choses, découvrir de nouvelles passions et me challenger. C'est pourquoi je me suis réorientée et poursuit actuellement une formation dans le digital."
    
},
    "anglais" : {
    "titrePage" : "Iloniaina Ratsimbazafy",
    "accroche" : "Welcome to my portfolio",
    "presentation" : "My name is Iloniaina and I am currently a Master's student in Web Cultures and Professions. Naturally curious, I love learning new things, discovering new passions, and challenging myself. That's why I changed my career path and am currently pursuing training in the digital field."
    
}
}

function traduireFR(){
    
    var langue = langues["français"];
    Object.keys(langue).forEach(function (cle){
        document.querySelector ("#" + cle).innerHTML = langue[cle]
    })
}

function traduireEN(){
    
    var langue = langues["anglais"];
    Object.keys(langue).forEach(function (cle){
        document.querySelector ("#" + cle).innerHTML = langue[cle]
    })
}


btn1.addEventListener("click",traduireFR)
btn2.addEventListener("click",traduireEN)