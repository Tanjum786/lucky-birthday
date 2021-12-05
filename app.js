var dateOfBirth=document.querySelector("#date-of-birth");
var luckyNumber=document.querySelector("#lucky-number");
var checkButton=document.querySelector("#check-number");
var outputBox=document.querySelector("#output-Box")

function compareValue(sum,luckyNumber){
    if (sum%luckyNumber==0) {
        outputBox.innerText="your BIRTHDAY is lucky ✨✨";
        
    }else{
        outputBox.innerText="your BIRTHDAY is not lucky 😞😞"
    }
}
function checkBirthdayIslucky(){
    var dob=dateOfBirth.value;
    var sum=calculatesum(dob)
    if (sum&&dob) {
        compareValue(sum,luckyNumber.value)

    }else{
        outputBox.innerText="please Enter both the fields 😡😡";
    }
}
function calculatesum(dob){
    dob=dob.replaceAll("-","");
    var sum=0;
    for (let index = 0; index < dob.length; index++) {
        sum+=Number( dob[index]);
        
    }
    return(sum)
}
checkButton.addEventListener("click",checkBirthdayIslucky)