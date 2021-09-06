// -------------------------------------------random pin generate function-------------------
function generatePin(){
   const formControl = document.getElementById("display-pin");

  let roundedNum=Math.round( Math.random()*10000);
//   console.log(roundedNum);

if((roundedNum+'').length==4){

    formControl.value=roundedNum;
    // return (formControl.value);
}

else{
    return generatePin;
}

}

//-------------------------------------------- matching section--------------------------------

function verifyPin(){
    const formControl = document.getElementById("display-pin");
    const display=document.getElementById("typed-numbers");
    const sucess=document.getElementById("notify-success");
    const fail=document.getElementById("notify-fail");

   if(display.value>0){
       if((formControl.value==display.value)>0){

            // console.log(display);
            sucess.style.display='block';
            fail.style.display='none';

            var audio = new Audio('mp3/success.wav');
            audio.play();

        }
        else {
        
            sucess.style.display='none';
            fail.style.display='block';

        var audio = new Audio('mp3/Danger.mp3');
        audio.play();
        ateempt();

        }
       
   }
// -----------------------------------------attempt count function----------------------
function ateempt(){

 const attemptNum=document.getElementById("attempt");
 const notifyAcced=document.getElementById("notify-exceed");
 const fail=document.getElementById("notify-fail");


const NumOfAttpt= eval(attemptNum.innerText);
// console.log(NumOfAttpt);

if((attemptNum.innerText)>0){
    attemptNum.innerText=NumOfAttpt-1;
    if((attemptNum.innerText)==0){
        notifyAcced.style.display='block';
        fail.style.display='none';

    }
    
}
}}


// -------------------------------function section-----------------------------------

document.getElementById("key-pad").addEventListener('click',function(event){

let getNumber=event.target.innerText;
// console.log(getNumber);

const display=document.getElementById("typed-numbers");

 if(!isNaN(getNumber)){
const previous=display.value;

display.value=previous+getNumber;


}

if(getNumber=="C"){
    display.value='';
}

if(getNumber=="<"){
    // constdisplayString=display+'';
    const displayString=display.value

    //  console.log(display);
     display.value=displayString.substr(0,displayString.length-1);


    
}


})