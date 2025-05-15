// Wait for the DOM to be fully loaded before running scripts
document.addEventListener('DOMContentLoaded', function() {

    // --- 1. Change text content dynamically ---
    const textToChangeElement = document.getElementById('textToChange');
    const changeTextButton = document.getElementById('changeTextBtn');

    if (textToChangeElement && changeTextButton) {
        changeTextButton.addEventListener('click', function() {
            textToChangeElement.textContent = 'The text has been successfully changed by JavaScript!';
        });
    } else {
        console.error('Could not find elements for text changing.');
    }

    // --- 2. Modify CSS styles via JavaScript ---
    const styleParagraphElement = document.getElementById('styleParagraph');
    const changeStyleButton = document.getElementById('changeStyleBtn');

    if (styleParagraphElement && changeStyleButton) {
        changeStyleButton.addEventListener('click', function() {
            styleParagraphElement.style.color = 'blue';
            styleParagraphElement.style.fontSize = '20px';
            styleParagraphElement.style.fontWeight = 'bold';
            styleParagraphElement.classList.add('highlight'); // Adds a class defined in <style>
        });
    } else {
        console.error('Could not find elements for style changing.');
    }

    // --- 3. Add or remove an element when a button is clicked ---
    const elementContainer = document.getElementById('elementContainer');
    const addElementButton = document.getElementById('addElementBtn');
    const removeElementButton = document.getElementById('removeElementBtn');
    let newElementCounter = 0; // To give unique IDs or content to new elements

    if (elementContainer && addElementButton && removeElementButton) {
        // Function to add an element
        addElementButton.addEventListener('click', function() {
            newElementCounter++;
            const newDiv = document.createElement('div'); // Create a new div element
            newDiv.textContent = `This is a new element #${newElementCounter} added dynamically.`;
            newDiv.classList.add('new-element'); // Add a class for styling
            newDiv.setAttribute('id', `newElement-${newElementCounter}`); // Set a unique ID

            elementContainer.appendChild(newDiv); // Append the new div to the container
        });

        // Function to remove the last added element
        removeElementButton.addEventListener('click', function() {
            // Find the last child that is a div with the class 'new-element'
            const elementsToRemove = elementContainer.querySelectorAll('.new-element');
            if (elementsToRemove.length > 0) {
                elementContainer.removeChild(elementsToRemove[elementsToRemove.length - 1]);
            } else if (elementContainer.children.length > 1) {
                // If no 'new-element' class found, remove the last child if it's not the initial paragraph
                 const lastChild = elementContainer.lastElementChild;
                 // Ensure we don't remove the initial paragraph if it's the only one left.
                 // This check could be more robust depending on the exact structure.
                 if (lastChild && lastChild.tagName.toLowerCase() !== 'p' || elementContainer.children.length > 1 ) {
                    elementContainer.removeChild(lastChild);
                 } else {
                    alert('No more dynamic elements to remove.');
                 }
            } else {
                alert('No more elements to remove or only the initial one remains.');
            }
        });
    } else {
        console.error('Could not find elements for adding/removing elements.');
    }

});