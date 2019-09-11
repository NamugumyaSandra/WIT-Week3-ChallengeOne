function getMissingNumbers(anArray){
    if(typeof anArray !== "object" || anArray.length === 0){
        return 'Invalid input'
    }else{
        let arrayLength = Math.max(...anArray);
        let missingNumbers = [];
        for (let i = 1; i < arrayLength; i++){
            if(anArray.indexOf(i) < 0){
                missingNumbers.push(i);
            }
        }
        return missingNumbers;
    }

}

getMissingNumbers([1,2,4,6,8,9]);

module.exports = getMissingNumbers