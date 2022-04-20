'use script'
const picContainerElement = document.getElementById('products');
const firstPicElement = document.getElementById('pic1');
const secondPicElement = document.getElementById('pic2');
const thirdPicElement = document.getElementById('pic3');
const firstPicTitle = document.getElementById('img1title');
const secondPicTitle = document.getElementById('image2title');
const thirdPicTitle = document.getElementById('image3title');

let count = 0

let pic1 = null;
let pic2 = null;
let pic3 = null;

function Image(name, imgPath,){
    this.name = name;
    this.imgPath = imgPath;
    this.clicks = 0;
    this.views = 0;
}

Image.allImages = []

Image.prototype.renderImage = function(img, h2){
    img.src = this.imgPath;
    h2.textContent = this.name;
    this.views ++;
}

Image.allImages.push(new Image('Banana', './images/banana.jpg'));
Image.allImages.push(new Image('Bag', './images/bag.jpg'));
Image.allImages.push(new Image('Bathroom', './images/bathroom.jpg'));
Image.allImages.push(new Image('Boots', './images/boots.jpg'));
Image.allImages.push(new Image('Breakfast', './images/breakfast.jpg'));
Image.allImages.push(new Image('Bubblegum', './images/bubblegum.jpg'));
Image.allImages.push(new Image('Chair', './images/chair.jpg'));
Image.allImages.push(new Image('Cthulhu', './images/cthulhu.jpg'));
Image.allImages.push(new Image('Dog-Duck', './images/dog-duck.jpg'));
Image.allImages.push(new Image('Pen', './images/pen.jpg'));
Image.allImages.push(new Image('Pet-Sweep', './images/pet-sweep.jpg'));
Image.allImages.push(new Image('Scissors', './images/scissors.jpg'));
Image.allImages.push(new Image('Shark', './images/sharl.jpg'));
Image.allImages.push(new Image('Sweep', './images/sweep.jpg'));
Image.allImages.push(new Image('Tauntaun', './images/tauntaun.jpg'));
Image.allImages.push(new Image('Unicorn', './images/unicorn.jpg'));
Image.allImages.push(new Image('Water-Can', './images/water-can.jpg'));
Image.allImages.push(new Image('Wine-Glass', './images/wine-glass.jpg'));

console.log(Image.allImages);

function getThreeImages (){
const cantUse = [pic1, pic2, pic3];
if(cantUse.includes(pic1)){
    let picOne = Math.floor(Math.random() * Image.allImages.length);
    pic1 = Image.allImages[picOne];
}
    cantUse.push[[pic1]]
    if(cantUse.includes(pic2)){
    let picTwo = Math.floor(Math.random() * Image.allImages.length);
    pic2 = Image.allImages [picTwo];
    }
    cantUse.push[[pic2]]
    if(cantUse.includes(pic3)){
    let picThree = Math.floor(Math.random() * Image.allImages.length);
    pic3 = Image.allImages [picThree];
    }
        cantUse.push[pic3];
}

function renderImage(){
    pic1.renderImage(firstPicElement, firstPicTitle);
    pic2.renderImage(secondPicElement, secondPicTitle);
    pic3.renderImage(thirdPicElement, thirdPicTitle);
}
getThreeImages();
renderImage ();