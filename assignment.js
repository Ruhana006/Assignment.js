// // kilometerToMeter
function kilometerToMeter(km){
     var meter =Math.round( km * 1000);
    return meter;
}

// megaFriend
function megaFriend(arr){
    let longestString = '';
    for(let i=0; i< arr.length; i++){
        let currentElement = arr[i];
        if(currentElement.length>longestString.length){
            longestString = arr[i];
        }
        }
    return longestString;
    }

// budgetCalculator

function budgetCalculator(watch, mobile, laptop){ 
    var result = watch*50 + mobile*100 +laptop*500;
    return result;
}


// hotelCost
function hotelCost(days){
    var forTenDays = days *100;
    var forTwentyDays= days *80;
    var forOverTwentyDays = days *50;
    if(days <=10){
        return forTenDays;
    }
    else if(days>10 && days<=20){
        return forTwentyDays;
    }
    else if(days>20){
        return forOverTwentyDays;
    }
}
