var numberOfButton=document.querySelectorAll(".drum").length;

for(var i=0;i<numberOfButton;++i)
{
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        alert("i got clicked")
    });
    //adding event to each button
}


