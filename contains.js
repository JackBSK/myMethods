function myContains(array, fn) {
    let data = false;
    for(let i = 0; i < array.length; i++) {
        if(fn(array[i])) {
            return true;
        }
    }
}
