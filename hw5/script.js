//1
function showoptions(){
    const select = document.getElementById("options");
    const selected = select.options[select.selectedIndex].value;
    if (selected === "coffee"){
        alert("you chose coffee");
    }
    else if(selected === "tea"){
        alert("you chose tea");
        
    }
    else if(selected === "juice"){
        alert("you chose juice")
    }


}
//2
function checkDays(){
    const weekday = document.getElementById("weekday").value;

    if (
        weekday === "Monday" ||
        weekday === "Tuesday" ||
        weekday === "Wednesday" ||
        weekday === "Thursday" ||
        weekday === "Friday"
    ) {
        alert("Its school days :(");
    }
    else if(
        weekday === "Saturday" ||
        weekday === "Sunday"
    ) {
        alert("Its weekend :)");
    }
    else{
        alert("please write a weekday with a big first letter!");
    }
}

//3
function checkMonth(){
    const month = document.getElementById("month").value;

    if ( month == "12" || month == "1" || month == "2"){
        alert("Its winter!")
    }
    else if( month == "3" || month == "4" || month == "5"){
        alert("Its spring!")
    }
    else if( month == "6" || month == "7" || month == "8"){
        alert("Its summer!")
    }
    else if( month == "9" || month == "10" || month == "1"){
        alert("Its autumn!")
    }
    else{
        alert("Problem! Please enter 1-12!");
    }
} 

//4

function monthDay(){
    const monthdays = document.getElementById("monthday").value;

    if (monthdays == 1 ||
        monthdays == 3 ||
        monthdays == 5 ||
        monthdays == 7 ||
        monthdays == 8 ||
        monthdays == 10 ||
        monthdays == 12 
    ) {
        alert("This month has 31 days!")
    }
    else if(
        monthdays == 4 ||
        monthdays == 6 ||
        monthdays == 9 ||
        monthdays == 11
    ) {
        alert("this month has 30 days!")
    }
    else if(
        monthdays == 2
    ) {
        alert("this month has 28 or 29 days!")
    }
    else{
        alert("Please enter a number 1-12!")
    }
}

//5

function color(){
    const trafficlight = document.getElementById("color").value;

    if ( trafficlight === "Green"){
        alert("go!")
    }
    else if ( trafficlight === "Yellow"){
        alert("ready!")
    }
    else if ( trafficlight === "Red"){
        alert("stop!")
    }
    else{
        alert("Please enter a color Green, Yellow or Red using a big first letter!")
    }
}