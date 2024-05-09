/*let arr = ["cumilla", "dhaka","pabna"];
//arr.forEach(function printval(val){
    arr.forEach((val ,idx ,arr) => {
    //console.log(val);
    console.log(val.toUpperCase() , idx , arr);

});*/

/*let nums =[23,43,65,76,87];

/*nums.forEach((num) =>
{
    console.log(num * num); //num**2
});*/

/*let newArr = nums.map((val) => {
    return val * 2 ;
});
console.log(newArr);
*/

/*let arr = [2,5,6,7,8];//odd !==0

let evenArr = arr.filter((val) =>
{
//return val % 2 == 0;
return val > 3;
});

console.log(evenArr);*/

let arr = [1,4,5,6,7];
const output = arr.reduce((res , curr) =>{
    return res + curr;
});
console.log(output);
 
