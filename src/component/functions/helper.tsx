

// export  default function choice(items){
//     let idx= Math.floor(Math.random() * items.length)
// }




export  function choice(items:any){
    let idx = Math.floor(Math.random() * items.length);
    return items [idx];
}

export  function remove(items:any, item:any){
    for(let i = 0; i< items.length; i ++){
     if(items[i] === item){
         return [...items.slice(0,i),...items.slice(i+1)];
     }
    }
}




