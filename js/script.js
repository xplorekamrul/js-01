const formVlaues = document.querySelector("#marksheet");
formVlaues.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.querySelector("#name").value;
  const rollNo = document.querySelector("#rollno").value;
  const math = Number(document.querySelector("#math").value);
  const english = Number(document.querySelector("#english").value);
  const physics = Number(document.querySelector("#physics").value);
  const chemistry = Number(document.querySelector("#chemistry").value);
  const higherMath = Number(document.querySelector("#higherMath").value);
  const result = document.querySelector("#result");

  const average = (math + english + physics + chemistry + higherMath) / 5;

  console.log(average);

  if ((math > 32) && (english > 32) && (physics > 32) && (chemistry > 32) && (higherMath > 32)) {

    if (average >= 33 && average < 40) {
      alert(name + " " + "you got D Grade");
      result.innerHTML = name + " " + "You Got D Grade";
    } else if (average >= 40 && average < 50) {
      alert(name + " " + "you got C Grade");
      result.innerHTML = name + " " + "You Got C Grade";
    } else if (average >= 50 && average < 60) {
      alert(name + " " + "you got B Grade");
      result.innerHTML = name + " " + "You Got B Grade";
    } else if (average >= 60 && average < 70) {
      alert(name + " " + "you got A- Grade");
      result.innerHTML = name + " " + "You Got A- Grade";
    } else if (average >= 70 && average < 80) {
      alert(name + " " + "you got A Grade");
      result.innerHTML = name + " " + "You Got A Grade";
    } else if (average >= 80 && average <= 100) {
      alert(name + " " + "you got A+ Grade");
      result.innerHTML = name + " " + "You Got A+ Grade";
    }
  } else {
    alert(name + " " + "you are Faild ");
    result.innerHTML = name + " " + "you are failed";
    result.style.color = "red"
  }
  result.style.backgroundColor = "black";
});

// const header = document.querySelector("h1")
// const button = document.querySelector("button")

// const MyFn = () => {
//    header.addEventListener("click", ()=> {
//       header.style.color = "red"
//    })
// }

// MyFn()

// const tasks = [
//    {day: "Saturday" , task: "Grocery shopping", completed: false },
//    {day: "Sunday" , task: "Weekly meal prep", completed: false },
//    {day: "Monday" , task: "Team meeting", completed: true },
//    {day: "Tuesday" , task: "Project deadline", completed: false },
//    {day: "Wednesday" , task: "Gym workout", completed: true },
//    {day: "Thursday" , task: "Doctor appointment", completed: false },
//    {day: "Friday" , task: "Vacation with Friends", completed: true },
// ]

// function Mytask (){
//    tasks.map(item =>{
//       // if(item.completed === true){
//       //    console.log(item.task + " " + item.day + " " + "Completed" );
//       // }
//       // else {
//       //    console.log(item.task + " " + item.day + " " + "Not Completed" );
//       // }

//       console.log(item.day , " " , item.task , " " , (item.completed ? "Completed" : "Not Completed"));
//    })
// }

// Mytask()

// // ========================== Mark sheet ============================

// const mark = 91
// const name = "Md Kamruzzaman"

// if(mark < -1 || mark > 100 ){
//    console.log("Invalid Mark Entered");
// }
// else if(mark >= 33 && mark <40 ){
//    console.log(name + " " + "you got D grade");
// }
// else if(mark >= 40 && mark <50 ){
//    console.log(name + " " + "you got C grade");
// }
// else if(mark >= 50 && mark <60 ){
//    console.log(name + " " + "you got B grade");
// }
// else if(mark >= 60 && mark <70 ){
//    console.log(name + " " + "you got A- grade");
// }
// else if(mark >= 70 && mark <80 ){
//    console.log(name + " " + "you got A grade");
// }
// else if(mark >= 80 && mark <=100 ){
//    console.log(name + " " + "you got A+ grade");
// }
// else {
//    console.log(name + " " + "you are Faild ");

// }
