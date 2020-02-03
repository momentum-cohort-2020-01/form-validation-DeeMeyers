
//add a class to all the input boxes in html
//make querry all for all boxes
//make a for let of item of boxes that will then do the actual check of 
    //of wether or not the feild is filled
//use css and showstring to highlight or not highlight boxes

//make the loop triggered by the submit button
    //add a click eventListener for the submit button


//Step One -Complete

// let blanks = document.querySelectorAll("input");
// console.log(blanks);
// let form = document.querySelector('#parking-form');

// form.addEventListener("submit", function(event){
//     event.preventDefault();
//     for(let item of blanks){
//         console.log(item.value);
//         console.log(item.innerText);
//         if( item.value == ''){
//             console.log("invalid");
//             item.parentElement.classList.add("input-invalid");
//         }
//         else{
//             console.log("valid");
//             item.parentElement.classList.add("input-valid");


//         }
//     }
// })


//Step Two -working on it

let blanks = document.querySelectorAll("input");
let form = document.querySelector('#parking-form');

form.addEventListener("submit", function(event){
    event.preventDefault();//ask what this is doing: it is just making things wait for button press
    
    //this finds and clears out the old hints
    let alerts = document.querySelectorAll('.input-hint');
    // console.log(alerts);
    for (let alert of alerts){
        alert.remove();
    };

    for(let item of blanks){
        
        
        if(item.value == ''){
            //this removes the previous valid/invalid class tags
            item.parentElement.classList.remove("input-invalid", "input-valid");
            item.parentElement.classList.add("input-invalid");
            //adding the requiered hint thing
            let parentEl = item.parentNode;
            let errorMessage = document.createElement('p');
            errorMessage.classList.add("input-hint");
            let errorText = document.createTextNode("*attention");
            errorMessage.appendChild(errorText); 
            item.parentElement.appendChild(errorMessage);

            
        }
            
            
        
        else{
            item.parentElement.classList.remove("input-invalid", "input-valid");
            item.parentElement.classList.add("input-valid");
        };
        
        
    };
});


