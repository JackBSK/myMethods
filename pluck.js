function myPluck(arr,fn){ 
    let data = []; 
    for (let i = 0; i < arr.length; i++){ 
    if (arr[i].propiedad(fn)){ 
        data.push(arr[i][fn]) 
        } 
    } 
    return data; 
} 
