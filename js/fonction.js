import { TypeTransaction } from "./constante.js";
import { nom, prenom, phone, email, solde, userImg, tbody, loader, mtnAdd, destinataireTransaction, code, typeTransaction, searchNumero, searchUserResult } from "./dom.js";

export let currentUser = 0;

/**
 * Méthode pour afficher les informations d'un utilisateurs
 */
export function showUser(user, transactions ) {
    loader.classList.remove("dnone");
    var preloadImage = new Image();
    preloadImage.src =  user.img;
    preloadImage.onload = function() {
        userImg.src = user.img;
        nom.innerText = user.nom;
        prenom.innerText = user.prenom;
        email.innerText = user.email;
        phone.innerText = user.phone;
        solde.innerText = user.solde;
        currentUser = user.id;
        loader.classList.add("dnone");
        showTransactionsUser(user.id, transactions)
      };
      preloadImage.onerror = function() {
        loader.classList.add("dnone");
        this.src = '';
      };
    
}



/**
 * Méthode pour récuperer un user
 * @param {*} tableauUsers 
 * @returns 
 */
export function getRandomUser(tableauUsers){
   let userIds = tableauUsers.map(user => user.id);
   let randomId = Math.floor(Math.random(0, userIds.length - 1) * userIds.length );
   return tableauUsers.find(user => user.id == randomId)??tableauUsers[tableauUsers.length - 1];
}


/**
 * 
 * @param {*} userId l'identifiant du user
 * @param {*} transactionUsers list de toutes les transactions affecter au users
 * @param {*} transactions liste des transactions
 * @returns 
 */
export function getTransactionByUser(userId, transactionUsers, transactions ){
    let transactionsIds = transactionUsers.filter(trans => trans.user_id == userId).map(transac => transac.transaction_id)
    return transactions.filter(trans => transactionsIds.includes(trans.id.toString())).sort((a, b) => b.id - a.id);
}

/**
 * Afficher les transactions d'un utilisateur
 * @param {*} userId l'identifiant du user
 * @param {*} transactionUsers list des transactions affecter aux users
 * @param {*} transactions 
 */
export function showTransactionsUser(user, transactions){
   tbody.innerHTML = "";
   code.innerText = transactions.length;
   transactions.forEach(element => {
    tbody.appendChild(addLineNewTransaction(element));
});

}

/**
 * Méthode pour creer une ligne de transaction dans l'interface graphique
 * @param {*} transaction 
 * @returns 
 */
function addLineNewTransaction(transaction){
  let tr = document.createElement("tr");
  let numeroTd = document.createElement("td");
  numeroTd.textContent = transaction.numero;
  tr.appendChild(numeroTd);

  let dateTd = document.createElement("td");
  dateTd.textContent = transaction.date;
  tr.appendChild(dateTd);

  let typeTd = document.createElement("td");
  typeTd.textContent = transaction.type;
  tr.appendChild(typeTd);

  let montantTd = document.createElement("td");
  montantTd.textContent = transaction.montant;
  tr.appendChild(montantTd);
  return tr;
  
}

/**
 * Méthode pour creer une nouvelle transaction
 * @param {*} user 
 */
export function transaction(user, transactions, transactionsUser, userToSend){
          let newTransaction = {
            "id" : getLastElementInTab(transactions) + 1,
            "montant" :parseFloat( mtnAdd.value),
            "date" : new Date(),
            "type" : typeTransaction.value,
            "numero" : generateNumeroTransaction(),
            "destinataire" : destinataireTransaction.value  
          }
          console.log("new transaction",newTransaction);
          
          doingTransaction(newTransaction, user, transactions, transactionsUser, userToSend)
}

/**
 * Méthode pour générer un numero de transaction
 * @returns 
 */
function generateNumeroTransaction(){
    let date = new Date().toISOString();
    return date.replaceAll("-", "").replaceAll(":","").replaceAll(".","");
    
}

/**
 * Méthode pour obtenir le dernier élément d'un tableau d'objet, selon l'id
 * @param {*} tab 
 * @returns 
 */
 function getLastElementInTab(tab){
     return tab.sort((a,b)=>{
        return b.id - a.id;
      })[0].id;
}

