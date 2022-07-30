let ratings = document.querySelectorAll('.cir'); // all spans with numbers
let number = document.querySelector('.lol');

//looping through spans with numbers
for (let i = 0; i < ratings.length; i++) {
    ratings[i].addEventListener('click', () => {
        //looping through spans to add and remove classes to select one rating at a time only
        for (let i = 0; i < ratings.length; i++) {
            ratings[i].classList.contains('selected')
            ratings[i].classList.remove('selected');
        }
        //add selected class to the selected rating
        ratings[i].classList.add('selected');
        let numberText = document.querySelector('.selected').innerHTML;
        number.textContent = numberText;
    })
};


let submit = document.querySelector('.submit');
let boxOne = document.querySelector('.box-one');
let boxTwo = document.querySelector('.box-two');
// getting text of the span number that has selected class


submit.addEventListener('click', () => {
    boxOne.classList.add("none");
    boxTwo.classList.remove("none");


    
} )



