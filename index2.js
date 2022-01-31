
function getEndPointData(endPointURL, bindingData,rowId){
    const xhr = new XMLHttpRequest();
    xhr.open("Get", endPointURL);
    xhr.onload = function () {
        const data = JSON.parse(xhr.responseText); 
        const datay=Object.keys(data)[0];
         const datax=data[datay];
        bindingData(datax,rowId);
  
    }
    xhr.send();
  }
 


function generateCell(title,img) {
 let template=document.querySelector("#temp").content.cloneNode(true);
 console.log(template);
 template.querySelector("img").setAttribute("src",img);
 template.querySelector("p").textContent=title;
 return template;
}


function bindingData(datax,rowId) {
    
    for(let i in datax){
        var title=datax[i].Name;
        var img =datax[i].Image;
        
        document.getElementById(`${rowId}`).append(generateCell(title,img));
    }
}


getEndPointData("apis/latestMeals.json", bindingData,"mealss");
getEndPointData("apis/popularIngredients.json", bindingData,"pop-ing");
getEndPointData("apis/randomMeals.json", bindingData,"rand-meal");
getEndPointData("apis/randomIngredients.json", bindingData,"rand-ing");







document.getElementById("browse-country").addEventListener("load",getbrc());
function getbrc() {
   
    const req = new XMLHttpRequest();
        req.open("Get","apis/flags.json");
        req.onload = function () {
const data =JSON.parse(req.responseText);
const dataf=data.flags;
var outPut="";
for(let i in dataf){
 outPut+=`<div class="col col-lg-1">
    <a href="https://www.google.com"><img class="contain-img" id="country-image" src="${dataf[i]}" alt="">
    </div>`;
}
document.getElementById("browse-countrys").innerHTML = outPut;
        
};
req.send();
}