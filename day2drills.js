function max(numbers){
    let maximumNo = numbers[0];
    let i = 0;
    let lengthOfArray = numbers.length;
    while(i < lengthOfArray){
        if(maximumNo < numbers[i]){            
            maximumNo = numbers[i];
        }
        i++;
    }
    return maximumNo;
}

function min(numbers){
    let minimumNo = numbers[0];
    let i = 0;
    let lengthOfArray = numbers.length;
    while(i < lengthOfArray){
        if(minimumNo > numbers[i]){            
            minimumNo = numbers[i];
        }
        i++;
    }
    return minimumNo;
}

const num = [2,3,4,5,6,7];
console.log(max(num));
console.log(min(num));

//Compute Average
