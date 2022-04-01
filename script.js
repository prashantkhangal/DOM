//  Q1 : Write the code to access element which is having id as "text"

function txtId() {
    document.getElementById("text").innerText="Hey.."
}


// Q2 : Write the code to access element which is having tag as "h1"

function txtTag() {
    const text = document.getElementsByTagName("h1");
    text[0].innerText = "Hello.."
}


// Q3 : Write the code to access element which is having class as "box"

function txtClass() {
    const text = document.getElementsByClassName("box");
    text[0].innerText = "Bye.."
}


// Q4 : <h1> Hello </h1> Change the heading from "Hello" to "Hello World" using DOM functions.

function ChangeHeadingtxt() {
    document.getElementById("change").innerText = "Hello World";
}

// variable assign
// function ChangeHeadingtxt() {
//     const txt = document.getElementById("change");
//     txt.innerText = "Hello World";
//     txt.style.color = "red";
// }


// Q5 : Create three cards on HTML page and arrange them using flex property in row or horizontal direction and also Create button 
//     at the botton named "Change Flex Direction". When user click on this button, the cards arrangement should be changed to column or vertical direction

function flex() {
    document.getElementById("container").style.flexDirection = "column";
}


// Q7 : <h1> Hello </h1> Add one style Attribute and give text color as red and id attributes and give the value as "heading" in the above given h1 tag using DOM functions.

function btn() {
    let S = document.getElementsByTagName("h1")[0];
    S.setAttribute("id", "heading");
    document.getElementById("heading").style.color = "red";
}


// Q8 : Create an HTML page having content as "Hello World" and a Button Replace Text. When user will click on this button page content should be changed to "Welcome to Elevation Academy"

function replace() {
    document.getElementById("txt").innerText = "Welcome to Elevation Academy";
}


// Q9 : Write code to implement timer clock using JS -- display HH:MM:SS -- the time should keep updating every second.

function clock(){

    var hours=document.getElementById("hour");
    var minutes=document.getElementById("min");
    var seconds=document.getElementById("sec");
    var am=document.getElementById("ampm");
    
    var time=new Date();
    var hrs=time.getHours();
    var mins=time.getMinutes();
    var secs=time.getSeconds();
    var am_pm="AM";
    
    
    if(hrs==0)
    {
    
    hrs=12;
    
    }
    if(hrs>12){
    
    
        hrs=hrs-12;
        am_pm="PM"
    
    }
    if(hrs<10){
    
    hrs="0"+hrs;
    
    }
    if(mins<10){
    
        mins="0"+mins;
        
        }
    if(secs<10){
    
        secs="0"+secs;
        
        }
    
        hours.innerText=hrs;
        minutes.innerText=mins;
        seconds.innerText=secs
        am.innerHTML=am_pm
    
    }
    setInterval(clock,1000)
    

// Q10 : Create a select drop down for selecting Year 20-21, 21-22 etc. Print the item text selected.

function getOption() {
    const result = document.getElementById("option");
    const result2 = result.value 
    document.getElementById("select").innerText = result2
}