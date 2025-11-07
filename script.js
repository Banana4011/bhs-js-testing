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

function firstLast6(arr){
    return(arr[0] == 6 || arr[arr.length-1] ==6);
}

function has23(arr){
    return(arr[0]==3||arr[1]==3||arr[0]==2||arr[1]==2);
}

function fix23(arr){
    if(arr[0]==2 && arr[1]==3){
        arr[1] = 0
    } else if (arr[1]==2 && arr[2]==3){
        arr[2] = 0
    }
    return arr;
}

function countYZ(str){
    let count = 0;
    str = str.toLowerCase();
    if (str[str.length-1] == "y" || str[str.length-1] == "z"){
        count++
    }
    for(let i = 0; i < str.length; i++){
        if(str[i] == " "){
            if(str[i-1] == "z" || str[i-1] == "y"){
                count++
            }
        }
    }
    return count;
}

function endOther(str1, str2){
    return((str1.toUpperCase()).substring(str1.length-str2.length) == str2.toUpperCase() || (str2.toUpperCase()).substring(str2.length-str1.length) == str1.toUpperCase());
} 

function starOut(str){
    let str2 = "";
    for (let i = 0; i<str.length; i++){
        if(str[i] != "*" && str[i+1] != "*" && str[i-1] != "*"){
            str2 += str[i];
        }
    }
    return str2;
}

function getSandwich(str){
    let start;
    let end;
    for(let i = 0;  i<str.length; i++){
        if ((str.substring(i, i+5)).toUpperCase() == "BREAD"){
            start = i+5;
            break;
        }
    }
    for (let i = str.length-1; i>=0; i--){
        if ((str.substring(i-4, i+1)).toUpperCase() == "BREAD"){
            end = i-4;
            break;
        }
    }
    if (start<end){
        return str.substring(start, end);
    } else {
        return "";
    }
}

function canBalance(arr){
    let canBalance = false;
    for (let i = 0; i< arr.length; i++){
        let sum1 = 0;
        for (let j = 0; j <= i; j++){
            sum1+=arr[j];
        }
        let sum2 = 0;
        for (let z = arr.length-1; z>i; z--){
            sum2+=arr[z];
        }
        if (sum1 == sum2){
            canBalance = true;
        }
    }
    return canBalance;
}

function countClumps(arr){
    let clumps = 0;
    for (let i = 0; i<arr.length; i++){
        if(arr[i] == arr[i+1]){
            if(arr[i] != arr[i-1]){
                clumps++;
            }
        }
    }
    return clumps;
}

function sameEnds(str){
    let placeholder;
    for(let i = str.length-1; i>=0; i--){
        if (str[0] == str[i]&& i>0){
            if(i < (str.length/2)){
                break;
            }
            placeholder = i;
        }
    }
    let endString = "";
    for(let i = 0; i<str.length; i++){
        if(str[i] == str[i+placeholder]){
            endString += str[i];    
        } else {
            if (i+placeholder<str.length-1){
                return"";
            } else {
                break;
            }
        } 
    }
    return endString;
}
