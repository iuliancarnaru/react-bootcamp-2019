export const generateRandomFruit = array => {
    let index = Math.floor(Math.random() * array.length);
    return array[index];
}
export const removeFruit = (array, fruit) => {
    // let index = array.indexOf(fruit)
    // if (index > -1) {
    //     array.splice(index,1)
    // }
    // return array;

    return array.filter(item => item !== fruit);
}