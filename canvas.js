let canvas = document.querySelector('#myCanvas');
let ctx = canvas.getContext('2d');

let points = [];
let beginPoint = null ;
let painting = "pen";
let currentMenu = "icon-pen";
let textClass = "mytext";
let isDrawing = false;
let setcolor;
let fontSize = '20';
let last = 0;
// return and forward
let canvasHistory = [];
let canvasSize = [];
let step = 0;
let isEraser = false;
let density = 20;
let clientX, clientY, timeout;

canvas.width = 600;
canvas.height = 480;

ctx.strokeStyle = 'black';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 10;
window.onload = function(){
    saveToHistory();
    let music = document.getElementById("bgm");
    //music.play();
    document.getElementsByClassName("circle-dot")[0].style.transform = 'scale('+ (parseInt(document.getElementById("size-range").value)/10) +')';
}

let attributre = {
    style: 'black',
    lineJ: 'round',
    lineC: 'round',
    fontS: 'Arial',
    lineW: 10
};

document.getElementById("myColor").onchange = function(){
    attributre.style = document.getElementById("myColor").value;
}
document.getElementById("size-range").onchange = function(){
    document.getElementsByClassName("circle-dot")[0].style.transform = 'scale('+ (parseInt(document.getElementById("size-range").value)/10) +')';
    attributre.lineW = parseInt(document.getElementById("size-range").value)/10 * 2;
}
document.getElementById("font-style").onchange = function(){
    attributre.fontS = document.getElementById("font-style").value;
}
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let input = document.getElementById("number");
input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    fontSize = input.value;
  }
});
input.onchange = function(){
    fontSize = input.value;
}

function Mouse(style) {
    canvas.style.cursor = style;
}

document.querySelector(".container").addEventListener( "click", ( e ) => {
    ctx.globalCompositeOperation = 'source-over';
    switch (e.target.dataset.type){
        case "pen":
            painting = "pen";
            classToggle("icon-pen");
            Mouse('url("./img/pen_mouse.png"),default');
            break;
        case "line":
            painting = "line";
            classToggle("icon-line");
            Mouse('url("./img/line_mouse.png"),default');
            break;
        case "spray":
            painting = "spray";
            classToggle("icon-spray");
            Mouse('url("./img/spray_mouse.png"),default');
            break;
        case "circle":
            painting = "circle";
            classToggle("icon-cir");
            Mouse('url("./img/cir_mouse.png"),default');
            break;
        case "rect":
            painting = "rect";
            classToggle("icon-rect");
            Mouse('url("./img/rec_mouse.png"),default');
            break;
        case "tran":
            painting = "tran";
            classToggle("icon-tran");
            Mouse('url("./img/tri_mouse.png"),default');
            break;
        case "eraser":
            painting = "eraser";
            ctx.globalCompositeOperation = 'destination-out';
            isEraser = true;
            classToggle("icon-eraser");
            Mouse('url("./img/rubber_mouse.png"),default');
            break;
        case "delete":
            del();
            if(painting != "eraser"){
                ctx.globalCompositeOperation = 'source-over';
            }
            break;
        case "text":
            Mouse("text");
            painting = "text";
            classToggle("icon-text");
            break;
        case "img":
            let load = document.getElementById('file_input');
            load.click();
            break;
        case "undo":
            back();
            break;
        case "redo":
            forward();
            break;
        case "save":
            save();
        break;
    }
} , false)

canvas.addEventListener('mouseout', () => isDrawing = false);
canvas.addEventListener('mouseup', up);
async function up(e) {
    clearTimeout(timeout);
    await lastdraw(e);

    if(painting != "text"){
        ctx.restore();
        saveToHistory();
        last = null;
        isDrawing = false;
        points = [];
    }
};
function lastdraw(e){
    return new Promise((resolve, reject) => {
        const { x, y } = points[ points.length - 1 ];
        points.push({x, y});
        if( painting === "line"){
            drawLine(last, {x, y});
        } else if(painting === "circle"){
            ctx.putImageData(canvasHistory[step - 1 ], 0, 0);
            ctx.beginPath(); 
            ctx.fillStyle = attributre.style;
            ctx.arc(last.x, last.y, Math.sqrt(Math.pow((x-last.x), 2) + Math.pow((y-last.y), 2)) , 0, 2*Math.PI, true);
            ctx.fill();
        } else if(painting === "rect"){
            ctx.putImageData(canvasHistory[step - 1 ], 0, 0);
            ctx.beginPath(); 
            ctx.fillStyle = attributre.style;
            ctx.fillRect(last.x, last.y, x-last.x, y-last.y);
        } else if(painting === "tran"){
            ctx.putImageData(canvasHistory[step - 1 ], 0, 0);
            ctx.beginPath(); 
            ctx.strokeStyle = attributre.style;
            ctx.fillStyle = attributre.style;
            ctx.moveTo(last.x, last.y);
            ctx.lineTo(x, last.y);
            ctx.lineTo(last.x+(x-last.x)/2, y);
            ctx.fill();
        } else if ((painting==="pen"||painting==="eraser") && points.length > 3) {
            const lastTwoPoints = points.slice(-2);
            const controlPoint = lastTwoPoints[0];
            const endPoint = lastTwoPoints[1];
            drawpen(last, controlPoint, endPoint);
        }
        resolve();
    });
}

