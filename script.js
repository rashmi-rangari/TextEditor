/**
 * DONE: Update the text in the "Formatted Text" section as a user types in the textarea.
 * DONE: Add a .bold, .italic classed to "Formatted Text" when the aapropriate button is clicked
 * DONE: Add an .underline class to "Formatted Text" when Unerline button is clicked.
 * DONE: Toggle the align style for "Formatted Text" when the appropriate button is clicked.
 */

//Update the output text as a user types in the textarea
function updateText(){
   // console.log("working");
    let text = document.getElementById("text-input").value;
    document.getElementById('text-output').innerText = text;
}

// Toggle the bold class for ouptut text
function makeBold(elem){
   
    elem.classList.toggle('active');
    document.getElementById('text-output').classList.toggle('bold');
}  

//// Toggle the italic class for ouptut text
function makeItalic(elem){
    elem.classList.toggle('active');
    document.getElementById('text-output').classList.toggle('italic');
}

//// Toggle the underline class for ouptut text
function makeUnderline(elem){
    elem.classList.toggle('active');
    let formattedText = document.getElementById('text-output').classList.toggle('underline');
    if(formattedText.classList.contains('underline')){
        formattedText.classList.remove('underline');
    } else{
        formattedText.classList.add('underline');
    }
}

function alignText(elem, alignType){
    elem.classList.toggle('active');
    document.getElementById('text-output').style.textAlign = alignType;
    let buttonsList = document.getElementsByClassName('align');
    for(let i=0; i < buttonsList.length; i++){
        buttonsList[i].classList.remove('active');
    }
    elem.classList.add('active');
}