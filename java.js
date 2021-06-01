var images =Array.from( document.querySelectorAll(".item img"));
var box = document.querySelector(".box ");
var change =document.querySelector(".box div ");
var right = document.getElementById("right")
var left = document.getElementById("left")
var imgindex = 0;
var mouse = document.getElementById("mouse");
console.log(mouse);

// console.log(left);

// console.log(images);
// console.log(change);

for(var i =0 ;i < images.length;i++)
{

    images[i].addEventListener("click",show)
}

function show(e)
{
   var imgsrc =e.target.src;
box.style.transform="scale(1,1)";
change.style.backgroundImage="url(" + imgsrc  +")";
imgindex = images.indexOf(e.target);
// console.log(imgindex)
} 
function hide()
{
    box.style.transform="scale(0,0)";
}
right.addEventListener("click",next);
left.addEventListener("click",goback);

function next()
{
    // var x = imgindex++;
    // console.log(x);
    change.style.backgroundImage="url(" +images[imgindex].src+")";
    // change.style.backgroundImage="url(" +images[x].src+")";
    var x = imgindex++;
    // console.log(x);
    if(imgindex == images.length)
    {
        imgindex = 0;
    }

}
function goback()
{
    // alert("jkk")
    // var x = imgindex++;
    // console.log(x);
    // change.style.backgroundImage="url(" +images[imgindex].src+")";
    // change.style.backgroundImage="url(" +images[x].src+")";
    var x = imgindex--;
    console.log(x);
    if(imgindex < 0)
    {
        imgindex = images.length-1;
    }
    change.style.backgroundImage="url(" +images[imgindex].src+")";
}
document.addEventListener("keydown",come)
function come(e)
{
    // console.log(e)
    if(e.key == "ArrowRight" )
    {
        next();
    }
    else if(e.key == "ArrowLeft" )
    {
        goback();
    } 
    else if(e.key == " " )
    {
        hide();
    } 

    else if(e.key == "Escape")
    {
        hide();
    } 

}
document.addEventListener("mousemove",mousee)

function mousee(e)
{
    console.log(e)
    var x = e.clientX;
    var y = e.clientY;
    // console.log(x)
    mouse.style.left= x +"px";
    mouse.style.top = y + "px";
}