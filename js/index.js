// 1 - click on image >> layer is show
// 2 - click on x mark the layer is hidden
// 3 - click on layer the layer is hidden
// 4 - click on next arrow the next image is show >> mouse
// 5 - click on prev arrow the prev image is show>> mouse
// 6 - click on next arrow the next image is show >> keyboard
// 7 - click on prev arrow the prev image is show>> keyboard

// var img = document.querySelectorAll(".box img");
// for(var i = 0 ; i <img.length ; i++){
//     img[i];
//     console.log(img)
// }

// Selected
var boxes =document.querySelector(".boxes");
var xMark = document.querySelector("#xMark");
var nextArrow = document.querySelector("#nextArrow");
var preArrow = document.querySelector("#preArrow");
var layer =document.querySelector(".layer");
var layer_img =document.querySelector(".layer img");
var images =Array.from(document.querySelectorAll(".container img"));
var index ;

// console.log(images.indexOf());
// console.log(layer_img)

// console.log(xMark);
// console.log(nextArrow);
// console.log(preArrow);
// if(eventInfo.target.getAttribute("src") !=== null ){
    
// }

boxes.addEventListener("click" , function(eventInfo){
    index =images.indexOf(eventInfo.target);
    if(eventInfo.target.getAttribute("src") !== null){
        
        layer.classList.replace("d-none","d-flex");
        layer_img.setAttribute("src",eventInfo.target.getAttribute("src"));
    }
})
// Event X mark Remove layer
xMark.addEventListener("click",function(eventInfo){
    eventInfo.stopPropagation();
    layer.classList.replace("d-flex","d-none");
})
// Remove layer when click the layer
layer.addEventListener("click",function(eventInfo){
    eventInfo.stopPropagation();
    layer.classList.replace("d-flex","d-none");
})
// prevent image hidden
layer_img.addEventListener("click",function(eventInfo){
    eventInfo.stopPropagation();
})

// Function Next image
function Next(){
    index ++;
    if(index ===images.length -1){
        index = 0;
    }
    var nextImage = images[index];
    layer_img.setAttribute("src",nextImage.getAttribute("src"));
}

// Event Next image by Mouse

nextArrow.addEventListener('click',function(eventInfo){
    eventInfo.stopPropagation();
    Next();

})

// Function previous image

function prev(){
    index -- ;
    if (index === -1){
        index = 5;
    }
    var nextImage = images[index];
    layer_img.setAttribute("src",nextImage.getAttribute("src"));
}

// Event previous function by mouse

preArrow.addEventListener('click',function(eventInfo){
    eventInfo.stopPropagation();
    prev();
})

document.addEventListener("keyup",function(eventInfo){
    // console.log(eventInfo);
    if(eventInfo.code == "ArrowRight"){
        Next();
    }else if (eventInfo.code == "ArrowLeft") {
        prev();
    }else if (eventInfo.code == "Space"){
        layer.classList.replace("d-flex","d-none");

    }
})

