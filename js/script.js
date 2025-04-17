const mark = 40
const name = "Md Kamruzzaman"

if(mark < 0 || mark > 100 ){
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