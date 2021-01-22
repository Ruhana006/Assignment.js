// https://github.com/Ruhana006/Assignment.js

// kilometerToMeter
function kilometerToMeter(km){
     var meter =Math.round( km * 1000);
    return meter;
}

// megaFriend
function megaFriend(arr){
    var longestName = '';
    for(var i=0; i< arr.length; i++){
        var currentElement = arr[i];
        if(currentElement.length>longestName.length){
            longestName = arr[i];
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
    var totalCost =0;
    if(days <=10){
        totalCost = days * 100;
    }
    else if(days <=20){
        var firstTenDays = 10*100;
        var remainingDays = days -10;
        var secondTenDays = remainingDays*80;
        totalCost = firstTenDays + secondTenDays;
    }
    else{
        var firstTenDays = 10*100;
        var secondTenDays = 10*80;
        var remainingDays = days - 20;
        var overTwentyDays = remainingDays*50;
        totalCost= firstTenDays + secondTenDays + overTwentyDays;
    }
    return totalCost;
} 

