const clients = [
    { nom: "Ndiaye", Prenom: "Diogal", telephone: "771234564", mail: "diogs@exemple.com", photo: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bWFuJTIwZmFjZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60", paiement: [12000, 12000, 12000], sens: [1, -1, 1], day: ["12/01/2023", "13/01/2023", "01/02/2023"] },
    { nom: "Touré", Prenom: "Adja", telephone: "771234567", mail: "toure@exemple.com", photo: 'https://images.unsplash.com/photo-1579610520129-963c74781ffb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=714&q=80', paiement: [12000, 12000, 12000, 12000, 12000], sens: [1, 1, 1, -1, -1], day: ["12/01/2023", "13/01/2023", "15/01/2023", "20/01/2023", "30/01/2023"] },
    { nom: "sy", Prenom: "Babacar", telephone: "760234567", mail: "babacarsyg@exemple.com", photo: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bWFuJTIwZmFjZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60", paiement: [12000, 12000, 12000], sens: [-1, 1, 1], day: ["12/01/2023", "13/01/2023", "10/02/2023"] },
    { nom: "Niang", Prenom: "aly", telephone: "709846763", mail: "breukh@exemple.com", photo: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8bWFuJTIwZmFjZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60", paiement: [12000, 12000, 12000], sens: [-1, 1, 1,], day: ["12/01/2023", "13/01/2023", "23/02/2023"] },
    { nom: "Malick", Prenom: "Jean", telephone: "764678760", mail: "jeanmalick@exemple.com", photo: "https://images.unsplash.com/photo-1619182597083-17bda72c1d56?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=368&q=80", paiement: [12000], sens: [1], day: ["12/01/2023"] },
    { nom: "diarra", Prenom: "sokhna", telephone: "751234567", mail: "diarrasokhna@exemple.com", photo: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8d29tYW4lMjBmYWNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60", paiement: [12000, 12000, 12000, 12000], sens: [1, 1, -1, 1], day: ["12/01/2023", "13/01/2023", "20/01/2023", "28/02/2023"] },
    { nom: "mandiang", Prenom: "Lamine", telephone: "774221268", mail: "doHAtaké@exemple.com", photo: "https://media.istockphoto.com/id/544358212/photo/happy-laughing-man.jpg?s=612x612&w=is&k=20&c=TeWwYilpBKQqFFbpN3U1t6e7lCSTvKCdrYyAtx54AbM=", paiement: [12000, 12000, 12000, 12000, 1000], sens: [1, 1, -1, 1, 1], day: ["12/01/2023", "13/01/2023", "15/01/2023", "20/01/2023", "12/02/2023"] }


]

let tabNum = [];
clients.forEach(client => {
    tabNum.push(client.telephone);

});

let tabMail = [];
clients.forEach(client => {
    tabMail.push(client.mail);

});

let tabIndiceTransact = [];


console.log(tabNum)
// console.log(clients.length);



const tbody = document.querySelector("tbody");
const tr = document.querySelectorAll("tr");
const td = document.querySelectorAll("td");
const lastname = document.querySelector("#lastname");
const firstname = document.querySelector("#firstname");
const phone = document.querySelector("#phone");
const img = document.querySelector("img");
const email = document.querySelector("#email");
const next = document.querySelector(".next");
const code = document.querySelector("code");
const solde = document.querySelector("#solde");
const btn = document.querySelectorAll("button");
const form = document.querySelector(".form");
const trans = document.querySelector("#trans");
const mnt = document.querySelector("#mnt");
const btnDetail = document.querySelector("#btnDetail");
const Allselect = document.querySelectorAll(".form-group");
const transfert = document.querySelector("#transfert");
const container = document.querySelector(".container");
let date = new Date().toLocaleDateString();
const addNewuser = document.querySelector("#addNewuser");
const recherche = document.querySelector("#recherche");
const transfere = document.querySelector("#transfere");
const newMail = document.querySelector("#newMail");
const newTel = document.querySelector("#newTel");
const newPrenom = document.querySelector("#newPrenom");
const newNom = document.querySelector("#newNom");
const ajouter = document.querySelector("#ajouter");
const annuler = document.querySelector("#annuler");
const clientDel = document.querySelector("#clientDel");
const modaleClient = document.querySelector("#modale-client");
const delet = document.querySelector("#delete");
const delUser = document.querySelector("#delUser");
const cancel = document.querySelector("#cancel");
const deleteNewuser = document.querySelector("#deleteNewuser");
const barreNum = document.querySelector(".barre-num")
const diogal = document.querySelector("#diogal")
const faEye = document.querySelector(".fa-eye")
const modifiericn = document.querySelector("#modifiericn");
const newPrenomMid = document.querySelector("#newPrenomMid")
const newNomMid = document.querySelector("#newNomMid")
const newMailMid = document.querySelector("#newMailMid")
const newTelMid = document.querySelector("#newTelMid")
const newPhotoMid = document.querySelector("#newPhotoMid")
const Modifierbtn = document.querySelector("#Modifierbtn");
const annulerModif = document.querySelector("#annulerModif");
const modaleModifie = document.querySelector("#modale-modifie");
const AnnuleTransfert = document.querySelector("#AnnuleTransfert");
const AnnuleTransfertbtn = document.querySelector("#AnnuleTransfertbtn");
const nonAnnuleTransfertbtn = document.querySelector("#nonAnnuleTransfertbtn");
const diaz = document.querySelector("#diaz");


nonAnnuleTransfertbtn.addEventListener("click", () => {
    AnnuleTransfert.style.display = "none";
})
AnnuleTransfertbtn.addEventListener("click", () => {

    //console.log( tabIndiceTransact);
    //diaz.textContent = 
    //if(tabIndiceTransact.length!==0)
    //{
    //let t = 
    //}

    for (let i = 0; i < tabIndiceTransact.length; i++) {
        if (ind === tabIndiceTransact[i].inDeb) {
            let sol = calculSolde(clients[tabIndiceTransact[i].indRec].paiement, clients[tabIndiceTransact[i].indRec].sens)
            console.log(sol)

            if (sol < tabIndiceTransact[i].montant) {
                messError(divError, "Le client à deja retiré l'argent");
            }
            else {
                clients[tabIndiceTransact[i].indRec].paiement.push(tabIndiceTransact[i].montant);
                clients[tabIndiceTransact[i].indRec].sens.push(-1);
                clients[tabIndiceTransact[i].indRec].day.push(date);
                clients[ind].sens[tabIndiceTransact[i].indsens - 1] = 0;
                clients[ind].day.push(date);
                tabIndiceTransact.splice(i, 1);
                messError(divError, "transfert Annulé");
                ajoutNewtr(clients[ind].sens, clients[ind].paiement, clients[ind].day, clients[ind].photo);

            }

        }

    }
    AnnuleTransfert.style.display = "none";
    // clients

})

modaleModifie.style.display = "none";
newTelMid.addEventListener("input", () => {

    notletter(newTelMid.value, newTelMid);


})


newNomMid.addEventListener("input", () => {

    notNumber(newNomMid.value, newNomMid);


})
newPrenomMid.addEventListener("input", () => {

    notNumber(newPrenomMid.value, newPrenomMid);
    allInputIsChecked


})

function allInputIsChecked(tab) {
    for (let i = 0; i < tab.length; i++) {
        if (!(isWrittenInInput(tab[i]))) {
            tab[i].style.border = "0.1em solid red";
            return false;
        }

    }
    return true;
}
annulerModif.addEventListener("click", () => {
    modaleModifie.style.display = "none";
})

Modifierbtn.addEventListener("click", () => {
    if (allInputIsChecked([newNomMid, newPrenomMid, newMailMid, newTelMid, newPhotoMid])) {
        if (NumTelValide(newTelMid) === 0) {
            if ((tabNum.includes(newTel.value))) {

                messError(divError, "Ce numéro est deja attribuer à un client")
            }
            else {

                clients[ind].nom = newNomMid.value;
                clients[ind].Prenom = newPrenomMid.value;
                clients[ind].mail = newMailMid.value;
                clients[ind].telephone = newTelMid.value;
                clients[ind].photo = newPhotoMid.value;
                modaleModifie.style.display = "flex";
                ajoutIdentity(clients[ind].nom, clients[ind].Prenom, clients[ind].telephone, clients[ind].mail, clients[ind].photo);
                console.log(clients[ind]);
            }


        }
        else {
            messError(divError, "Numero incorrect")
        }
    }

})
modifiericn.addEventListener("click", () => {

    newNomMid.value = clients[ind].nom;
    newPrenomMid.value = clients[ind].Prenom;
    newMailMid.value = clients[ind].mail;
    newTelMid.value = clients[ind].telephone;
    newPhotoMid.value = clients[ind].photo;
    modaleModifie.style.display = "flex";


})



const newPhoto = document.querySelector("#newPhoto")
deleteNewuser.addEventListener('click', () => {
    if (delUser.style.display = "none") {
        delUser.style.display = "block";
        delUser.style.display = "flex";
        diogal.innerText = clients[ind].Prenom + " " + clients[ind].nom
    }

})


// Evénement sur l'icône fa-eye pour afficher les informations du clients dont le numéro a été saisi sur l'input des transferts

faEye.addEventListener("click", () => {
    let index = getClientBytel(clients, transfere.value)
    if (index === clients.length) {
        messError(divError, "Ce numero n'existe pas ")

    }
    else {
        let client = clients[index]

        ind = clients.indexOf(client);
        ajoutIdentity(client.nom, client.Prenom, client.telephone, client.mail, client.photo)
        ajoutNewtr(client.sens, client.paiement, client.day, client.photo);
    }

})




// Evènement sur le boutton annuler du modale pour supprimer un client pour annuler la suppression du client
let delClient;
cancel.addEventListener("click", () => {
    delUser.style.display = "none";
})


//  Evènement sur le boutton supprimer du modale pour supprimer un client pour confirmer la suppression du client present
delet.addEventListener("click", () => {
    clients.splice(ind, 1);
    let index = Math.floor(Math.random() * clients.length)
    delUser.style.display = "none";
    if (clients.length !== 0) {
        ajoutIdentity(clients[index].nom, clients[index].Prenom, clients[index].telephone, clients[index].mail, clients[index].photo)
        ajoutNewtr(clients[index].sens, clients[index].paiement, clients[index].day, clients[index].photo);
        ind = index;
        // console.log(clients);
    }
    else {
        ajoutIdentity("none", "none", "none", "none", "none");
        tbody.innerHTML = "";
        solde.innerText = '';
    }


})


// Evènement sur le button ajout du modale ajouter un client pour ajouter un client dint les infos rentrée sont correct
ajouter.addEventListener("click", () => {
    clients.forEach(client => {
        tabNum.push(client.telephone);

    });
    if (!(isWrittenInInput(newMail))) {

        messError(divError, "Veuiller remplir le champs des mails")
    }
    else if (!(isWrittenInInput(newTel))) {

        messError(divError, "Veuiller remplir le champs du Telephone")
    }
    else if (!(isWrittenInInput(newPrenom))) {


        messError(divError, "Veuiller remplir le champs des prenoms")

    }
    else if (!(isWrittenInInput(newNom))) {


        messError(divError, "Veuiller remplir le champs des noms")

    }
    else if (tabNum.includes(newTel.value)) {

        messError(divError, "Ce numéro est deja attribuer à un client")
    }
    else if (tabMail.includes(newMail.value)) {

        messError(divError, "Ce mailest deja attribuer à un client")
    }

    else {

        let objet = {
            nom: newNom.value,
            Prenom: newPrenom.value,
            telephone: newTel.value,
            mail: newMail.value,
            photo: newPhoto.value,
            paiement: [],
            sens: [],
            day: [],
        }
        clients.push(objet);
        newMail.value = "";
        newNom.value = "";
        newPrenom.value = "";
        newTel.value = "";
        newPhoto.value = "";
        modaleClient.style.display = "none";
    }

})
// Evenement sur le boutton annuler du modale . Il permet de faire disparaitre le modale.
annuler.addEventListener("click", () => {
    modaleClient.style.display = "none";
})
// Evenement sur l'input du champ des prenoms , cet événement permet 
newPrenom.addEventListener("input", () => {

    onlyCharacter(newPrenom.value);
})
newNom.addEventListener("input", () => {

    onlyCharacterName(newNom.value);
})
// newPrenom.addEventListener("change", () => {
//     console.log(newPrenom.value)
// })

newMail.addEventListener("change", () => {
    let mail = verificationMail(newMail.value);
    if (mail === false) {
        newMail.value = "";
        messError(divError, "Email invalide. Merci de verifier les caractères renseigner");
    }
})

newTel.addEventListener("change", () => {
    let num = NumTelValide(newTel);
    // console.log(num);
    if (num === 1) {
        messError(divError, "Numero de téléphone incorrect");
        newTel.value = "";
    }
})

newTel.addEventListener("input", () => {

    onlyNumber(newTel.value);

})





addNewuser.addEventListener("click", () => {
    modaleClient.style.display = "block";
    modaleClient.style.display = "flex";
})



var ind = Math.floor(Math.random() * clients.length);

// console.log(day)


form.style.display = "none";
ajoutIdentity(clients[ind].nom, clients[ind].Prenom, clients[ind].telephone, clients[ind].mail, clients[ind].photo);
ajoutNewtr(clients[ind].sens, clients[ind].paiement, clients[ind].day, clients[ind].photo);


console.log(Allselect[1]);

// Allselect[1]
btnDetail.addEventListener("click", () => {
    if (form.style.display === "block") {
        form.style.display = "none";
    }
    else {
        form.style.display = "block ";
    }
})



// chargement d'un client lors de la mise jour de la page





// Evenement sur le bouton suivant 
next.addEventListener("click", () => {

    let index = Math.floor(Math.random() * clients.length);
    ajoutNewtr(clients[index].sens, clients[index].paiement, clients[index].day, clients[index].photo);
    ajoutIdentity(clients[index].nom, clients[index].Prenom, clients[index].telephone, clients[index].mail, clients[index].photo);
    form.style.display = "none";
    // newNomMid.value = '';
    // newPrenomMid.value = '';
    // newMailMid.value = '';
    // newTelMid.value = '';
    // newPhotoMid.value = '';
    modaleModifie.style.display = "none";
    
    ind = index;
    for (let i = 0; i < tabIndiceTransact.length; i++) {
        if (ind !== tabIndiceTransact[i].inDeb) {
            AnnuleTransfert.style.display = "none";
        }
        else {
            AnnuleTransfert.style.display = "block";
           
        }

    }






})

let divtrans = document.createElement("div")
divtrans.className = "divtrans";

form.appendChild(divtrans);
let divtranse = document.querySelector(".divtrans");

let sel = document.createElement("select");

sel.className = "from-control sel";

divtranse.appendChild(sel)
let sele = document.querySelector(".sel");
sele.style.display = "none"


trans.addEventListener("change", () => {
    if (trans.value === 't') {
        divtrans.innerHTML = "";
        sele.style.display = "block"
        for (let i = 0; i < tabNum.length; i++) {
            if (tabNum[i] === clients[ind].telephone) {
                i++;
            }
            let option = document.createElement("option")
            option.innerText = tabNum[i]
            sele.appendChild(option)
        }
        divtrans.appendChild(sele)
    }
    else {
        divtrans.innerHTML = "";
        sele.style.display = "none";
    }
}
)
// console.log(form)
AnnuleTransfert.style.display = "none";
//Evenement sur le bouton enregistrer
btn[0].addEventListener("click", () => {
    let date = new Date().toLocaleDateString();

    if (mnt.value === "") {

        messError(divError, "Veuiller entrer un montant");
    }
    else {

        let montant = parseFloat(mnt.value);
        if (montant < 500) {

            messError(divError, "Montant insuffisant. Le montant doit être supérieur à 500");

        }
        else {
            let actualSolde = parseFloat(solde.innerText);
            switch (trans.value) {

                case 'd':


                    if (transfere.value === '') {
                        clients[ind].paiement.push(montant);
                        clients[ind].sens.push(1);
                        clients[ind].day.push(date);
                        solde.innerText = calculSolde(clients[ind].paiement, clients[ind].sens);
                        ajoutNewtr(clients[ind].sens, clients[ind].paiement, clients[ind].day, clients[ind].photo);
                    }
                    else {
                        if (actualSolde < montant) {

                            messError(divError, "Votre solde ne vous permet pas d'éffectuer une telle opération")
                        }
                        else {

                            let clit = getClientBytel(clients, transfere.value);
                            if (transfere.value == clients[ind].telephone) {
                                messError(divError, "Veuiller choisir un autre numéro. Vous ne pouvez pas vous envoyer de l'argent");

                            }
                            else if (clit == clients.length) {

                                clients[ind].paiement.push(mnt.value);
                                clients[ind].sens.push(-1);
                                clients[ind].day.push(date);
                                solde.innerText = calculSolde(clients[ind].paiement, clients[ind].sens);
                                ajoutNewtr(clients[ind].sens, clients[ind].paiement, clients[ind].day, clients[ind].photo);
                                setTimeout(() => {
                                    messError(divError, "Transfert annulé");
                                    clients[ind].sens[clients[ind].sens.length - 1] = 0;
                                    ajoutNewtr(clients[ind].sens, clients[ind].paiement, clients[ind].day, clients[ind].photo);
                                    solde.innerText = parseFloat(solde.innerText) + parseFloat(mnt.value);
                                }, 3000);
                            }
                            else {

                                clients[clit].paiement.push(parseFloat(mnt.value));
                                clients[clit].sens.push(1);
                                clients[clit].day.push(date);
                                clients[ind].paiement.push(mnt.value);
                                clients[ind].sens.push(-1);
                                clients[ind].day.push(date);
                                solde.innerText = calculSolde(clients[ind].paiement, clients[ind].sens);
                                ajoutNewtr(clients[ind].sens, clients[ind].paiement, clients[ind].day, clients[ind].photo);
                                tabIndiceTransact.push({ inDeb: ind, indRec: clit, indsens: clients[ind].sens.length, montant: parseFloat(mnt.value) })
                                console.log(tabIndiceTransact);
                                AnnuleTransfert.style.display = "block";
                                setTimeout(() => {
                                    AnnuleTransfert.style.display = "none";

                                }, 120000);


                            }
                        }

                    }
                    ; break;
                case 'r':
                    if (actualSolde < montant) {

                        messError(divError, "Votre solde ne vous permet pas d'éffectuer une telle opération")
                    } else {

                        clients[ind].paiement.push(montant);
                        clients[ind].day.push(date);
                        clients[ind].sens.push(-1);
                        solde.innerText = calculSolde(clients[ind].paiement, clients[ind].sens);
                        ajoutNewtr(clients[ind].sens, clients[ind].paiement, clients[ind].day, clients[ind].photo); break;
                    }

                default: break;
            }
            form.style.display = "none";
        }

    }


})




//fonction qui permet d'afficher le infos du clients 
function ajoutIdentity(nom, prenom, tel, mail, photo) {
    lastname.innerText = nom;
    firstname.innerText = prenom;
    phone.innerText = tel;
    email.innerText = mail;
    img.src = photo
}



//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------
function printUser(user) {
    const img = document.querySelector('img');
    const photoEl = document.querySelector('.photo');
    const tbody = document.querySelector('tbody');
    let photo = new Image();
    photo.src = user.photo;
    console.dir(photo);
    photoEl.innerHTML = photo.outerHTML;
    //charger les spinners
    photo.onload = () => {
        // desactiver le spinner
        // alert('image chargée')
        //afficher les informations du user
        // afficher les transactions
        tbody.innerHTML = "";
        user.transactions.forEach(trans => {
            tbody.innerHTML += ` <tr>
            <td>${trans.numero}</td>
            <td>${trans.date}</td>
            <td>${trans.sens == '1' ? 'depot' : 'retrait'}</td>
            <td>${trans.montant}</td>
        </tr>`
        });
    }
    // img.src=user.photo;

}


//------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Fonction qui permet d'ajouter les transactions du client
function ajoutNewtr(sens, tab, date, photos) {

    let photo = new Image();
    photo.src = photos;
    console.dir(photo);
    // photoEl.innerHTML=photo.outerHTML;
    // //charger les spinners
    photo.onload = () => {
        // desactiver le spinner
        // alert('image chargée')
        //afficher les informations du user
        // afficher les transactions
        tbody.innerHTML = "";
        code.innerText = tab.length;
        solde.innerText = calculSolde(tab, sens);
        for (let i = 0; i < tab.length; i++) {
            let tr = document.createElement("tr");
            tbody.appendChild(tr);
            let td2 = document.createElement("td");
            let td1 = document.createElement("td");
            let td3 = document.createElement("td");
            let td4 = document.createElement("td");
            td1.innerText = i;
            td2.innerText = date[i];
            if (sens[i] === 1) {
                td3.innerText = "depot";
                td3.style.color = "green"
            }
            if (sens[i] === -1) {

                td3.innerText = "retrait";
                td3.style.color = "red"
            }
            if (sens[i] === 0) {
                td3.innerText = "Annulé";
                td3.style.color = "white";
            }

            td4.innerText = tab[i];
            tr.appendChild(td1);
            tr.appendChild(td2);
            tr.appendChild(td3);
            tr.appendChild(td4);


        }
    }



}



function calculSolde(tab, sens) {
    let val = 0;

    for (let i = 0; i < tab.length; i++) {
        val = val + tab[i] * sens[i];
    }
    return val;
}



// creatNewoption();
function creatNewSelect(endroit, tabNum) {
    let select = document.createElement("select");
    select.className = "from-control";
    select.setAttribute("id", "transfert");
    let optionn = document.createElement("option");
    optionn.innerText = "Veuiller un numéro de téléphone";
    select.appendChild(optionn);
    for (let i = 0; i < tabNum.length; i++) {
        if (i === ind) {
            i++;
        }
        let option = document.createElement("option");
        option.innerText = tabNum[i];
        select.appendChild(option)

    }
    endroit.appendChild(select);
}



function getClientBytel(tab, tel) {
    for (let i = 0; i < tab.length; i++) {
        if (tab[i].telephone === tel) {


            return i;
        }

    }
    return tab.length;
}


let divError = document.createElement("div");

divError.style.position = "absolute"
divError.style.color = "white"
divError.style.backgroundColor = " red"
divError.style.padding = "2rem";
divError.style.borderRadius = "2em";
divError.style.display = "none";
divError.style.fontWeight = "bold";
divError.style.top = "0"
container.appendChild(divError)

function messError(divAjout, string) {
    divAjout.innerText = string;
    divAjout.style.display = "block";
    setTimeout(() => {
        divAjout.style.display = "none";

    }, 2000);
}





function NumTelValide(input) {
    let num = input.value;
    if (num.length !== 9 && num.length !== 12) { return 1; }
    if (num[0] !== "2" && num[0] !== "7") { return 1 }
    if (num[0] == "2" && (num[1] !== "2" && num[2] !== "1")) { return 1 }
    if (num[0] == "7" && (num[1] !== "7" && num[1] !== "6" && num[1] !== "8" && num[1] !== "5" && num[1] !== "0")) { return 1 }
    return 0;
}




function isWrittenInInput(input) {
    if (input.value === "") {
        return false;
    }
    return true;
}




function verificationMail(text) {
    let mail = /^[a-z]+[a-z0-9.-]*@[a-z0-9-.]{2,}\.([a-z]){2,6}$/i.test(text);
    return mail;
}

// function verificationUrl(text) {
//     let url = /^[http][s]{0,1}:[/]{2}[a-z0-9]{3,}+.[a-zA-Z]{2,6}/i.test(text);
//     return url;[a-z0-9&é{[()@=ù$€}?!.= /^[a-z]+[a-z0-9.-]*@[a-z0-9-.]{2,}\.([a-z]){2,6}$/i.test(text);
//     let prenom = /^[A-Z]{1,}$/i.test(text);
//     return prenom;
// ¿×Ûðýgtrfaq}

// Fonction pour empêcher à l'utilisatuer de saisir des chiffres ou des caractères spéciaux
function notNumber(text, input) {
    let regular = /[^a-z ]$/i;
    let value = text.replace(regular, "");
    input.value = value;
}


// Fonction pour empêcher la saisie de lettre dans un input
function notletter(text, input) {
    let regular = /[^0-9]$/g;
    let value = text.replace(regular, "");
    input.value = value;
}

// Fonction pour empêcher la saisie de chiffres dans un input
function onlyNumber(text) {
    let vari = text;
    let value = vari.replace(/[^0-9]/g, "");
    newTel.value = value
}



// Fonction 
function onlyCharacter(text) {
    let vari = text;
    let value = vari.replace(/[^a-z ]/i, "");
    newPrenom.value = value;
}

function onlyCharacterName(text) {
    let vari = text;
    let value = vari.replace(/[^a-z ]/i, "");
    newNom.value = value;
}






const inputRecherche = document.querySelector('#inputrecherche')
const barreInfo = document.querySelector('.barre-info')

function barreClient(prenom, nom, img) {
    const li = document.createElement('li');
    const span = document.createElement('span');
    const image = document.createElement('img');
    li.classList.add('infoClientRec');
    span.classList.add('nom');
    span.textContent = `${prenom} ${nom}`;
    image.classList.add('img');
    image.src = img;
    li.appendChild(span);
    li.appendChild(image);
    return li;
}

function barreClientNum(tel) {
    const li = document.createElement('li');
    const span = document.createElement('span');
    li.classList.add('infoClientRec');
    span.classList.add('nom');
    span.textContent = `${tel}`;
    li.appendChild(span);
    return li;
}
inputRecherche.addEventListener('input', () => {
    const motCherche = inputRecherche.value

    barreInfo.innerHTML = ''

    if (motCherche != '') {
        RechercheUser(motCherche)
    }
})



transfere.addEventListener("input", () => {
    const motCherche = transfere.value
    barreNum.innerHTML = ''
    if (motCherche != '') {
        RechercheUserNum(motCherche)
    }

})


function RechercheUserNum(motCherche) {
    for (let client of clients) {
        if (client.telephone.includes(motCherche)) {
            const li = barreClientNum(client.telephone)
            barreNum.appendChild(li)
            li.addEventListener('click', () => {
                transfere.value = client.telephone;
                barreNum.innerHTML = '';
            })
        }
    }
}

function RechercheUser(motCherche) {
    for (let client of clients) {
        if (client.nom.toLowerCase().includes(motCherche.toLowerCase()) || client.Prenom.toLowerCase().includes(motCherche.toLowerCase())) {
            const li = barreClient(client.Prenom, client.nom, client.image)
            barreInfo.appendChild(li)
            li.addEventListener('click', () => {
                ind = clients.indexOf(client);
                ajoutNewtr(clients[ind].sens, clients[ind].paiement, clients[ind].day, clients[ind].photo);
                ajoutIdentity(clients[ind].nom, clients[ind].Prenom, clients[ind].telephone, clients[ind].mail, clients[ind].photo);
                for (let i = 0; i < tabIndiceTransact.length; i++) {
                    if (ind === tabIndiceTransact[i].inDeb) {
                        AnnuleTransfert.style.display = "block";
                    }
                    else {

                        AnnuleTransfert.style.display = "none";
                    }

                }
                barreInfo.innerHTML = '';
            })
        }
    }
}
