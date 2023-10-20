// Add a loading page to hint at the purpose of the site and guide user interaction.

// I chose to use the Typing effect to make users focus on the text first when entering the website.

const text = document.getElementById("type-effect");
const content = '"Keep the doors open for a while. Certainly those winds would enter"'
let i = 0;
const speed = 50;    

Window.onload = typeEffect( );

function loadPageAfterDelay(loadTime, url){
  
    document.getElementById("load-link").style.display = 'none';
   
    document.getElementById("load-throbber").style.display = 'block';
  
    setTimeout(() => { 
      window.location.href = url;
    }, loadTime);

}

function typeEffect() {
    if (i <= content.length) {
        text.innerHTML += content.charAt(i);
        i++;
        setTimeout(typeEffect, speed);
    }
}
