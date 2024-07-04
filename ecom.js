let card = document.querySelectorAll(".card");
let submit=document.getElementById("submit");
let num=0;

document.querySelector(".cartitems").style.display="none"

card.forEach(function(cards){
    cards.addEventListener("click",function(){
        console.log(cards);

        document.querySelector(".cartitems").style.display="block"

        num++;
        document.querySelector("#cartnum").innerHTML=num;


    let div = document.createElement("div");
    div.classList.add("cartlist");
    div.innerHTML=`
    <i class="fa-solid fa-xmark" onclick="remove()"></i>
    <img src=${cards.firstElementChild.src}>
    <p>$199</p>
    `
    document.querySelector(".cartitems").appendChild(div)
    })
})

function remove(){
    num--;

    let cartlist=document.querySelectorAll(".cartlist")
    cartlist.forEach(function(currentitem){
        currentitem.addEventListener("click",function(){
            if(num == 0){
                document.querySelector(".cartitems").style.display="none"
            }

            currentitem.style.display="none"
            document.querySelector("#cartnum").innerHTML=num;
        })
    })
}

submit.addEventListener("click",function(){
    let email = document.getElementById("email");
    let pass= document.getElementById("pass");

    if(email.value== "" && pass.value == ""){
        alert("enter  your email and valid password")
    }
    else{
        alert("Thanks you logged in")
    }
})