function myMap(array, fn) {
    const data = [];
    for (let i = 0; i < array.length; i++) {
        data.push(fn(array[i], i));
    }
    return data;
}
