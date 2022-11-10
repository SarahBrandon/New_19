let btn=document.createElement("button");
btn.innerHTML="About";
btn.onclick=function(){
    alert("Button is clicked");
};

//If I add any of the following lines, it doesn't create any buttons and I'm basically back at square one.
//let btn=document.createElement("Button");
//btn.innerHTML="Social";
//btn.onclick=function(){
    //alert("Button is clicked");
//};

//let btn=document.createElement();
//btn.innerHTML="Resume";
//btn.onclick=function(){
    //alert("Button is clicked");
//};

document.body.appendChild(btn);

$("#myID").on("click", function(){
    console.log("You clicked on #myID");
    $(".fadeMe").fadeToggle("slow");
});