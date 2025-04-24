const tasks = [
   {day: "Saturday" , task: "Grocery shopping", completed: false }, 
   {day: "Sunday" , task: "Weekly meal prep", completed: false }, 
   {day: "Monday" , task: "Team meeting", completed: true }, 
   {day: "Tuesday" , task: "Project deadline", completed: false }, 
   {day: "Wednesday" , task: "Gym workout", completed: true }, 
   {day: "Thursday" , task: "Doctor appointment", completed: false }, 
   {day: "Friday" , task: "Vacation with Friends", completed: true }, 
]


function Mytask (){
   tasks.map(item =>{
      // if(item.completed === true){
      //    console.log(item.task + " " + item.day + " " + "Completed" );
      // }
      // else {
      //    console.log(item.task + " " + item.day + " " + "Not Completed" );
      // }

      console.log(item.day , " " , item.task , " " , (item.completed ? "Completed" : "Not Completed")); 
   })
}

Mytask()





// ========================== Mark sheet ============================

const mark = 91
const name = "Md Kamruzzaman"

if(mark < -1 || mark > 100 ){
   console.log("Invalid Mark Entered");
}
else if(mark >= 33 && mark <40 ){
   console.log(name + " " + "you got D grade");
}
else if(mark >= 40 && mark <50 ){
   console.log(name + " " + "you got C grade");
}
else if(mark >= 50 && mark <60 ){
   console.log(name + " " + "you got B grade");
}
else if(mark >= 60 && mark <70 ){
   console.log(name + " " + "you got A- grade");
}
else if(mark >= 70 && mark <80 ){
   console.log(name + " " + "you got A grade");
}
else if(mark >= 80 && mark <=100 ){
   console.log(name + " " + "you got A+ grade");
}
else {
   console.log(name + " " + "you are Faild ");
   
}



