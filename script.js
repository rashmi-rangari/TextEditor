/**
 * DONE: Update the text in the "Formatted Text" section as a user types in the textarea.
 * DONE: Add a .bold, .italic classed to "Formatted Text" when the aapropriate button is clicked
 * TODO: Add an .underline class to "Formatted Text" when Unerline button is clicked.
 * TODO: Toggle the align style for "Formatted Text" when the appropriate button is clicked.
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

function makeItalic(elem){
    elem.classList.toggle('active');
    document.getElementById('text-output').classList.toggle('italic');
}

function makeUnderline(elem){
    elem.classList.toggle('active');
    let formatteText = document.getElementById('text-output').classList.toggle('underline');
    if(formatteText.classList.contains('underline')){
        formatteText.classList.remove('underline');
    } else{
        formatteText.classList.add('underline');
    }
}