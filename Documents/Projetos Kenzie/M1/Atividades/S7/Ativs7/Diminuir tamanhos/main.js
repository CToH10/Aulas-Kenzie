// const shoppingList = document.getElementById("list");
// const input = document.getElementById("input");
// const addButton = document.getElementById("add");
// addButton.innerText = "Adicionar"
// const resetButton = document.getElementById("reset");
// resetButton.innerText = "Resetar"

// let list = [];

// function reloadList() {
//     shoppingList.innerHTML = ""; // Limpa nosso Elemento HTML
//     for (let index = 0; index < list.length; index++) {
//       let currentElement = list[index];
//       currentElement.id = index;
//       shoppingList.appendChild(currentElement);
//     }
// }

// function createRemoveButton() {
//   const removeButton = document.createElement("button"); // Criamos um botão
//   removeButton.innerText = "Remover";
//   removeButton.addEventListener("click", (e) => { // Adicionamos um evento nele.

//     list = list.filter((_, index) => index !== Number(e.path[1].id));
//     reloadList(); // Chamamos a função para recarregar a lista.
//   });
//   return removeButton;
// }

//   function onClickFunction() {
//     let newItem = document.createElement("li");   //Criando um elemento html "li"
//     let paragraph = document.createElement("p");  //Criando um elemento html "p"
//     let removeButton = createRemoveButton();
            
//     if (input.value) {
//     paragraph.innerText = input.value; // Adicionamos o valor do input em nosso "p"
  
//     newItem.appendChild(paragraph); // Colocamos nosso paragraph dentro de nossa li
//     newItem.appendChild(removeButton);// Colocamos nosso button dentro de nossa li
  
//     input.value = ""; // Limpamos nosso input
//     list.push(newItem);
  
//     reloadList();
//     }
// }
//   addButton.addEventListener("click", onClickFunction);

// function onClickResetFunction() {
//   shoppingList.innerHTML = "";
//   list = [];
// }
// resetButton.addEventListener("click", onClickResetFunction);


// const users = [
//   {
//    name: 'Madalena',
//    profile: 'Admin',
//    sector: 'Administration'
//  },
//  {
//    name: 'Rafael',
//    profile: 'user',
//    sector: 'Finance'
//  },  
//  {
//    name: 'Baltazar',
//    profile: 'user',
//    sector: 'Reception'
//  },  
//  {
//    name: 'Carmen',
//    profile: 'Admin',
//    sector: 'Business'
//  }    
// ]

// for (let userIndex = 0; userIndex < users.length; userIndex++){
//   let verificacao = users[userIndex]
//   let listing = document.createElement("li")
//   let userName = document.createElement("h2")
//   let userSector = document.createElement("p")

//   listing.append(userName, userSector)
//   listing.style.listStyle = "none"
//   listing.style.width = "110px"
//   listing.style.padding = "5px"
//   listing.style.margin = "0 0 7px 0"
//   listing.style.textAlign = "center"

//   userName.innerHTML = verificacao.name
//   userSector.innerHTML = verificacao.sector

//   if (verificacao.profile == "Admin" && verificacao.sector == "Administration"){
//     listing.style.backgroundColor = "#748ffc"
//   } else if (verificacao.profile == "Admin"){
//     listing.style.backgroundColor = "#ffe066"
//   } else {
//     listing.style.backgroundColor = "#63e6be"
//   }
//   let listThem = document.querySelector(".list")
//   listThem.appendChild(listing)
// }


// function solution(number){
//     let sum = 0
//     if (number <= 0){
//         return 0
//     } else {
//         for (let i = 0; i < number; i++){
//             if (i % 3 == 0 || i % 5 == 0){
//                 sum += i
//             }
//     }
//         return sum
//     }
// }


// function generateHashtag (str) {
//     if (str == false){
//         return false
//     }

//     let finalHashtag  = ``
//     let control = ``
//     let splittedString = str.split(" ")
//     for (let i = 0; i < splittedString.length; i++){
//         let string = splittedString[i].replaceAll(splittedString[i].charAt(0), splittedString[i].charAt(0).toUpperCase())
//         control = control.concat("", string)
//     }
//     finalHashtag = `#${control}`
//     if (finalHashtag.length > 140){
//         return false
//     } else {
//         return finalHashtag
//     }
// }

// function generateHashtag (str) {
//     if (str == false){
//         return false
//     }
//     let finalHashtag  = ``
//     let control = ``
//     let splittedString = str.split(" ")
//     for (let i = 0; i < splittedString.length; i++){
//         let string = splittedString[i].charAt(0).toUpperCase() + splittedString[i].slice(1)
//         control = control.concat("", string)
//     }
//     finalHashtag = `#${control}`
//     if (finalHashtag.length > 140){
//         return false
//     } else {
//         return finalHashtag
//     }
// }