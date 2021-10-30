var mouseEvent = ""
color = "black";
lineWidth = 1.5;

canvas = document.getElementById("paintarea");
ctx = canvas.getContext("2d")

var start_x, start_y;

canvas.addEventListener("mousedown", mouse_down);

function mouse_down(e) {
    color = document.getElementById("colorinput").value;
    lineWidth = document.getElementById("widthinput").value;
    mouseEvent = "emousedown";
}
canvas.addEventListener("mouseup", mouse_up);

function mouse_up(e) {
    mouseEvent = "emouseup";
}
canvas.addEventListener("mouseleave", mouse_leave);

function mouse_leave(e) {
    mouseEvent = "emouseleave";
}

canvas.addEventListener("mousemove",mouse_move);
function mouse_move(e){

current_x = e.clientX-canvas.offsetLeft;
current_y = e.clientY-canvas.offsetTop;

if (mouseEvent == "emousedown"){
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = lineWidth;

    ctx.moveTo(start_x, start_y);
    ctx.lineTo(current_x,current_y);
    ctx.stroke();
}
start_x = current_x;
start_y = current_y;

}
function clearArea(){
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
}