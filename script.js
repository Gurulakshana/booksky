button=document.querySelector(".add-button")
overlay=document.querySelector(".popupoverlay")
popupbox=document.querySelector(".popupbox")

button.addEventListener("click",function(){
    overlay.style.display="block"
    popupbox.style.display="block"
})

cancelbutton=document.getElementById("cancel")
cancelbutton.addEventListener("click",function(event){
    event.preventDefault()
    overlay.style.display="none"
    popupbox.style.display="none"
})

container=document.querySelector(".container")
add=document.getElementById("add")
bt=document.getElementById("booktitle")
ba=document.getElementById("bookauthor")
des=document.getElementById("bookdescription")

add.addEventListener("click",function(event){
    event.preventDefault()
    div=document.createElement("div")
    div.setAttribute("class","book-container")
    div.innerHTML=`<h2>${bt.value}</h2><p><b>${ba.value}</b></p><p>${des.value}</p><button>Delete</button>`
    container.append(div)
    overlay.style.display="none"
    popupbox.style.display="none"
})

del=document.getElementById("delete")
del.addEventListener("click",function(event){
    event.target.parentElement.remove()
})
