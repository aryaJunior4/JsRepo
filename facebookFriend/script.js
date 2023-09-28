let friends = document.getElementById("add");
let relation = document.querySelector("h5");

let flag = 0;

friends.addEventListener("click",function (){
    if (flag == 0){
        relation.innerHTML = "Friends";
        relation.style.color = "green"
        friends.innerHTML = "Remove Friend"
        flag = 1;
    }else{
        relation.innerHTML = "Strangers"
        relation.style.color = "red"
        friends.innerHTML = "Add Friend"
        flag = 0;
    }
});