let t1=0, t2=0;
canvas.addEventListener('mousedown', (e) => {
    if(painting === "text"){
        isDrawing = false; 
    } else{
        isDrawing = true;
    }
    let {x, y} = getPos(e);
    points.push({x, y});
    last = {x, y};
    ctx.save();
    if(painting === "text"){
        let x1 = (last.x+240).toString() + 'px';
        let y1 = (last.y+280).toString() + 'px';
        let text = showTextarea(x1, y1);
        if(document.querySelector('.mytext').className == 'mytext'){
            t1 = last.x-5;
            t2 = last.y;
        }
        let s = fontSize.toString() + 'px' + ' ' + attributre.fontS.toString();
        ctx.font = s;
        ctx.fillStyle = attributre.style;
        ctx.fillText(text, t1, t2);
        document.getElementsByClassName("mytext")[0].value = "";
        if(document.querySelector('.mytext').className == 'mytext hid'){
            ctx.restore();
            saveToHistory();
            last = null;
            isDrawing = false;
            points = [];
        }
    }
});

canvas.addEventListener('mousemove', draw);
function draw(e) {
    if(!isDrawing) return; 
    const { x, y } = getPos(e);
    points.push({x, y});
    if( painting === "line"){
        drawLine(last, {x, y});
    } else if(painting === "circle"){
        ctx.putImageData(canvasHistory[step - 1 ], 0, 0);
        ctx.beginPath(); 
        ctx.fillStyle = attributre.style;
        ctx.arc(last.x, last.y, Math.sqrt(Math.pow((x-last.x), 2) + Math.pow((y-last.y), 2)) , 0, 2*Math.PI, true);
        ctx.fill();
    } else if(painting === "rect"){
        ctx.putImageData(canvasHistory[step - 1 ], 0, 0);
        ctx.beginPath(); 
        ctx.fillStyle = attributre.style;
        ctx.fillRect(last.x, last.y, x-last.x, y-last.y);
    } else if(painting === "tran"){
        ctx.putImageData(canvasHistory[step - 1 ], 0, 0);
        ctx.beginPath(); 
        ctx.strokeStyle = attributre.style;
        ctx.fillStyle = attributre.style;
        ctx.moveTo(last.x, last.y);
        ctx.lineTo(x, last.y);
        ctx.lineTo(last.x+(x-last.x)/2, y);
        ctx.fill();
    } else if ((painting==="pen"||painting==="eraser") && points.length > 3) {
        const lastTwoPoints = points.slice(-2);
        const controlPoint = lastTwoPoints[0];
        const endPoint = {
            x: (lastTwoPoints[0].x + lastTwoPoints[1].x) / 2,
            y: (lastTwoPoints[0].y + lastTwoPoints[1].y) / 2,
        }
        drawpen(last, controlPoint, endPoint);
        last = endPoint;
    }
}
function drawpen(last, controlPoint, endPoint) {
    ctx.strokeStyle = attributre.style;
    ctx.lineWidth = attributre.lineW;
    ctx.fillStyle = attributre.style;
    ctx.lineCap = attributre.lineC;
    ctx.lineJoin = attributre.lineJ;
    ctx.beginPath();
    ctx.moveTo(last.x, last.y);
    ctx.quadraticCurveTo(controlPoint.x, controlPoint.y, endPoint.x, endPoint.y);
    ctx.stroke();
}
function drawLine(last, endPoint) {
    ctx.putImageData(canvasHistory[step - 1 ], 0, 0);
    ctx.beginPath();
    ctx.strokeStyle = attributre.style;
    ctx.lineWidth = attributre.lineW;
    ctx.fillStyle = attributre.style;
    ctx.lineCap = attributre.lineC;
    ctx.lineJoin = attributre.lineJ;
    ctx.moveTo(last.x, last.y);
    ctx.lineTo(endPoint.x, endPoint.y);
    ctx.stroke();
}

