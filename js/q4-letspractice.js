let marks =[45,67,89,78,90,34];
let sum =0;

for(let val of marks) {
    sum = sum +val;
}
let avg = sum / marks.length;
console.log(avg);