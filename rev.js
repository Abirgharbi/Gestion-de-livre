

function ajouter()
{
 
    // ajout d'un element 
    tr=document.createElement('tr');
    td1=document.createElement("td");
    td2=document.createElement("td");
    td3=document.createElement("td");

   td1.innerHTML=titre.value;
   td2.innerHTML=auteur.value;
   td3.innerHTML=prix.value;

   table.appendChild(tr);
   tr.appendChild(td1);
   tr.appendChild(td2);
   tr.appendChild(td3);

// supprission d'un element
let btn = document.createElement("button");
btn.innerHTML = "Supprimer";
btn.setAttribute("class", "delete");

tdbtnd=document.createElement("td");
tdbtnd.appendChild(btn);
tr.appendChild(tdbtnd);

btn.addEventListener("click",supprimer);

function supprimer()
{

  btn.parentElement.parentElement.remove();
}


// edit une ligne
var editBtn = document.createElement("button");
  editBtn.setAttribute("class", "edit");
  editBtn.textContent = "edit";
  tdbtne=document.createElement("td");
  tdbtne.appendChild(editBtn);
  tr.appendChild(tdbtne);
  
  editBtn.addEventListener("click",edit);
  function edit()
  {
    for (var i = 0; i < 3; i++) 
    {
     editBtn.parentElement.parentElement.children[i].setAttribute("contenteditable","true"); 
        
    }        
  }
    // editBtn.parentElement.parentElement.setAttribute("contenteditable","true");
  


}

var tr;
var td1
var td2;
var td3;
var table=document.querySelector("tbody");
var titre=document.getElementById("titre");
var auteur=document.getElementById("auteur");
var prix=document.getElementById("prix");

var ajout=document.querySelector(".plus");
ajout.addEventListener('click',ajouter);