/**
 * DONE: Update the text in the "Formatted Text" section as a user types in the textarea.
 * TODO: Add a .bold, .italic classed to "Formatted Text" when the aapropriate button is clicked
 * TODO: Add an .underline class to "Formatted Text" when Unerline button is clicked.
 * TODO: Toggle the align style for "Formatted Text" when the appropriate button is clicked.
 */

//Update the output text as a user types in the textarea
function updateText(){
   // console.log("working");
    let text = document.getElementById("text-input").value;
    document.getElementById('text-output').innerText = text;
}