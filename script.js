
const search=document.getElementById("search");
const listcontainer=document.querySelector("#list-container");

showdata()
function adding()
{
    

    if(search.value=="")
    {
        alert("you must write a tast to add")
    }
    else
    {
        
        let li=document.createElement("li");
        li.innerHTML=search.value;
        listcontainer.appendChild(li);
       let span= document.createElement("span")
       span.innerHTML="\u00d7"
       li.appendChild(span)

       search.value=""

       savedata();
    }
}

listcontainer.addEventListener("click",function(e){
    if(e.target.tagName==="LI")
{
    e.target.classList.toggle("checked")
    savedata();

}
if(e.target.tagName==="SPAN")
{
e.target.parentElement.remove();
savedata();
}
})

function savedata()
{
    localStorage.setItem("data",listcontainer.innerHTML);
}

function showdata()
{
     listcontainer.innerHTML=localStorage.getItem("data")
}