function customFilter(array, fnRecibida) {
    const data = []
    for( let i = 0; i < array.length; i++) {
        if(fnRecibida(array[i])) {
            data.push(array[i])
        }
    }
    return data;
}
