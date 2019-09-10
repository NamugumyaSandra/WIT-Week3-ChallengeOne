function arraySort(anArray) {
    let myObject ={'evens':[],'odds':[],'chars':[]};
    if(typeof anArray !== "object"){
        return 'invalid input'
    }else{
        let newArray = anArray.sort();
        for (let i = 0; i < newArray.length; ++i){
            if(newArray[i] % 2 === 0){
                myObject.evens.push(newArray[i]);
            }else if (newArray[i] % 2 === 1){
                myObject.odds.push(newArray[i]);
            } else {
                myObject.chars.push(newArray[i]);
            }
        }
        return myObject;
    }
}
arraySort([4, 9, 2, 3, 5, 1, 'd', 'a', 'c', 'f']);


module.exports = arraySort;