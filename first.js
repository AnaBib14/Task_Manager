const LOCALE =[

  { 'task.error.message':'ველი ცარიელია!',
     'task.success.message':'წარმატებით დაემატა'


}

]





let array = [
    {
      id: '123gt45bcvrtt00',
      completed: true,
      name: "JavaScript",
    },
    {
        id: '34gth6750u3',
        completed: false,
        name:"Html & Css"
    },
   

];



let html = '';
for(let index = 0; index<array.length; index++)

 {

  html += `
  <div class="boxmodel2 ${array[index].completed ? 'task' : ' '}">
       <h3> 
      <span class="done" ></span>
         ${array[index].name}
      </h3>
      <div class="buttons">
         <a class="edit" href="edit_task.html"></a>
         <button class="delete_button"></button>
         
         </div>
        
 </div>


 

 `;

 }

 document.getElementById('Taskbox').innerHTML = html;


 function addList(){

  
  let message = document.getElementById('errorMessage')
  let inputvalue = document.getElementById('inputV').value;

  if(inputvalue.length===0){
   message.classList.add('error')
   message.innerText = getCaption('task.error.message');
    setTimeout(function()  {
      message.classList.remove('error')
    },2000)
   
    
  }

  else{
  
  
array.push(
  {
    name:inputvalue,
    id:124564455,
    completed:false


    
  })
  message.classList.add('success')
  setTimeout(function()  {
    message.classList.remove('success')
    
  },2000)
  message.innerText = getCaption('task.success.message');
  drawTask();

     }


    }
   

function drawTask(){
  
  let html = '';
  for(let index = 0; index<array.length; index++)
  
   {
  
    html += `
    <div class="boxmodel2 ${array[index].completed ? 'task' : ' '}">
         <h3> 
        <span class="done" ></span>
           ${array[index].name}
        </h3>
        <div class="buttons">
           <a class="edit" href="edit_task.html"></a>
           <button class="delete_button"></button>
           
           </div>
          
   </div>
  
  
   
  
   `;
  
   }
   document.getElementById('Taskbox').innerHTML = html;
   }



  drawTask();


function getCaption(key){
return LOCALE[key]


}