function doingTransaction(newTransaction, user,  transactions, transactionsUser, userToSend) {
  if(newTransaction.montant < 500){
    alert("Le montant de la transaction doit être supérieur à 500");
    

  }else{
    if(newTransaction.type == "depot" && newTransaction.destinataire != ""){
      newTransaction.type = "transfert";
    }
    switch (newTransaction.type) {
      case "retrait":
      if(newTransaction.montant > user.solde){
        alert("Le solde du client ne permet pas de faire une telle transaction");
      }else{
      // ----------------
        user.solde = user.solde - newTransaction.montant;
        transactions.push(newTransaction);
        transactionsUser.push(
          {
            "id" : 0,
            "user_id" : user.id.toString(),
            "transaction_id" : newTransaction.id.toString()
          }
        );
      }
        
      break;
      case "depot" : 
      user.solde = user.solde + newTransaction.montant;
      transactions.push(newTransaction);
      transactionsUser.push(
        {
          "id" : 0,
          "user_id" : user.id.toString(),
          "transaction_id" : newTransaction.id.toString()
        }
      );
      
      break;
      case "transfert" : 
      if(newTransaction.montant > user.solde){
        alert("Le solde du client ne permet pas de faire une telle transaction");
      } else if(userToSend.email == user.email){
          alert("Veuillez choisir un numéro différent du votre pour éffectuer le transfert")
      }else{
          // -----------------------
          user.solde = user.solde - newTransaction.montant;
           newTransaction.type = TypeTransaction.transfert;
          
          transactions.push(newTransaction);
          transactionsUser.push(
            {
              "id" : getLastElementInTab(transactionsUser),
              "user_id" : user.id.toString(),
              "transaction_id" : newTransaction.id.toString()
            }
          );
          let newTransSend = {...newTransaction}
          newTransSend.id = getLastElementInTab(transactions) + 1;
          userToSend.solde = userToSend.solde + newTransaction.montant
          newTransSend.type = TypeTransaction.depot;
          newTransSend.destinataire = user.phone;
          transactions.push(newTransSend);
          transactionsUser.push(
            {
              "id" : getLastElementInTab(transactionsUser),
              "user_id" : userToSend.id.toString(),
              "transaction_id" : newTransSend.id.toString()
            }
          );
          // ----------------------
        }
        console.log("transfert");
        
      break
      default:
        break;
    }
    solde.textContent = user.solde;
    showTransactionsUser(user.id, getTransactionByUser(user.id, transactionsUser, transactions))
    
  }


  
  

  
}



/**
 * Fonction qui permet de rechercher un utilisateur par son téléphone
 * @param {*} value 
 * @param {*} usersTab 
 */
export function searchByPhone(value, usersTab){
  return usersTab.filter(user => user.phone.includes(value) && value != "").slice(0, 4);
}

export function createListSearch(tab) {
  searchNumero.innerHTML = "";
      tab.forEach(el => {
        let li = document.createElement("li");
        li.textContent = el.phone;
        searchNumero.appendChild(li);
        li.addEventListener("click", (e)=>{
            destinataireTransaction.value = e.target.textContent;
            searchNumero.innerHTML = "";
        })
      })
}

export function searchUser(value,tabUser) {
  return tabUser.filter(el => ((el.phone.includes(value) || el.prenom.includes(value) || el.nom.includes(value) ||el.email.includes(value)) && value!=""))
          .slice(0, 4)
}

export function createUserSearchList(tab,transactionsUser, transactions, users){
  searchUserResult.innerHTML = "";
  tab.forEach(el => {
    let li = document.createElement("li");
    li.textContent = el.prenom+" "+el.nom + " "+el.phone
    li.id = el.id;
    searchUserResult.appendChild(li);
    li.addEventListener("click", (e)=>{
      let userRand = users.find(ele => ele.id = e.target.id );
      searchUserResult.innerHTML = "";
      showUser(userRand, getTransactionByUser(userRand.id, transactionsUser,transactions))
    })
  })
}