// script for parallax effect
let text= document.getElementById('text');

let leaf= document.getElementById('leaf');
let hill1= document.getElementById('hill1');
let hill3= document.getElementById('hill3');
let hill2= document.getElementById('hill2');
let grass= document.getElementById('grass');
let tree= document.getElementById('tree');
let plant= document.getElementById('plant');

let hill4= document.getElementById('hill4');
let hill5= document.getElementById('hill5');


window.addEventListener('scroll',function () {
 let value= window.scrollY;
 
 text.style.marginTop = value * 1.8+ 'px';

 leaf.style.top= value * -1 + 'px';
 leaf.style.left= value * 1 + 'px';
 hill5.style.left=value * 1 + 'px';
 hill4.style.left=value * -1 + 'px';
 hill1.style.marginTop=value * 1.5 + 'px';
 hill2.style.marginTop=value * 1 + 'px';
 hill3.style.marginTop=value * 1 + 'px';
 tree.style.marginTop=value * .3 + 'px';
 plant.style.marginTop=value * .2 + 'px';
 
 let opacity= 1- value /800;
 if(opacity >= 0){

    text.style.opacity = opacity;
 }
 
 
});
// script for scrolling menubar
let menubar = document.getElementById('menubar');
let menubarInitialTop = menubar.offsetTop; // Store the initial top position of menubar

window.addEventListener('scroll', function () {
    let value = window.scrollY;
    let menubarScrollSpeed = 1; // Adjust the speed of movement as needed
    let transparencyFactor = value / (document.body.scrollHeight - window.innerHeight); // Calculate the transparency factor based on scroll position

    // Calculate new top position for menubar based on scroll position
    let newMenubarTop = menubarInitialTop + (value * menubarScrollSpeed);

    // Apply the new top position to menubar
    menubar.style.top = newMenubarTop + 'px';

    // Set the background color of menubar with transparency
    menubar.style.backgroundColor = `rgba(255, 255, 241, ${.9 - transparencyFactor})`;

    
    
});
// for pop up heading animation
  window.addEventListener('scroll', function() {
    var heading = document.getElementById('pop-up-heading');
    var bounding = heading.getBoundingClientRect();
    
    if (bounding.top >= 0 && bounding.bottom <= window.innerHeight) {
      heading.style.opacity = '1';
      heading.style.transform = 'translateX(0)';
    } else {
      heading.style.opacity = '0';
      heading.style.transform = 'translateX(-50px)';
    }
  });
  // for side to side text animation
  window.addEventListener('scroll', function() {
    var heading = document.getElementById('main-heading');
    var bounding = heading.getBoundingClientRect();
    
    // Calculate the viewport height
    var windowHeight = window.innerHeight || document.documentElement.clientHeight;

    // Define a suitable range for triggering the animation
    var triggerRange = windowHeight * 0.3; // Adjust this value as needed
    
    // Check if the heading is partially within the viewport
    if (bounding.top >= -triggerRange && bounding.bottom <= windowHeight + triggerRange) {
        heading.style.opacity = '1';
        heading.style.transform = 'translateY(0)';
        heading.style.transition = 'ease 1.5s';
    } else {
        heading.style.opacity = '0';
        heading.style.transform = 'translateY(60px)';
    }
});
   // Function to generate random color for style
   function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  // Function to change heading font color to a random color
  function changeColor() {
    document.getElementById('text').style.color = getRandomColor();
  }

  // Adding event listener to the specific image
  document.getElementById('image').onclick = changeColor;
  window.addEventListener('scroll', function() {
    var heading = document.getElementById('pop-up-heading');
    var bounding = heading.getBoundingClientRect();
    
    if (bounding.top >= 0 && bounding.bottom <= window.innerHeight) {
      heading.style.opacity = '1';
      heading.style.transform = 'translateX(0)';
    } else {
      heading.style.opacity = '0';
      heading.style.transform = 'translateX(-50px)';
    }
  });
  