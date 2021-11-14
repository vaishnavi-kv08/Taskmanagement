const taskCantainer =document.querySelector(".task__cantainer")
let globalTaskData =[];

const generateHTML =(taskData) =>
`<div id= ${taskData.id} class="col-md-6 col-mg-4 my-4">
   <div class="card">
     <div class="card-header  gap-2 d-flex justify-content-end">
      <button class="btn btn-outline-info">
       <i class="fas fa-pencil-alt"></i>
      </button>
      <button class="btn btn-outline-danger">
       <i class="fas fa-trash"></i>
      </button>
     </div>
     <div class="card-body">
      src =${taskData.image}
      alt="image"
       <h5 class="card-title mt-4">${taskData.title}</h5>
       <p class="card-text">${taskData.description}</p>
       <span class="badge bg-primary">${taskData.type}</span></h6>
     </div>
     <div class="card-footer">
       <button class="btn btn-outline-primary">open Task</button>
     </div>
   </div>
 </div>`
 const insertToDom =(content) =>
 testContainer.insertAdjacentHTML("beforehead",newCard);

const addNewCard =() => {
   const taskData = {
    id:`${Date.now()}`,
    title: document.getElementById("taskTitle").value,
    image:document.getElementById("imageURL").value,
    type:document.getElementById("taskType").value,
    description: document.getElementById("taskDescription").value,

   };
   globalTaskData.push(taskData);

   //update the local storage
   localStorage.setItem("taskyCA",JSON.stringify({cards:globalTaskData}));
  
   const newCard =generateHTML(taskData);
 //taskCantainer.insertAdjacentHTML("beforeend",newCard);
 insertToDom(newCard);
 document.getElementById("taskTitle").value ="";
 document.getElementById("imageURL").value ="";
 document.getElementById("taskType").value="";
 document.getElementById("taskDescription").value="";
 return;

 
};

const loadExistingCards = () => {

  //check localstorage
  const getData =localStorage.getItem("taskyCA");
  //parse JSON data if exits
  if(!getData) return;
  const taskCards =JSON.parse(getData);
  globalTaskData = taskCards.card;
  globalTaskData.map((taskData) => {
      //generate HTML code for these data
      const newCard =generateHTML(taskData);
 //inject in the DOM
insertToDom(newCard);
 return;
 const deleteCard =(event) => {
   const targetID = event.target.getAttribute("name");
   const elementType = event.Target.tagName;
   

 }



  });




};