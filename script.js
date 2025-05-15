document.addEventListener('DOMContentLoaded', () => {
    const gebi = (id) => document.getElementById(id);

    // --- Update current year in footer ---
    const currentYearEl = gebi('currentYear');
    if (currentYearEl) {
        currentYearEl.textContent = new Date().getFullYear();
    }

    // --- 1. Dynamic Text & Attribute Modification ---
    const textInput = gebi('textInput');
    const updateTextBtn = gebi('updateTextBtn');
    const dynamicParagraph = gebi('dynamicParagraph');
    const changeImageBtn = gebi('changeImageBtn');
    const changeableImage = gebi('changeableImage');
    let imageToggle = false;

    if (updateTextBtn && textInput && dynamicParagraph) {
        updateTextBtn.addEventListener('click', () => {
            dynamicParagraph.textContent = textInput.value || "Please enter some text.";
            textInput.value = '';
        });
        textInput.addEventListener('input', () => {
            dynamicParagraph.textContent = textInput.value || "Type to see live update...";
        });
    }

    if (changeImageBtn && changeableImage) {
        changeImageBtn.addEventListener('click', () => {
            if (imageToggle) {
                changeableImage.src = 'https://via.placeholder.com/200x100.png?text=Image+1';
                changeableImage.alt = 'Placeholder Image 1';
            } else {
                changeableImage.src = 'https://via.placeholder.com/200x100.png?text=Image+2+Changed';
                changeableImage.alt = 'Placeholder Image 2 - Changed via JS';
            }
            imageToggle = !imageToggle;
        });
    }

    // --- 2. CSS Style and Class Manipulation ---
    const styleTargetParagraph = gebi('styleTargetParagraph');
    const toggleClassBtn = gebi('toggleClassBtn');
    const interactiveBox = gebi('interactiveBox');

    if (toggleClassBtn && styleTargetParagraph) {
        toggleClassBtn.addEventListener('click', () => {
            styleTargetParagraph.classList.toggle('complex-style');
            styleTargetParagraph.style.color = styleTargetParagraph.classList.contains('complex-style') ? 'orangered' : '';
        });
    }

    if (interactiveBox) {
        interactiveBox.addEventListener('mouseover', () => {
            interactiveBox.classList.add('interactive-box-hover');
            interactiveBox.textContent = 'Thanks!';
        });
        interactiveBox.addEventListener('mouseout', () => {
            interactiveBox.classList.remove('interactive-box-hover');
            interactiveBox.textContent = 'Hover over me!';
        });
    }

    // --- 3. Element Creation, Addition, Removal, and Cloning (Dynamic List) ---
    const listItemInput = gebi('listItemInput');
    const addItemBtn = gebi('addItemBtn');
    const dynamicList = gebi('dynamicList');
    const cloneListBtn = gebi('cloneListBtn');
    const clonedElementsContainer = gebi('clonedElementsContainer');

    const createListItem = (text) => {
        const li = document.createElement('li');
        li.className = 'dynamic-list-item';
        const span = document.createElement('span');
        span.textContent = text;
        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.className = 'remove-item-btn';
        li.appendChild(span);
        li.appendChild(removeBtn);
        return li;
    };

    if (addItemBtn && listItemInput && dynamicList) {
        addItemBtn.addEventListener('click', () => {
            const newItemText = listItemInput.value.trim();
            if (newItemText) {
                dynamicList.appendChild(createListItem(newItemText));
                listItemInput.value = '';
            } else {
                alert('Please enter text for the list item.');
            }
        });
    }

    // Event Delegation for removing list items
    if (dynamicList) {
        dynamicList.addEventListener('click', (event) => {
            if (event.target && event.target.classList.contains('remove-item-btn')) {
                event.target.closest('.dynamic-list-item').remove();
            }
        });
    }

    if (cloneListBtn && dynamicList && clonedElementsContainer) {
        cloneListBtn.addEventListener('click', () => {
            const clonedList = dynamicList.cloneNode(true); // true for deep clone (includes children)
            clonedList.id = ''; // Avoid duplicate IDs

            const title = document.createElement('h4');
            title.textContent = `Cloned List (${new Date().toLocaleTimeString()})`;
            clonedElementsContainer.appendChild(title);
            clonedElementsContainer.appendChild(clonedList);
        });
    }

    // --- 4. Toggle Element Visibility ---
    const toggleVisibilityBtn = gebi('toggleVisibilityBtn');
    const toggleableContent = gebi('toggleableContent');

    if (toggleVisibilityBtn && toggleableContent) {
        toggleVisibilityBtn.addEventListener('click', () => {
            toggleableContent.classList.toggle('hidden');
            toggleVisibilityBtn.textContent = toggleableContent.classList.contains('hidden') ? 'Show Content' : 'Hide Content';
        });
    }
});