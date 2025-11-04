/*
 * This file is where you should write your code. Remember to click
 * Run after you make changes to re-run the tests with your new code.
 */

//python3 -m http.server

function sleep_in(weekday,vacation){
    return (vacation || !weekday);
}

function monkey_trouble(a_smile, b_smile){
    return (a_smile == b_smile);
}

function string_times(str,num){
    let string = "";
    for (let i = 0; i<num; i++){
        string += str;
    }
    return (string);
}

function front_times(str, num){
    str = str.substring(0,3);
    let string = "";
    for (let i = 0; i<num; i++){
        string+=str;
    }
    return (string);
}

function string_bits(str){
    let string = "";
    for (i = 0; i < str.length; i+=2){
        string += str.substring(i,i+1);
    }
    return (string);
}

function caughtSpeeding(mph, bday){
    if(bday){
        mph-=5;
    }
    if(mph<=60){
        return 0;
    } else if (mph<=80){
        return 1;
    } else {
        return 2
    }
}

function fizz_buzz(num){
    if(num%3 == 0){
        if(num%5 == 0){
            return("FizzBuzz");
        } else {
            return("Fizz");
        }
    } else if(num%5 == 0) {
        return("Buzz");
    } else {
        return(num + "!");
    }
}
function specialEleven(num){
    return(num%11==0 || (num-1)%11==0);
}

function withoutDoubles(roll1, roll2, withoutDoubles){
    if (roll1 == roll2 && withoutDoubles){
        if (roll1 == 6){
            roll1 = 1
        } else {
            roll1++
        }
    } return (roll1+roll2);
}

function left2(word){
    return(word.substring(2) + word.substring(0, 2));
}