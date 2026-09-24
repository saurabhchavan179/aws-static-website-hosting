// ===============================
// Smooth Scroll Active Link
// ===============================

const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navLinks.forEach(item => item.classList.remove("active"));

        link.classList.add("active");

    });

});


// ===============================
// Typing Animation
// ===============================

const text = [
    "AWS Enthusiast",
    "Linux Learner",
    "DevOps Enthusiast",
    "Cloud Computing"
];

let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type(){

    if(count === text.length){
        count = 0;
    }

    currentText = text[count];

    letter = currentText.slice(0, ++index);

    document.querySelector(".hero-text h2").textContent = letter;

    if(letter.length === currentText.length){

        count++;
        index = 0;

        setTimeout(type,1500);

    }
    else{

        setTimeout(type,120);

    }

})();


// ===============================
// Reveal Animation
// ===============================

const observer = new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

});

document.querySelectorAll("section").forEach(sec=>{

observer.observe(sec);

});


// ===============================
// Back To Top Button
// ===============================

const btn = document.createElement("button");

btn.innerHTML="⬆";

btn.id="topBtn";

document.body.appendChild(btn);

btn.style.position="fixed";
btn.style.bottom="25px";
btn.style.right="25px";
btn.style.width="50px";
btn.style.height="50px";
btn.style.borderRadius="50%";
btn.style.border="none";
btn.style.background="#38bdf8";
btn.style.cursor="pointer";
btn.style.display="none";
btn.style.fontSize="20px";
btn.style.boxShadow="0 0 20px rgba(0,0,0,.3)";

window.addEventListener("scroll",()=>{

if(window.scrollY>300){

btn.style.display="block";

}else{

btn.style.display="none";

}

});

btn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};


// ===============================
// Greeting Based On Time
// ===============================

const hour = new Date().getHours();

let greeting = "Welcome";

if(hour < 12){

greeting = "Good Morning ☀️";

}

else if(hour < 18){

greeting = "Good Afternoon 🌤️";

}

else{

greeting = "Good Evening 🌙";

}

console.log(greeting);


// ===============================
// Profile Image Hover
// ===============================

const img = document.querySelector(".hero-image img");

img.addEventListener("mousemove",()=>{

img.style.transform="scale(1.05) rotate(2deg)";

});

img.addEventListener("mouseleave",()=>{

img.style.transform="scale(1)";

});