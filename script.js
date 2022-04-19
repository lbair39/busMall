'use script'
const picContainerElement = document.getElementById('products');
const firstPicElement = document.getElementById('imageContainer1');
const secondPicElement = document.getElementById('imageContainer2');
const thirdPicElement = document.getElementById('imageContainer3');
const firstPicTitle = document.getElementById('img1title');
const secondPicTitle = document.getElementById('img2title');
const thirdPicTitle = document.getElementById('img3title');

function Image(name, imgPath,){
    this.name = name;
    this.imgPath = imgPath;
    this.clicks = 0;
    this.views = 0;
}

Image.allImages = []
Image.allImages.push(new Image('Banana', './images/banana.jpg'));
Image.allImages.push(new Image('Bag', './images/bag.jpg'));
Image.allImages.push(new Image('Bathroom', './images/bathroom.jpg'));
Image.allImages.push(new Image('Boots', './images/boots.jpg'));
Image.allImages.push(new Image('Breakfast', './images/breakfast.jpg'));
Image.allImages.push(new Image('Bubblegum', './images/bubblegum.jpg'));
Image.allImages.push(new Image('Chair', './images/chair.jpg'));
Image.allImages.push(new Image('Cthulhu', './images/cthulu.jpg'));
Image.allImages.push(new Image('Dog-Duck', './images/dog-duck.jpg'));
Image.allImages.push(new Image('Pen', './images/pen.jpg'));
Image.allImages.push(new Image('Pet-Sweep', './images/pet-sweep.jpg'));
Image.allImages.push(new Image('Scissors', './images/scissors.jpg'));
Image.allImages.push(new Image('Shark', './images/sharl.jpg'));
Image.allImages.push(new Image('Sweep', './images/sweep.jpg'));
Image.allImages.push(new Image('Tauntaun', './images/tauntaun.jpg'));
Image.allImages.push(new Image('Unicorn', './images/uniforn.jpg'));
Image.allImages.push(new Image('Water-Can', './images/water-can.jpg'));
Image.allImages.push(new Image('Wine-Glass', './images/wine-glass.jpg'));

console.log(Image.allImages);
