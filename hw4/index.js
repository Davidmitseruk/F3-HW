//1
 function checkFields(){
    const fieldValue1 = document.getElementById("text-one").value;
    const fieldValue2 = document.getElementById("text-two").value;
    if (fieldValue1 !== "" && fieldValue2 !== "") {
      alert("all fields are filled");
    }else{
      alert("not all fields full");
   }
    
 }

//2
function Checksum() {
   const numberValue1 = parseFloat(document.getElementById("number-one").value);
   const numberValue2 = parseFloat(document.getElementById("number-two").value);
   if (numberValue1 + numberValue2 > 10){
      alert("Value more than 10");
   } else {
      alert("Value less or is 10")
   }

}
//3
function checkText(){
   const inputValue = document.getElementById("text-field").value;
   if (inputValue.includes("Javascript")){

      alert("Text does not have Javascript");
} else {
   alert("Text has javascript");
}

}


//4

function checknumber(){
   const numberValue = parseFloat(document.getElementById("number-range").value);
   if(!isNaN(numberValue) && numberValue > 10 && numberValue < 20){
      alert("Number is between 10-20");
   } else{
      alert("Number not between 10-20");
   }
}