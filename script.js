calculateButton = document.getElementById('calculate');

calculateButton.addEventListener('click', () => {
    visaNoteElement = document.getElementById("visaNote");
    passNoteElement = document.getElementById("passNote");
    requiredNoteElement = document.getElementById("requiredNote");
    requiredNote = calculatePassNote(visaNoteElement.value, passNote.value);
    requiredNoteElement.textContent = "You need to take " + requiredNote + " pass";

});


let calculatePassNote = (visaNote, passNote) => {
    return (passNote - (0.3 * visaNote)) / 0.8;
}