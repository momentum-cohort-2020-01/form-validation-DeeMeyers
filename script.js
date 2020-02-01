
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
console.log(blanks);
let form = document.querySelector('#parking-form');

form.addEventListener("submit", function(event){
    event.preventDefault();//ask what this is doing
    for(let item of blanks){
        
        if( item.value == ''){
            console.log("invalid");
            item.parentElement.classList.add("input-invalid");
            let parentEl = item.parentNode;
            let errorMessage = document.createElement('p');
            errorMessage.classList.add("input-hint");
            let errorText = document.createTextNode("*attention");
            errorMessage.appendChild(errorText); 
            item.parentElement.appendChild(errorMessage);

            // item.appendChild(errorMessage);


            
            
        

        }
        else{
            console.log("valid");
            item.parentElement.classList.add("input-valid");
            


        }
    }
})


