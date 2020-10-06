const btn_inscription = document.querySelector(".btn-inscription");
const btn_connexion = document.querySelector(".btn-connexion");
const btn_deconnexion = document.querySelector(".btn-deconnexion");

const form_inscription = document.querySelector(".form-inscription");
const email_inscription = document.querySelector(".email-inscription");
const psw_inscription = document.querySelector(".psw-inscription");

const form_connexion = document.querySelector(".form-connexion");
const email_connexion = document.querySelector(".email-connexion");
const psw_connexion = document.querySelector(".psw-connexion");

btn_inscription.addEventListener("click", () => {
    if (form_connexion.classList.contains("apparition")) {
        form_connexion.classList.remove("apparition");
    }
    form_inscription.classList.toggle("apparition");
});

btn_connexion.addEventListener("click", () => {
    if (form_inscription.classList.contains("apparition")) {
        form_inscription.classList.remove("apparition");
    }
    form_connexion.classList.toggle("apparition");
});

form_inscription.addEventListener("submit", (e) => {
    e.preventDefault();

    const mail_inscription_valeur = email_inscription.value;
    const password_inscription_value = psw_inscription.value;

    auth.createUserWithEmailAndPassword(mail_inscription_valeur, password_inscription_value).then((identifiants) => {
        console.log(identifiants);
        form_inscription.reset();
        form_inscription.classList.toggle('apparition');
    });
});

//deco
btn_deconnexion.addEventListener('click', (e) => {
    e.preventDefault();
    auth.signOut().then(() => {
        console.log('deconnexion');
    })
})

//connexion
form_connexion.addEventListener("submit", (e) => {
    e.preventDefault();

    const mail_connexion_valeur = email_connexion.value;
    const password_connexion_value = psw_connexion.value;

    auth.signInWithEmailAndPassword(mail_connexion_valeur, password_connexion_value).then((identifiants) => {
        console.log('connexion : ', identifiants.user);
        form_connexion.reset();
        form_connexion.classList.toggle('apparition');
    });
});


//gérer le contenu
const h1 = document.querySelector('h1');
const info = document.querySelector('.info');

auth.onAuthStateChanged(utilisateur => {
    //si la personne est connectée, alors...
    if(utilisateur){
        info.innerText = "Voici le contenu privé";
        h1.innerText = "Vous revoilà ! :) ";
    }
    //si non ...
    else{
        console.log('user déconnecté');
        info.innerText = 'Contenu Public';
        h1.innerText = "Bienvenue, inscrivez-vous ou connectez-vous";
    }
})