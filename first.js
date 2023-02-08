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

let array1 = [1,2,3,4,5,6,7]

let html = '';
for(let index = 0; index<array1.length; index++)

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




 document.getElementById('Taskbox').innerHTML = html;
  function addList()
  {
    let inputvalue = document.getElementById('inputValue');
    console.log(inputvalue)

  }

  
 
}




