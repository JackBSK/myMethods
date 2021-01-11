function myFind(array, fn) {
    let data = 0;
    for(let i = 0; i < array.length; i++) {
        if(fn(array[i])) {
            data = array[i];
        }
    }
    return data;
}