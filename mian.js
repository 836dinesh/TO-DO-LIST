const formEL=document.querySelector(".form");
const inputEl=document.querySelector(".input");
const ulEl=document.querySelector(".list");

let list=JSON.parse(localStorage.getItem("list"));
console.log(list)
if(list!=null){
    list.forEach((task)=>{
        
        toDoList(task)
    })
}


formEL.addEventListener("submit" , (event)=>{
    event.preventDefault();
    toDoList();
})

function toDoList(task){
    let newTask=inputEl.value;
    if(task){
        newTask=task.name;
    }
    const liEl=document.createElement("li");
    liEl.innerText=newTask;
    ulEl.appendChild(liEl);
    inputEl.value='';
    const check=document.createElement("div");
    check.innerHTML=`<i class="fa-solid fa-square-check">`;
    liEl.appendChild(check);
    const trash=document.createElement('div');
    trash.innerHTML=`<i class="fa-solid fa-trash">`;
    liEl.appendChild(trash);

    check.addEventListener('click',()=>{
       liEl.innerText=liEl.innerText+' (DONE)';
       liEl.appendChild(trash);
       updateLocalStorage();
    });

    trash.addEventListener('click',()=>{
       ulEl.removeChild(liEl);
       updateLocalStorage();
    });
    updateLocalStorage();
}
function updateLocalStorage(){
    liEls=document.querySelectorAll("li");
      list=[];
    liEls.forEach((liEl)=>{
        list.push({
            name:liEl.innerText
        })
    })
    localStorage.setItem('list' , JSON.stringify(list))
}