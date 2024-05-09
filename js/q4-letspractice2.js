let items =[56,90,78,76,54];

/*let i = 0;
for (let val of items) {
    console.log(val);
    let offer = val /10;
    items[i] = items[i] -offer;
    //i++;
    console.log(items[i]);
    i++; 
}*/

for(let i=0; i<items.length; i++){
    let offer = items[i] /10;
    items[i] -=offer;
}

    console.log(items);



