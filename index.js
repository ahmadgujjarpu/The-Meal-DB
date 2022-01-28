// document.getElementById("latest-meals").addEventListener("load",getlm());
// function getlm() {
   
//     const req = new XMLHttpRequest();
//         req.open("Get","latestMeals.json");
//         req.onload = function () {
// const data =JSON.parse(req.responseText);
// const datay=data.latestMeals;
// var outPut="";
// for(let i in datay){
//  outPut+=`<div class="col col-lg-3">
//     <a href="https://www.google.com"><img class="contain-img" src="${datay[i].lmImage}" alt="">
//     <br>
//     <p>${datay[i].lmName}</p></a>
//     </div>`;
// }
// document.getElementById("mealss").innerHTML = outPut;
        
// };
// req.send();
// }

// // popular ingredients
// document.getElementById("popular-ingredients").addEventListener("load",getpi());
// function getpi() {
   
    const req = new XMLHttpRequest();
        req.open("Get","popularIngredients.json");
//         req.onload = function () {
// const data =JSON.parse(req.responseText);
// const datapi=data.popularIngredients;
// var outPut="";
// for(let i in datapi){
//  outPut+=`<div class="col col-lg-3">
//     <a href="https://www.google.com"><img class="contain-img" src="${datapi[i].piImage}" alt="">
//     <br>
//     <p>${datapi[i].piName}</p></a>
//     </div>`;
// }
// document.getElementById("pop-ing").innerHTML = outPut;
        
// };
// req.send();
// }


// // random meals
// document.getElementById("popular-ingredients").addEventListener("load",getrm());
// function getrm() {
   
//     const req = new XMLHttpRequest();
//         req.open("Get","randomMeals.json");
//         req.onload = function () {
// const data =JSON.parse(req.responseText);
// const datarm=data.randomMeals;
// var outPut="";
// for(let i in datarm){
//  outPut+=`<div class="col col-lg-3">
//     <a href="https://www.google.com"><img class="contain-img" src="${datarm[i].rmImage}" alt="">
//     <br>
//     <p>${datarm[i].rmName}</p></a>
//     </div>`;
// }
// document.getElementById("rand-meal").innerHTML = outPut;
        
// };
// req.send();
// }



// // random ingredients
// document.getElementById("random-ingredients").addEventListener("load",getri());
// function getri() {
   
//     const req = new XMLHttpRequest();
//         req.open("Get","randomIngredients.json");
//         req.onload = function () {
// const data =JSON.parse(req.responseText);
// const datari=data.randomIngredients;
// var outPut="";
// for(let i in datari){
//  outPut+=`<div class="col col-lg-3">
//     <a href="https://www.google.com"><img class="contain-img" src="${datari[i].riImage}" alt="">
//     <br>
//     <p>${datari[i].riName}</p></a>
//     </div>`;
// }
// document.getElementById("rand-ing").innerHTML = outPut;
        
// };
// req.send();
// }

// // flags
// document.getElementById("browse-country").addEventListener("load",getbrc());
// function getbrc() {
   
//     const req = new XMLHttpRequest();
//         req.open("Get","flags.json");
//         req.onload = function () {
// const data =JSON.parse(req.responseText);
// const dataf=data.flags;
// var outPut="";
// for(let i in dataf){
//  outPut+=`<div class="col col-lg-1">
//     <a href="https://www.google.com"><img class="contain-img" id="country-image" src="${dataf[i]}" alt="">
//     </div>`;
// }
// document.getElementById("browse-countrys").innerHTML = outPut;
        
// };
// req.send();
// }




    
// console.log(tl.responseText);