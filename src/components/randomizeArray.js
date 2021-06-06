const generateRandomizedArray = ({arraySize} = {}) =>{
    let randomizedArray = [];

    for(let i = 0; i < arraySize;i++){
        randomizedArray.push(Math.floor(Math.random() * (300 - 50) + 50));
    }
    return randomizedArray;
}

export default generateRandomizedArray;