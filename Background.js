function backgroundImg(){
    // First we are making an array to load all the images and we are going to fetch our images from here
    const img = ['url("Images/1.jpg")','url("Images/2.jpg")','url("Images/3.jpg")','url("Images/4.jpg")','url("Images/5.jpg")',
                 'url("Images/6.jpg")','url("Images/7.jpg")','url("Images/8.jpg")','url("Images/9.jpg")','url("Images/10.jpg")'];
    
    
    const conta = document.querySelector('.container');
    //Using Math.random to get random number from 0 to 1 that to in decimal
    //Using Math.floor allows us to take the number before the decimal
    //Using img.length will give us the length of the array
    //All this give us a random number between 1 to 10 and that number is 
    //included in the img to fetch the image and display it.
    const bagr = img[Math.floor(Math.random()* img.length)]
    
    //Applying custom css in JS
    conta.style.backgroundImage = bagr;
    conta.style.transition = "3s ease-in";
}
//Setting intervals, 3000 is 3s
setInterval(backgroundImg,3000);

