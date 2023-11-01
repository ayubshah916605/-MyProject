//this is first topic
// const title = document.getElementById('name')
// const add = document.getElementById('addbutton')
// const remove = document.getElementById('removebutton')

// add.classList.add('button')
// remove.classList.add('button')


// add.addEventListener("click", ()=> {
//     title.classList.add('name');
// })

// remove.addEventListener("click", ()=> {
//     title.classList.add('name');
//     title.style.display="none"
// })

//this is scond topic

// const heading =document.createElement("h1")

// heading.innerHTML =  "game"
// heading.style.color="blue"
// heading.style.backgroundColor="green"
// heading.style.textAlign="center"

// heading.addEventListener("mouseenter",()=>{
//     heading.innerHTML="Sir wins"

// })

// document.body.appendChild(heading)
// Get the image element.
// Get the image element.
// const image = document.querySelector('img');

// Add a mousemove event listener to the image.
//sir nabeel task.
// const images = document.querySelectorAll(".image");

// const img1 = "bulb.webp";
// const img2 = "bulb.webp";

// images.forEach(image => {
//     image.addEventListener("click", () => {
//         images.forEach(img => {
//             img.src = img1; 
//         });
//         image.src = img2; 
//     });
// });


// Get a NodeList of all the bulbs
const bulbs = document.querySelectorAll('.bulb');

// Function to turn off all bulbs
function turnOffAllBulbs() {
    bulbs.forEach(bulb => {
        bulb.src = "./Assessts/bulb-off.webp";
        bulb.alt = "Bulb Off";
    });
}

// Function to toggle a specific bulb
function toggleBulb(event) {
    turnOffAllBulbs(); // First, turn off all bulbs
    const clickedBulb = event.target;
    clickedBulb.src = "./Assessts/bulb-on.webp"; // Turn on the clicked bulb
    clickedBulb.alt = "Bulb On";
}

// Attach the toggleBulb function to each bulb's click event
bulbs.forEach(bulb => {
    bulb.addEventListener('click', toggleBulb);
});