async function del(){
    await clear();
    ctx.restore();
    saveToHistory();
    last = null;
    isDrawing = false;
    points = [];
}

function clear(){
    return new Promise((resolve, reject) => {
        canvas.width = canvasSize[0].x;
        canvas.height = canvasSize[0].y;
        ctx.putImageData(canvasHistory[0], 0, 0);
        if(isEraser){
            ctx.globalCompositeOperation = 'destination-out';
        }
        resolve();
    });
}

function showTextarea(x, y){
    let textarea = document.getElementsByClassName("mytext")[0];
    textarea.style.left = x;
    textarea.style.top = y;
    textToggle('.mytext');
    let text = textarea.value;
    return text;
}
function textToggle(nowClass){
    let currentEle = document.querySelector(nowClass);
    currentEle.classList.toggle("hid");
}

let text_input = document.getElementById("text_in");
text_input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
        textToggle('.mytext');
        let s = fontSize.toString() + 'px' + ' ' + attributre.fontS.toString();
        ctx.font = s;
        ctx.fillStyle = attributre.style;
        ctx.fillText(text_input.value, t1, t2);
        text_input.value = "";
        if(document.querySelector('.mytext').className == 'mytext hid'){
            ctx.restore();
            saveToHistory();
            last = null;
            isDrawing = false;
            points = [];
        }
  }
});

function loadImg() {
    let storecCheck = step;
    let file =  document.querySelector('#file_input');
    file.onchange = function(){
        let img = new Image();
        img.onload = async function(){
            await getImg(img);
            ctx.restore();
            saveToHistory();
            last = null;
            isDrawing = false;
            points = [];
        }
        img.src = URL.createObjectURL(this.files[0]);
        this.value = "";
    }
}
function getImg(img){
    return new Promise((resolve, reject) => {
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0,0);
        resolve();
    });
}

function save(){
    let img = document.getElementById('myCanvas').toDataURL(); 
    let save_link = document.createElement('a');
    save_link.href = img;
    save_link.download = 'MyGorgeousCanvas.png';
    save_link.click();
}

function back(){
    if(step > 1){
        canvas.width = canvasSize[--step - 1].x;
        canvas.height = canvasSize[step - 1].y;
        ctx.putImageData(canvasHistory[step - 1], 0, 0);
    } else{
        alert("Can't return more.");
    }
}

function forward(){
    if(step < canvasHistory.length){
        canvas.width = canvasSize[step].x;
        canvas.height = canvasSize[step].y;
        ctx.putImageData(canvasHistory[step++], 0, 0);
    } else {
        alert( "Can't forward more.");
    }
}

function saveToHistory(){
    if(step === canvasHistory.length){
        let x = canvas.width, y = canvas.height;
        let nowImage = ctx.getImageData( 0, 0, canvas.width, canvas.height);
        canvasHistory.push(nowImage);
        canvasSize.push({x, y});
        step++;
    } else{
        canvasHistory.length = step;
    }
}

function getPos(e){
    return {
        x: e.offsetX,
        y: e.offsetY
    }
}

function classToggle(nowClass){
    if(nowClass === currentMenu){
        return;
    } else {
        var action = document.querySelector("i." + currentMenu);
        action.classList.toggle("action");
        var currentEle = document.querySelector("i." + nowClass);
        currentEle.classList.toggle("action");
        currentMenu = nowClass;
    }
}

canvas.onmousedown = function(e) {
    if(painting != "spray") return;
    ctx.strokeStyle = attributre.style;
    clientX = e.offsetX;
    clientY = e.offsetY;
    
    timeout = setTimeout(function draw() {
      for (var i = density; i--; ) {
        var radius = attributre.lineW/1.5;
        var offsetX = getRandomInt(-radius, radius);
        var offsetY = getRandomInt(-radius, radius);
        if((offsetX*offsetX + offsetY*offsetY)>radius*radius)
            continue;
        ctx.fillStyle = attributre.style;
        ctx.fillRect(clientX + offsetX, clientY + offsetY, 1, 1);
      }
      if (!timeout) return;
      timeout = setTimeout(draw, 50);
    }, 50);
};
canvas.onmousemove = function(e) {
    if(painting != "spray") return;
    clientX = e.offsetX;
    clientY = e.offsetY;
};