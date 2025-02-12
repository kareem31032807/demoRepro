// const heading = document.getElementById("main-heading");

// // console.log(heading.childNodes);

// heading.style.color="red";
// heading.style.fontSize="4rem";
// heading.style.backgroundColor="blue"

// const list = document.getElementsByClassName("list-items")
// console.log(list);

// const lists = document.querySelector(".list-items")
// lists.textContent;
// lists.style.colors="blue"
// console.log(lists)

// const lists = document.querySelectorAll(".list-items");
// console.log(lists[2],innerHTML)





// //event

const btn2 = document.querySelector(".btn2");

function alertbtn(){
    alert("i am a js developer")
}
btn2.addEventListener("click", alertbtn)

const box3 = document.querySelector(".box3");
function mybox(){
    box3.style.backgroundColor="green"
}
document.addEventListener("mouseover", mybox)