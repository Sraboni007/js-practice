/*let sum = 0;
let n =50
for (let i =1; n<=5; i++);{
sum = sum + i;
}
console.log("sum = ",sum);
console.log("loop has ended");*/

/*let i = 1;
while(i <=5 ) {
    console.log("i =", i)
    i++;
}*/

/*let i = 1;
do{
    console.log("its me !");
    i++
}
while( i <=10);*/

/*let str = "me";
for (let i of str){
    console.log("i=",i)
}*/
//for-of-loop
/*let str = "javascript";

let size = 0;
for(let i of str){
    console.log("i=",i);
    size++
}
console.log("string size =", size);*/

//for in loop
let student ={
    name: "sraboni",
    age :24,
    cgpa: 3.72,
    ispass: true,

};

//for (let i in student ){
  //  console.log(i);
//}
for (let key in student){
    console.log("key=", key, "value =", student[key]);
}

   
