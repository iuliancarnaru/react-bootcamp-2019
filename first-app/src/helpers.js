export const generateRandomFruit = array => array[Math.floor(Math.random() * array.length)];
export const removeFruit = (array, fruit) => {
    // let index = array.indexOf(fruit)
    // if (index > -1) {
    //     array.splice(index,1)
    // }
    // return array;

    return array.filter(fruits => fruits !== fruit);
}