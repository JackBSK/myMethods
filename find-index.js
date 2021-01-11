function customFindIndex(array, fn) {
    let data = -1;
    for(let i = 0; i < array.length; i++) {
        if(fn(array[i])) {
            return i;
        }
    }
}
