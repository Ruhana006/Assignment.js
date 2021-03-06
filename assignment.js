// https://github.com/Ruhana006/Assignment.js

// kilometerToMeter
function kilometerToMeter(km) {
    if (km < 0 ) {
        return 'Distance cannot be negative'
    }
    var meter = Math.round(km * 1000);
    return meter;
}

// budgetCalculator
function budgetCalculator(watch, mobile, laptop) {
    if (watch < 0 || mobile < 0 || laptop < 0) {
        return 'Error. input cannot be negative'
    }
    var result = watch * 50 + mobile * 100 + laptop * 500;
    return result;
}

// megaFriend
function megaFriend(arr) {
    var longestName = '';
    if (arr.length == 0) {
        return 'Error! please give a valid array input'
    }
    for (var i = 0; i < arr.length; i++) {
        var currentElement = arr[i];
        if (currentElement.length > longestName.length) {
            longestName = arr[i];
        }
    }
    return longestName;
}

// hotelCost
function hotelCost(days) {
    var totalCost = 0;
    if (days < 0) {
        return 'Error! negative value is not valid'
    }
    if (days <= 10) {
        totalCost = days * 100;
    }
    else if (days <= 20) {
        var firstTenDays = 10 * 100;
        var remainingDays = days - 10;
        var secondTenDays = remainingDays * 80;
        totalCost = firstTenDays + secondTenDays;
    }
    else {
        var firstTenDays = 10 * 100;
        var secondTenDays = 10 * 80;
        var remainingDays = days - 20;
        var overTwentyDays = remainingDays * 50;
        totalCost = firstTenDays + secondTenDays + overTwentyDays;
    }
    return totalCost;
}




