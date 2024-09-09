import { TypeTransaction } from "./constante.js";
import { btnAjouter, btnShowTransaction, btnUser, chargeImg, defaultImg, destinataireTransaction, doTransaction, emailAdd, img, inputSearch, modalAdd, modalAjout, modalAjoutAdd, modalCancel, nomAdd, phoneAdd, prenomAdd, searchNumero, searchUserResult, solde } from "./dom.js";
import { createListSearch, createUserSearchList, currentUser, getLastElementInTab, getRandomUser, getTransactionByUser, searchByPhone, searchUser, showUser, transaction } from "./fonction.js";

export let users = [
        {
          "id": 0,
          "prenom": "Jeannette",
          "nom": "Clark",
          "email": "jeannetteclark@digifad.com",
          "phone": "(844) 579-2944",
          "solde": 526,
          "img" : "https://media.istockphoto.com/id/1127788799/photo/young-woman-wearing-casual-red-sweater-over-isolated-background-looking-away-to-side-with.jpg?s=1024x1024&w=is&k=20&c=5WYp__LcqRbv-nd1Dz0X7s6kqGjCSLNQGEwHCP6mzPA="
        },
        {
          "id": 1,
          "prenom": "Luella",
          "nom": "Wolf",
          "email": "luellawolf@digifad.com",
          "phone": "(852) 440-3828",
          "solde": 6013,
          "img" : "https://images.unsplash.com/photo-1724812773684-e93ac802c2e0?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
          "id": 2,
          "prenom": "Velma",
          "nom": "Hanson",
          "email": "velmahanson@digifad.com",
          "phone": "(988) 460-2029",
          "solde": 541,
          "img" : "https://media.istockphoto.com/id/1476170969/photo/portrait-of-young-man-ready-for-job-business-concept.jpg?s=1024x1024&w=is&k=20&c=8mgK2Kq73o8DIjazvLmEGkhx2p_7P5r3mvpbIM6q5cA="
          
        },
        {
          "id": 3,
          "prenom": "Sheri",
          "nom": "Erickson",
          "email": "sherierickson@digifad.com",
          "phone": "(845) 587-3294",
          "solde": 3496,
          "img" : "https://media.istockphoto.com/id/481879510/photo/close-up-of-smiling-man-on-isolated-background.jpg?s=1024x1024&w=is&k=20&c=el4zHUuERuoGvq7S5IiUz6-IBKkDG8IaN9S3rR6XjPk="

        },
        {
          "id": 4,
          "prenom": "Florence",
          "nom": "Waters",
          "email": "florencewaters@digifad.com",
          "phone": "(889) 433-3220",
          "solde": 6738,
          "img" : "https://media.istockphoto.com/id/980978406/photo/young-girl-with-long-brown-healthy-hair-and-green-eyes.jpg?s=1024x1024&w=is&k=20&c=bBrcBQWgov1K8HUEiq5JqBECEX9QmNPblXEntYhr3dA="

        },
        {
          "id": 5,
          "prenom": "Jacquelyn",
          "nom": "Sparks",
          "email": "jacquelynsparks@digifad.com",
          "phone": "(985) 465-3449",
          "solde": 2648,
          "img" : "https://media.istockphoto.com/id/476409902/photo/smiling-woman-looking-at-camera.jpg?s=1024x1024&w=is&k=20&c=nahxqJ8hucTuP2rbnqueHeIbQLUuVVxazjJFPGheb5E="
        }
      
];


export let transactions = [
    {
        "id" : 0,
        "montant" : 2300,
        "date" : new Date(),
        "type" : TypeTransaction.depot,
        "numero" : 123,
        "destinataire" : "(844) 579-2944"
    },
    {
        "id" : 1,
        "montant" : 230,
        "date" : new Date(),
        "type" : TypeTransaction.retrait,
        "numero" : 123,
        "destinatire" : "(844) 579-2944"
    },
    {
        "id" : 2,
        "montant" : 4560,
        "date" : new Date(),
        "type" : TypeTransaction.annule,
        "numero" : 123,
        "destinatire" : "(852) 440-3828"
    }
];
export let transactionsUser = [
    {
        "id" : 0,
        "transaction_id" : "0",
        "user_id" : "0",
    },
    {
        "id" : "1",
        "transaction_id" : "1",
        "user_id" : "0",
    },
    {
        "id" : 2,
        "transaction_id" : "2",
        "user_id" : "0",
    },
    {
        "id" : 3,
        "transaction_id" : "2",
        "user_id" : "1",
    },
    {
        "id" : 4,
        "transaction_id" : "0",
        "user_id" : "2",
    },
    
];
let userRand = getRandomUser(users);
showUser(userRand, getTransactionByUser(userRand.id, transactionsUser,transactions))

btnUser.addEventListener("click", ()=>{
  userRand = getRandomUser(users);
  showUser(userRand, getTransactionByUser(userRand.id, transactionsUser,transactions));
});

btnShowTransaction.addEventListener("click", ()=>{
    modalAjout.classList.toggle("dnone");
});

doTransaction.addEventListener("click", ()=>{
  let userToSend = users.find(ele => ele.phone == destinataireTransaction.value);
  transaction(users.find(user => user.id == currentUser ), transactions, transactionsUser, userToSend);
});

destinataireTransaction.addEventListener("input", (e)=>{
  if(e.target.value){
    searchNumero.classList.remove("dnone")
  }else{
    searchNumero.classList.add("dnone")
  }
  createListSearch(searchByPhone(e.target.value, users));  
})

inputSearch.addEventListener("input", (e)=>{
  if(e.target.value){
    searchUserResult.classList.remove("dnone")
  }else{
    searchUserResult.classList.add("dnone")
  }
  createUserSearchList(searchUser(e.target.value, users),transactionsUser, transactions, users);
})


modalAdd.addEventListener("click", ()=>{
    if ((prenomAdd.value == "") || (nomAdd.value== "") || (emailAdd.value== "") || (phoneAdd.value== "") || (img.src == defaultImg)) {
      alert("Tous les champs sont obligatoire");
    }else{
          let user = {
            "id" : getLastElementInTab(users) + 1,
            "prenom" : prenomAdd.value,
            "nom" : nomAdd.value,
           "email" : emailAdd.value,
            "phone" : phoneAdd.value,
            solde : 0,
            "img" : img.src

      }
      users.push(user);
      prenomAdd.value="";
      nomAdd.value="";
      emailAdd.value="";
      phoneAdd.value="";
      img.src = defaultImg;
      console.log(users);
      
      showUser(user, [], []);
      modalAjoutAdd.classList.remove("dflex");
      modalAjoutAdd.classList.add("dnone");
    }
    
})

modalCancel.addEventListener("click", ()=>{
  modalAjoutAdd.classList.remove("dflex");
  modalAjoutAdd.classList.add("dnone");
  prenomAdd.value="";
  nomAdd.value="";
  emailAdd.value="";
  phoneAdd.value="";
  img.src = defaultImg;
})

//btnAjouter
btnAjouter.addEventListener("click", ()=>{
  modalAjoutAdd.classList.remove("dnone");
  modalAjoutAdd.classList.add("dflex");
})


chargeImg.addEventListener("change", (e)=>{
  img.src = e.target.value;
  if (e.target.files && e.target.files[0]) {
    let reader = new FileReader();
    reader.onload = function (el) {
      img.src = el.target.result;
    }
    reader.readAsDataURL(e.target.files[0]);
}else{
  img.src = defaultImg
}


})
